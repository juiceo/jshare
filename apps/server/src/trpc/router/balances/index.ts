import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { getBalanceByParticipant, sumInCurrency } from '@jshare/common';
import { zCurrencyCode, type DB } from '@jshare/types';

import { prisma } from '../../../services/prisma';
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

            const [group, expenses, payments] = await Promise.all([
                prisma.group.findUniqueOrThrow({
                    where: {
                        id: opts.input.groupId,
                    },
                    include: {
                        participants: {
                            include: {
                                user: true,
                            },
                        },
                    },
                }),
                prisma.expense.findMany({
                    where: {
                        groupId: opts.input.groupId,
                    },
                    include: {
                        shares: true,
                    },
                }) as Promise<(DB.Expense & { shares: DB.ExpenseShare[] })[]>,
                prisma.payment.findMany({
                    where: {
                        groupId: opts.input.groupId,
                    },
                }) as Promise<DB.Payment[]>,
            ]);

            return getBalanceByParticipant({
                expenses,
                payments,
                participants: group.participants,
                currency: group.currency,
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

            const [group, paidExpenses, expenseShares] = await Promise.all([
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
                }) as Promise<DB.Expense[]>,
                prisma.expenseShare.findMany({
                    where: {
                        userId: opts.input.userId,
                        expense: {
                            groupId: opts.input.groupId,
                        },
                    },
                }) as Promise<DB.ExpenseShare[]>,
            ]);

            const paid = sumInCurrency(paidExpenses, group.currency);
            const received = sumInCurrency(expenseShares, group.currency);

            return {
                paid,
                received,
                balance: paid - received,
            };
        }),
    me: authProcedure.input(z.object({ currency: zCurrencyCode })).query(async (opts) => {
        const userId = opts.ctx.userId;

        const [expensesPaid, expenseShares] = await Promise.all([
            prisma.expense.findMany({
                where: {
                    payerId: userId,
                },
            }) as Promise<DB.Expense[]>,
            prisma.expenseShare.findMany({
                where: {
                    userId,
                },
            }) as Promise<DB.ExpenseShare[]>,
        ]);

        const paid = sumInCurrency(expensesPaid, opts.input.currency);
        const received = sumInCurrency(expenseShares, opts.input.currency);

        return {
            paid,
            received,
            balance: paid - received,
        };
    }),
});
