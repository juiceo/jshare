import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { getConversionDetails } from '@jshare/common';
import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';

export const paymentsRouter = router({
    get: authProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
        const payment = await db.payment.findUnique({
            where: {
                id: opts.input.id,
                groupId: {
                    in: await opts.ctx.acl.getGroupIds(),
                },
            },
        });

        if (!payment) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Payment with id ${opts.input.id} not found`,
            });
        }

        return payment;
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

            return db.payment.findMany({
                where: {
                    groupId: opts.input.groupId,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
        }),
    create: authProcedure
        .input(
            z.object({
                groupId: z.string(),
                payerId: z.string(),
                recipientId: z.string(),
                amount: z.number().min(1),
                currency: zDB.enums.CurrencyCodeSchema,
            })
        )
        .mutation(async (opts) => {
            if (!opts.ctx.acl.isInGroup(opts.input.groupId)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const [group, payer, recipient] = await Promise.all([
                db.group.findUnique({
                    where: {
                        id: opts.input.groupId,
                    },
                    include: {
                        participants: true,
                    },
                }),
                db.profile.findUnique({
                    where: {
                        userId: opts.ctx.userId,
                    },
                }),
                db.profile.findUnique({
                    where: {
                        userId: opts.input.recipientId,
                    },
                }),
            ]);

            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            if (!payer || !group.participants.some((p) => p.userId === payer.userId)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `User with id ${opts.input.payerId} (payer) not found`,
                });
            }

            if (!recipient || !group.participants.some((p) => p.userId === recipient.userId)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `User with id ${opts.input.recipientId} (recipient) not found`,
                });
            }

            const exchangeRates =
                opts.input.currency === group.currency ? undefined : await getLatestExchangeRates();

            return db.payment.create({
                data: {
                    groupId: opts.input.groupId,
                    recipientId: opts.input.recipientId,
                    payerId: opts.ctx.userId,
                    amount: opts.input.amount,
                    currency: opts.input.currency,
                    conversion: exchangeRates
                        ? getConversionDetails({
                              sourceCurrency: opts.input.currency,
                              sourceAmount: opts.input.amount,
                              currency: group.currency,
                              exchangeRates,
                          })
                        : undefined,
                },
            });
        }),
});
