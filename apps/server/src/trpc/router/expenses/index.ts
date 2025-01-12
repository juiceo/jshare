import { TRPCError } from '@trpc/server';
import { chain, sumBy } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { BASE_EXCHANGE_RATES, getConversionDetails } from '@jshare/common';
import { MessageAttachmentType } from '@jshare/db';
import { AuthorType, zCurrencyCode, zExpenseShare, type DB } from '@jshare/types';

import { broadcastNewMessage } from '../../../services/broadcast';
import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const expensesRouter = router({
    get: authProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
        const expense = await prisma.expense.findUnique({
            where: {
                id: opts.input.id,
            },
            include: {
                shares: true,
            },
        });

        if (!expense || !opts.ctx.acl.isUserInGroup(expense.groupId)) {
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
            const group = await prisma.group.findUnique({
                where: {
                    id: opts.input.groupId,
                    participants: {
                        some: {
                            userId: opts.ctx.userId,
                        },
                    },
                },
            });
            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            return prisma.expense.findMany({
                where: {
                    groupId: group.id,
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
            if (!opts.ctx.acl.isUserInGroup(opts.input.groupId)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }
            const totalAmountFromShares = opts.input.shares.reduce((result, share) => {
                if (share.amount) return result + share.amount;
                return result;
            }, 0);

            if (totalAmountFromShares !== opts.input.amount) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: `Total amount from shares (${totalAmountFromShares}) does not match the amount (${opts.input.amount})`,
                });
            }

            const group = await prisma.group.findUnique({
                where: {
                    id: opts.input.groupId,
                },
            });

            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const exchangeRates =
                opts.input.currency === group.currency
                    ? undefined
                    : await prisma.exchangeRates
                          .findFirst({
                              where: {},
                              orderBy: {
                                  createdAt: 'desc',
                              },
                          })
                          .then((res) => (res ?? BASE_EXCHANGE_RATES) as DB.ExchangeRates);

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
    getStatusByUserInGroup: authProcedure
        .input(z.object({ groupId: z.string() }))
        .query(async (opts) => {
            if (!opts.ctx.acl.isUserInGroup(opts.input.groupId)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const [expenses, participants] = await Promise.all([
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
            ]);

            const dataByUser = participants.reduce(
                (result, participant) => {
                    result[participant.userId] = {
                        paid: 0,
                        received: 0,
                        profile: participant.user,
                    };
                    return result;
                },
                {} as Record<string, { paid: number; received: number; profile: DB.Profile }>
            );

            expenses.forEach((expense) => {
                if (dataByUser[expense.payerId]) {
                    dataByUser[expense.payerId].paid += expense.amount;
                }

                expense.shares.forEach((share) => {
                    if (dataByUser[share.userId]) {
                        dataByUser[share.userId].received += share.amount;
                    }
                });

                return dataByUser;
            });

            return chain(dataByUser)
                .entries()
                .map(([userId, status]) => {
                    return {
                        ...status,
                        userId,
                        balance: status.paid - status.received,
                    };
                })
                .sortBy((item) => -item.balance)
                .value();
        }),
    getStatusForUserInGroup: authProcedure
        .input(z.object({ userId: z.string(), groupId: z.string() }))
        .query(async (opts) => {
            if (!opts.ctx.acl.isUserInGroup(opts.input.groupId)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const [paidExpenses, expenseShares] = await Promise.all([
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
            ]);

            const paid = sumBy(paidExpenses, 'amount');
            const received = sumBy(expenseShares, 'amount');

            return {
                paid,
                received,
                balance: paid - received,
            };
        }),
    getStatusForUser: authProcedure.input(z.object({ userId: z.string() })).query(async (opts) => {
        const userId = opts.ctx.userId;
        if (opts.input.userId !== userId) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: 'Cannot get status for other users',
            });
        }

        const [paid, received] = await Promise.all([
            prisma.expense
                .aggregate({
                    _sum: {
                        amount: true,
                    },
                    where: {
                        payerId: userId,
                    },
                })
                .then((res) => res._sum.amount ?? 0),
            prisma.expenseShare
                .aggregate({
                    _sum: {
                        amount: true,
                    },
                    where: {
                        userId,
                    },
                })
                .then((res) => res._sum.amount ?? 0),
        ]);

        return {
            paid,
            received,
            balance: paid - received,
        };
    }),
    getTotalForGroup: authProcedure.input(z.object({ groupId: z.string() })).query(async (opts) => {
        if (!opts.ctx.acl.isUserInGroup(opts.input.groupId)) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Group with id ${opts.input.groupId} not found`,
            });
        }

        const result = await prisma.expense.aggregate({
            _sum: {
                amount: true,
            },
            where: {
                groupId: opts.input.groupId,
            },
        });

        return result._sum.amount ?? 0;
    }),
});
