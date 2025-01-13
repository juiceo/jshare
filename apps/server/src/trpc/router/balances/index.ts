import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { BASE_EXCHANGE_RATES, getBalanceByParticipant } from '@jshare/common';
import { zCurrencyCode, type DB } from '@jshare/types';

import { prisma } from '../../../services/prisma';
import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';

export const balancesRouter = router({
    getByParticipantInGroup: authProcedure
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
                prisma.expense
                    .findMany({
                        where: {
                            groupId: opts.input.groupId,
                        },
                        include: {
                            shares: true,
                        },
                    })
                    .then((res) => res as DB.Expense[]),
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
    getForParticipantInGroup: authProcedure
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
    me: authProcedure.input(z.object({ currency: zCurrencyCode })).query(async (opts) => {
        const userId = opts.ctx.userId;

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
            getLatestExchangeRates(),
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
});
