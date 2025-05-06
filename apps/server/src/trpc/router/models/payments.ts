import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { getConversionDetails } from '@jshare/common';
import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zFindByIdArgs, zFindManyArgs } from './_util';

export const paymentsRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.payment.findMany({
            where: {
                id: {
                    in: opts.input.ids,
                },
            },
        });
    }),
    findMany: authProcedure
        .input(zFindManyArgs(zDB.models.PaymentSchema.pick({ groupId: true })))
        .query(async (opts) => {
            const queries = opts.input.queries;
            return Promise.all(
                queries.map(async (query) => {
                    return db.payment.findMany({
                        where: query,
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
                    recipientId: z.string(),
                    amount: z.number().min(1),
                    currency: zDB.enums.CurrencyCodeSchema,
                })
            )
        )
        .mutation(async (opts) => {
            const { data } = opts.input;
            const isInGroup = await opts.ctx.acl.isInGroup(data.groupId);
            if (!isInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${data.groupId} not found`,
                });
            }

            const [group, payer, recipient] = await Promise.all([
                db.group.findUnique({
                    where: {
                        id: data.groupId,
                    },
                    include: {
                        participants: true,
                    },
                }),
                db.profile.findUnique({
                    where: {
                        id: opts.ctx.userId,
                    },
                }),
                db.profile.findUnique({
                    where: {
                        id: data.recipientId,
                    },
                }),
            ]);

            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${data.groupId} not found`,
                });
            }

            if (!payer || !group.participants.some((p) => p.userId === payer.id)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `User with id ${data.payerId} (payer) not found`,
                });
            }

            if (!recipient || !group.participants.some((p) => p.userId === recipient.id)) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `User with id ${data.recipientId} (recipient) not found`,
                });
            }

            const exchangeRates =
                data.currency === group.currency ? undefined : await getLatestExchangeRates();

            return db.payment.create({
                data: {
                    groupId: data.groupId,
                    recipientId: data.recipientId,
                    payerId: data.payerId,
                    amount: data.amount,
                    currency: data.currency,
                    conversion: exchangeRates
                        ? getConversionDetails({
                              sourceCurrency: data.currency,
                              sourceAmount: data.amount,
                              currency: group.currency,
                              exchangeRates,
                          })
                        : undefined,
                },
            });
        }),
});
