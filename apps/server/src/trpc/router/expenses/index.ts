import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
    convertExpense,
    getTotalFromShares,
    isValidExpense,
    sumInCurrency,
    zPartialExpenseShare,
} from '@jshare/common';
import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';

export const expensesRouter = router({
    get: authProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
        const expense = await db.expense.findUnique({
            where: {
                id: opts.input.id,
            },
            include: {
                shares: true,
            },
        });

        if (!expense || !opts.ctx.acl.isInGroup(expense.groupId)) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Expense with id ${opts.input.id} not found`,
            });
        }

        return expense;
    }),
    list: authProcedure
        .input(
            z.object({
                groupId: z.string(),
            })
        )
        .query(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            return db.expense.findMany({
                where: {
                    groupId: opts.input.groupId,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    shares: true,
                },
            });
        }),
    create: authProcedure
        .input(
            z.object({
                groupId: z.string(),
                payerId: z.string(),
                amount: z.number().min(1),
                description: z.string().min(1).max(100),
                currency: zDB.enums.CurrencyCodeSchema,
                shares: zPartialExpenseShare.array().min(1),
            })
        )
        .mutation(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            if (
                !isValidExpense({
                    amount: opts.input.amount,
                    currency: opts.input.currency,
                    shares: opts.input.shares,
                })
            ) {
                const total = getTotalFromShares(opts.input.shares);
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: `Total amount from shares (${total}) does not match the amount (${opts.input.amount})`,
                });
            }

            const group = await db.group.findUnique({
                where: {
                    id: opts.input.groupId,
                },
                select: {
                    currency: true,
                },
            });

            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const convertedExpense = convertExpense({
                expense: {
                    amount: opts.input.amount,
                    currency: opts.input.currency,
                    shares: opts.input.shares,
                },
                conversion:
                    opts.input.currency === group.currency
                        ? null
                        : {
                              to: group.currency,
                              exchangeRates: await getLatestExchangeRates(),
                          },
            });

            const expense = await db.expense.create({
                data: {
                    ownerId: opts.ctx.userId,
                    groupId: opts.input.groupId,
                    payerId: opts.input.payerId,
                    amount: opts.input.amount,
                    description: opts.input.description,
                    currency: opts.input.currency,
                    conversion: convertedExpense.conversion,
                    shares: {
                        createMany: {
                            data: convertedExpense.shares.map((share) => ({
                                userId: share.userId,
                                amount: share.amount,
                                currency: opts.input.currency,
                                locked: share.locked,
                                conversion: share.conversion,
                            })),
                        },
                    },
                },
            });

            return expense;
        }),
    update: authProcedure
        .input(
            z.object({
                expenseId: z.string(),
                groupId: z.string(),
                payerId: z.string(),
                amount: z.number().min(1),
                description: z.string().min(1).max(100),
                currency: zDB.enums.CurrencyCodeSchema,
                shares: zPartialExpenseShare.array().min(1),
            })
        )
        .mutation(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const [expense, group] = await Promise.all([
                db.expense.findUnique({
                    where: {
                        id: opts.input.expenseId,
                        groupId: opts.input.groupId,
                    },
                }),
                db.group.findUnique({
                    where: {
                        id: opts.input.groupId,
                    },
                }),
            ]);

            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            if (!expense) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Expense with id ${opts.input.expenseId} not found`,
                });
            }

            if (expense.ownerId !== opts.ctx.userId) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Only the owner of an expense can update it`,
                });
            }

            if (
                !isValidExpense({
                    amount: opts.input.amount,
                    currency: opts.input.currency,
                    shares: opts.input.shares,
                })
            ) {
                const total = getTotalFromShares(opts.input.shares);
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: `Total amount from shares (${total}) does not match the amount (${opts.input.amount})`,
                });
            }

            const convertedExpense = convertExpense({
                expense: {
                    amount: opts.input.amount,
                    currency: opts.input.currency,
                    shares: opts.input.shares,
                },
                conversion:
                    opts.input.currency === group.currency
                        ? null
                        : {
                              to: group.currency,
                              exchangeRates: await getLatestExchangeRates(),
                          },
            });

            return db.$transaction(async (tx) => {
                await tx.expenseShare.deleteMany({
                    where: {
                        expenseId: opts.input.expenseId,
                    },
                });

                return tx.expense.update({
                    where: {
                        id: opts.input.expenseId,
                    },
                    data: {
                        payerId: opts.input.payerId,
                        amount: opts.input.amount,
                        description: opts.input.description,
                        currency: opts.input.currency,
                        conversion: convertedExpense.conversion,
                        shares: {
                            createMany: {
                                data: convertedExpense.shares.map((share) => ({
                                    userId: share.userId,
                                    amount: share.amount,
                                    currency: opts.input.currency,
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
    delete: authProcedure.input(z.object({ expenseId: z.string() })).mutation(async (opts) => {
        const expense = await db.expense.findUnique({
            where: {
                id: opts.input.expenseId,
            },
        });

        if (!expense || !(await opts.ctx.acl.isInGroup(expense.groupId))) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Expense with id ${opts.input.expenseId} not found`,
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

        return db.expense.delete({
            where: {
                id: opts.input.expenseId,
            },
        });
    }),
    getTotalForGroup: authProcedure.input(z.object({ groupId: z.string() })).query(async (opts) => {
        const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
        if (!isUserInGroup) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Group with id ${opts.input.groupId} not found`,
            });
        }

        const [group, expenses] = await Promise.all([
            db.group.findUniqueOrThrow({
                where: {
                    id: opts.input.groupId,
                },
            }),
            db.expense.findMany({
                where: {
                    groupId: opts.input.groupId,
                },
                include: {
                    shares: true,
                },
            }),
        ]);

        return sumInCurrency(expenses, group.currency);
    }),
});
