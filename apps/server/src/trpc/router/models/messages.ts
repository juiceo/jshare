import { TRPCError } from '@trpc/server';

import { zDB } from '@jshare/db';

import { adminDb, db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zSyncArgs } from './_util';

export const messagesRouter = router({
    sync: authProcedure.input(zSyncArgs).query(async (opts) => {
        const timestamp = Date.now();

        const groupIds = await db.groupParticipant
            .findMany({
                where: {
                    userId: opts.ctx.userId,
                },
            })
            .then((res) => res.map((p) => p.groupId));

        const created = await db.message.findMany({
            where: {
                groupId: {
                    in: groupIds,
                },
                createdAt: {
                    gt: new Date(opts.input.lastSync),
                },
            },
            include: {
                attachments: true,
            },
        });

        const updated = await db.message.findMany({
            where: {
                groupId: {
                    in: groupIds,
                },
                updatedAt: {
                    gt: new Date(opts.input.lastSync),
                },
            },
            include: {
                attachments: true,
            },
        });

        const removed = await adminDb.message
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
            .then((res) => res.map((m) => m.id));

        return {
            created,
            updated,
            removed,
            timestamp,
        };
    }),
    create: authProcedure
        .input(
            zCreateArgs(zDB.models.MessageCreateSchema.omit({ authorId: true, authorType: true }))
        )
        .mutation(async (opts) => {
            const isGroupParticipant = await db.groupParticipant.findFirst({
                where: {
                    userId: opts.ctx.userId,
                    groupId: opts.input.data.groupId,
                },
            });

            if (!isGroupParticipant) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'You are not a participant in this group, or it does not exist',
                });
            }

            return db.message.create({
                data: {
                    id: opts.input.id,
                    ...opts.input.data,
                    authorId: opts.ctx.userId,
                    authorType: 'User',
                },
                include: {
                    attachments: true,
                },
            });
        }),
});
