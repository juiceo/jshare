import { TRPCError } from '@trpc/server';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import {
    BASE_EXCHANGE_RATES,
    getConversionDetails,
    getTotalFromShares,
    getTotalInCurrency,
    getTotalsByParticipant,
} from '@jshare/common';
import { MessageAttachmentType } from '@jshare/db';
import { AuthorType, zCurrencyCode, zExpenseShare, type DB } from '@jshare/types';

import { broadcastNewMessage } from '../../../services/broadcast';
import { prisma } from '../../../services/prisma';
import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';

export const expensesRouter = router({
    get: authProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
        const expense = await prisma.expense.findUnique({
            where: {
                id: opts.input.id,
                groupId: {
                    in: await opts.ctx.acl.getGroupIds(),
                },
            },
            include: {
                shares: true,
            },
        });

        if (!expense) {
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

            return prisma.expense.findMany({
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
                currency: zCurrencyCode,
                shares: zExpenseShare
                    .pick({ amount: true, userId: true, locked: true })
                    .array()
                    .min(1),
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

            const total = getTotalFromShares(opts.input.shares);

            if (total !== opts.input.amount) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: `Total amount from shares (${total}) does not match the amount (${opts.input.amount})`,
                });
            }

            const group = await prisma.group.findUnique({
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

            const exchangeRates =
                opts.input.currency === group.currency ? undefined : getLatestExchangeRates();

            const expense = await prisma.$transaction(async (tx) => {
                const expense = await tx.expense.create({
                    data: {
                        ownerId: opts.ctx.userId,
                        groupId: opts.input.groupId,
                        payerId: opts.input.payerId,
                        amount: opts.input.amount,
                        description: opts.input.description,
                        currency: opts.input.currency,
                        conversion: exchangeRates
                            ? getConversionDetails({
                                  sourceCurrency: opts.input.currency,
                                  sourceAmount: opts.input.amount,
                                  currency: group.currency,
                                  exchangeRates,
                              })
                            : undefined,

                        shares: {
                            createMany: {
                                data: opts.input.shares.map((share) => ({
                                    userId: share.userId,
                                    amount: share.amount,
                                    currency: opts.input.currency,
                                    locked: share.locked,
                                    conversion: exchangeRates
                                        ? getConversionDetails({
                                              sourceCurrency: opts.input.currency,
                                              sourceAmount: share.amount,
                                              currency: group.currency,
                                              exchangeRates,
                                          })
                                        : undefined,
                                })),
                            },
                        },
                    },
                });

                await tx.message.create({
                    data: {
                        authorId: opts.ctx.userId,
                        groupId: opts.input.groupId,
                        authorType: AuthorType.User,
                        key: uuidv4(),
                        attachments: {
                            create: {
                                type: MessageAttachmentType.Expense,
                                expenseId: expense.id,
                            },
                        },
                    },
                });

                return expense;
            });

            broadcastNewMessage(opts.input.groupId);

            return expense;
        }),
    getBalancesByParticipantInGroup: authProcedure
        .input(z.object({ groupId: z.string() }))
        .query(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const [group, expenses, participants, exchangeRates] = await Promise.all([
                prisma.group.findUniqueOrThrow({
                    where: {
                        id: opts.input.groupId,
                    },
                }),
                prisma.expense.findMany({
                    where: {
                        groupId: opts.input.groupId,
                    },
                    include: {
                        shares: true,
                    },
                }),
                prisma.groupParticipant.findMany({
                    where: {
                        groupId: opts.input.groupId,
                    },
                    include: {
                        user: true,
                    },
                }),
                prisma.exchangeRates
                    .findFirst({
                        orderBy: {
                            createdAt: 'desc',
                        },
                    })
                    .then((res) => (res ?? BASE_EXCHANGE_RATES) as DB.ExchangeRates),
            ]);

            return getTotalsByParticipant({
                expenses,
                participants,
                currency: group.currency,
                exchangeRates,
            });
        }),
    getBalanceForParticipantInGroup: authProcedure
        .input(z.object({ userId: z.string(), groupId: z.string() }))
        .query(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const [group, paidExpenses, expenseShares, exchangeRates] = await Promise.all([
                prisma.group.findUniqueOrThrow({
                    where: {
                        id: opts.input.groupId,
                    },
                }),
                prisma.expense.findMany({
                    where: {
                        groupId: opts.input.groupId,
                        payerId: opts.input.userId,
                    },
                }),
                prisma.expenseShare.findMany({
                    where: {
                        userId: opts.input.userId,
                        expense: {
                            groupId: opts.input.groupId,
                        },
                    },
                }),
                prisma.exchangeRates
                    .findFirst({
                        orderBy: {
                            createdAt: 'desc',
                        },
                    })
                    .then((res) => (res ?? BASE_EXCHANGE_RATES) as DB.ExchangeRates),
            ]);

            const paid = getTotalInCurrency({
                expenses: paidExpenses,
                currency: group.currency,
                exchangeRates,
            });

            const received = getTotalInCurrency({
                expenses: expenseShares,
                currency: group.currency,
                exchangeRates,
            });

            return {
                paid,
                received,
                balance: paid - received,
            };
        }),
    /**
     * TODO: Refactor
     */
    getBalanceForUser: authProcedure
        .input(z.object({ userId: z.string(), currency: zCurrencyCode }))
        .query(async (opts) => {
            const userId = opts.ctx.userId;
            if (opts.input.userId !== userId) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'Cannot get balance for other users',
                });
            }

            const [expensesPaid, expenseShares, exchangeRates] = await Promise.all([
                prisma.expense.findMany({
                    where: {
                        payerId: userId,
                    },
                }),
                prisma.expenseShare.findMany({
                    where: {
                        userId,
                    },
                }),
                prisma.exchangeRates
                    .findFirst({
                        orderBy: {
                            createdAt: 'desc',
                        },
                    })
                    .then((res) => (res ?? BASE_EXCHANGE_RATES) as DB.ExchangeRates),
            ]);

            const paid = getTotalInCurrency({
                expenses: expensesPaid,
                currency: opts.input.currency,
                exchangeRates,
            });

            const received = getTotalInCurrency({
                expenses: expenseShares,
                currency: opts.input.currency,
                exchangeRates,
            });

            return {
                paid,
                received,
                balance: paid - received,
            };
        }),
    getTotalForGroup: authProcedure.input(z.object({ groupId: z.string() })).query(async (opts) => {
        const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
        if (!isUserInGroup) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Group with id ${opts.input.groupId} not found`,
            });
        }

        const [group, expenses, exchangeRates] = await Promise.all([
            prisma.group.findUniqueOrThrow({
                where: {
                    id: opts.input.groupId,
                },
            }),
            prisma.expense.findMany({
                where: {
                    groupId: opts.input.groupId,
                },
                include: {
                    shares: true,
                },
            }),
            prisma.exchangeRates
                .findFirst({
                    where: {},
                    orderBy: {
                        createdAt: 'desc',
                    },
                })
                .then((res) => (res ?? BASE_EXCHANGE_RATES) as DB.ExchangeRates),
        ]);

        return getTotalInCurrency({
            expenses,
            currency: group.currency,
            exchangeRates,
        });
    }),
});
