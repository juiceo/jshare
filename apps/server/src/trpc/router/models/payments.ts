import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { getConversionDetails } from '@jshare/common';
import { zDB } from '@jshare/db';

import { adminDb, db } from '../../../services/db';
import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zSyncArgs } from './_util';

export const paymentsRouter = router({
    sync: authProcedure.input(zSyncArgs).query(async (opts) => {
        const timestamp = Date.now();

        const groupIds = await db.groupParticipant
            .findMany({
                where: {
                    userId: opts.ctx.userId,
                },
            })
            .then((res) => res.map((p) => p.groupId));

        const created = await db.payment.findMany({
            where: {
                groupId: {
                    in: groupIds,
                },
                createdAt: {
                    gt: new Date(opts.input.lastSync),
                },
            },
        });

        const updated = await db.payment.findMany({
            where: {
                groupId: {
                    in: groupIds,
                },
                updatedAt: {
                    gt: new Date(opts.input.lastSync),
                },
            },
        });

        const removed = await adminDb.payment
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
            .then((res) => res.map((p) => p.id));

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
                    recipientId: z.string(),
                    amount: z.number().min(1),
                    currency: zDB.enums.CurrencyCodeSchema,
                })
            )
        )
        .mutation(async (opts) => {
            const { id, data } = opts.input;
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
                    id,
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
