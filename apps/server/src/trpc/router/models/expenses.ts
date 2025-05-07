import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
    convertExpense,
    getTotalFromShares,
    isValidExpense,
    zPartialExpenseShare,
} from '@jshare/common';
import { zDB } from '@jshare/db';

import { adminDb, db } from '../../../services/db';
import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zDeleteArgs, zSyncArgs, zUpdateArgs } from './_util';

export const expensesRouter = router({
    sync: authProcedure.input(zSyncArgs).query(async (opts) => {
        const timestamp = Date.now();

        const groupIds = await db.groupParticipant
            .findMany({
                where: {
                    userId: opts.ctx.userId,
                },
            })
            .then((res) => res.map((p) => p.groupId));

        const created = await db.expense.findMany({
            where: {
                groupId: {
                    in: groupIds,
                },
                createdAt: {
                    gt: new Date(opts.input.lastSync),
                },
            },
            include: {
                shares: true,
            },
        });

        const updated = await db.expense.findMany({
            where: {
                groupId: {
                    in: groupIds,
                },
                updatedAt: {
                    gt: new Date(opts.input.lastSync),
                },
            },
            include: {
                shares: true,
            },
        });

        const removed = await adminDb.expense
            .findMany({
                where: {
                    groupId: {
                        in: groupIds,
                    },
                    archivedAt: {
                        gt: new Date(opts.input.lastSync),
                    },
                },
            })
            .then((res) => res.map((e) => e.id));

        return {
            created,
            updated,
            removed,
            timestamp,
        };
    }),
    create: authProcedure
        .input(
            zCreateArgs(
                z.object({
                    groupId: z.string(),
                    payerId: z.string(),
                    amount: z.number().min(1),
                    description: z.string().min(1).max(100),
                    currency: zDB.enums.CurrencyCodeSchema,
                    shares: zPartialExpenseShare.array().min(1),
                })
            )
        )
        .mutation(async (opts) => {
            const { id, data } = opts.input;
            const isUserInGroup = await opts.ctx.acl.isInGroup(data.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${data.groupId} not found`,
                });
            }

            if (
                !isValidExpense({
                    amount: data.amount,
                    currency: data.currency,
                    shares: data.shares,
                })
            ) {
                const total = getTotalFromShares(data.shares);
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: `Total amount from shares (${total}) does not match the amount (${data.amount})`,
                });
            }

            const group = await db.group.findUnique({
                where: {
                    id: data.groupId,
                },
                select: {
                    currency: true,
                },
            });

            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${data.groupId} not found`,
                });
            }

            const convertedExpense = convertExpense({
                expense: {
                    amount: data.amount,
                    currency: data.currency,
                    shares: data.shares,
                },
                conversion:
                    data.currency === group.currency
                        ? null
                        : {
                              to: group.currency,
                              exchangeRates: await getLatestExchangeRates(),
                          },
            });

            return db.expense.create({
                data: {
                    id,
                    ownerId: opts.ctx.userId,
                    groupId: data.groupId,
                    payerId: data.payerId,
                    amount: data.amount,
                    description: data.description,
                    currency: data.currency,
                    conversion: convertedExpense.conversion,
                    shares: {
                        createMany: {
                            data: convertedExpense.shares.map((share) => ({
                                userId: share.userId,
                                amount: share.amount,
                                currency: data.currency,
                                locked: share.locked,
                                conversion: share.conversion,
                            })),
                        },
                    },
                },
                include: {
                    shares: true,
                },
            });
        }),
    update: authProcedure
        .input(
            zUpdateArgs(
                z.object({
                    payerId: z.string(),
                    amount: z.number().min(1),
                    description: z.string().min(1).max(100),
                    currency: zDB.enums.CurrencyCodeSchema,
                    shares: zPartialExpenseShare.array().min(1),
                })
            )
        )
        .mutation(async (opts) => {
            const { data, id } = opts.input;

            const expense = await db.expense.findUnique({
                where: {
                    id,
                },
                include: {
                    group: {
                        select: {
                            currency: true,
                        },
                    },
                },
            });

            if (!expense) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Expense with id ${id} not found`,
                });
            }

            if (expense.ownerId !== opts.ctx.userId) {
                const isAdmin = await opts.ctx.acl.isAdmin(expense.groupId);

                if (!isAdmin) {
                    throw new TRPCError({
                        code: 'NOT_FOUND',
                        message: `Only the owner of an expense can update it`,
                    });
                }
            }

            if (
                !isValidExpense({
                    amount: data.amount,
                    currency: data.currency,
                    shares: data.shares,
                })
            ) {
                const total = getTotalFromShares(data.shares);
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: `Total amount from shares (${total}) does not match the amount (${data.amount})`,
                });
            }

            const convertedExpense = convertExpense({
                expense: {
                    amount: data.amount,
                    currency: data.currency,
                    shares: data.shares,
                },
                conversion:
                    data.currency === expense.group.currency
                        ? null
                        : {
                              to: expense.group.currency,
                              exchangeRates: await getLatestExchangeRates(),
                          },
            });

            return db.$transaction(async (tx) => {
                await tx.expenseShare.deleteMany({
                    where: {
                        expenseId: id,
                    },
                });

                return tx.expense.update({
                    where: {
                        id,
                    },
                    data: {
                        payerId: data.payerId,
                        amount: data.amount,
                        description: data.description,
                        currency: data.currency,
                        conversion: convertedExpense.conversion,
                        shares: {
                            createMany: {
                                data: convertedExpense.shares.map((share) => ({
                                    userId: share.userId,
                                    amount: share.amount,
                                    currency: data.currency,
                                    locked: share.locked,
                                    conversion: share.conversion,
                                })),
                            },
                        },
                    },
                    include: {
                        shares: true,
                    },
                });
            });
        }),
    delete: authProcedure.input(zDeleteArgs).mutation(async (opts) => {
        const expense = await db.expense.findUnique({
            where: {
                id: opts.input.id,
            },
        });

        if (!expense || !(await opts.ctx.acl.isInGroup(expense.groupId))) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Expense with id ${opts.input.id} not found`,
            });
        }

        if (
            expense.ownerId !== opts.ctx.userId &&
            !(await opts.ctx.acl.isGroupAdmin(expense.groupId))
        ) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: `The expense can only be deleted by its owner (${expense.ownerId}) or group admins`,
            });
        }

        await db.expense.update({
            where: {
                id: opts.input.id,
            },
            data: {
                archived: true,
                archivedAt: new Date(),
            },
        });
    }),
});
