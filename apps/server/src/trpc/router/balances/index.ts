import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { getBalanceByParticipant, getBalanceForParticipant, sumInCurrency } from '@jshare/common';
import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
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
                db.group.findUniqueOrThrow({
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
                db.expense.findMany({
                    where: {
                        groupId: opts.input.groupId,
                    },
                    include: {
                        shares: true,
                    },
                }),
                db.payment.findMany({
                    where: {
                        groupId: opts.input.groupId,
                    },
                }),
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

            const [group, expensesPaid, expenseShares, paymentsPaid, paymentsReceived] =
                await Promise.all([
                    db.group.findUniqueOrThrow({
                        where: {
                            id: opts.input.groupId,
                        },
                        select: {
                            currency: true,
                        },
                    }),
                    db.expense.findMany({
                        where: {
                            groupId: opts.input.groupId,
                            payerId: opts.input.userId,
                        },
                    }),
                    db.expenseShare.findMany({
                        where: {
                            userId: opts.input.userId,
                            expense: {
                                groupId: opts.input.groupId,
                            },
                        },
                    }),
                    db.payment.findMany({
                        where: {
                            groupId: opts.input.groupId,
                            payerId: opts.input.userId,
                        },
                    }),
                    db.payment.findMany({
                        where: {
                            groupId: opts.input.groupId,
                            recipientId: opts.input.userId,
                        },
                    }),
                ]);

            return getBalanceForParticipant({
                expensesPaid,
                expenseShares,
                paymentsPaid,
                paymentsReceived,
                currency: group.currency,
                userId: opts.input.userId,
            });
        }),
    me: authProcedure
        .input(z.object({ currency: zDB.enums.CurrencyCodeSchema }))
        .query(async (opts) => {
            const userId = opts.ctx.userId;

            const [expensesPaid, expenseShares] = await Promise.all([
                db.expense.findMany({
                    where: {
                        payerId: userId,
                    },
                }),
                db.expenseShare.findMany({
                    where: {
                        userId,
                    },
                }),
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
