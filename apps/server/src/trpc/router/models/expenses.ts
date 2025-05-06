import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
    convertExpense,
    getTotalFromShares,
    isValidExpense,
    zPartialExpenseShare,
} from '@jshare/common';
import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zDeleteArgs, zFindByIdArgs, zFindManyArgs, zUpdateArgs } from './_util';

export const expensesRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.expense.findMany({
            where: {
                id: {
                    in: opts.input.ids,
                },
            },
            include: {
                shares: true,
            },
        });
    }),
    findMany: authProcedure
        .input(zFindManyArgs(zDB.models.ExpenseSchema.pick({ groupId: true })))
        .query(async (opts) => {
            const queries = opts.input.queries;
            return Promise.all(
                queries.map(async (query) => {
                    return db.expense.findMany({
                        where: query,
                        include: {
                            shares: true,
                        },
                    });
                })
            );
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
            const { data } = opts.input;
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

        return db.expense.update({
            where: {
                id: opts.input.id,
            },
            include: {
                shares: true,
            },
            data: {
                archived: true,
            },
        });
    }),
});
