import { TRPCError } from '@trpc/server';

import { zDB } from '@jshare/db';

import { adminDb, db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zDeleteArgs, zSyncArgs, zUpdateArgs } from './_util';

export const groupsRouter = router({
    sync: authProcedure.input(zSyncArgs).query(async (opts) => {
        const timestamp = Date.now();
        const created = await db.group.findMany({
            where: {
                createdAt: {
                    gt: new Date(opts.input.lastSync),
                },
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                    },
                },
            },
            include: {
                coverImage: true,
                participants: true,
            },
        });

        const updated = await db.group.findMany({
            where: {
                updatedAt: {
                    gt: new Date(opts.input.lastSync),
                },
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                    },
                },
            },
            include: {
                coverImage: true,
                participants: true,
            },
        });

        const removed = await adminDb.group
            .findMany({
                where: {
                    archivedAt: {
                        gt: new Date(opts.input.lastSync),
                    },
                    participants: {
                        some: {
                            userId: opts.ctx.userId,
                        },
                    },
                },
            })
            .then((res) => res.map((g) => g.id));

        return {
            created,
            updated,
            removed,
            timestamp,
        };
    }),
    update: authProcedure
        .input(zUpdateArgs(zDB.models.GroupUpdateSchema))
        .mutation(async (opts) => {
            const group = await db.group.findUnique({
                where: {
                    id: opts.input.id,
                    participants: {
                        some: {
                            userId: opts.ctx.userId,
                            role: {
                                in: ['Admin', 'Owner'],
                            },
                        },
                    },
                },
            });

            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message:
                        'Group not found, or you are missing the required permission to update the group',
                });
            }

            return db.group.update({
                where: {
                    id: opts.input.id,
                },
                data: opts.input.data,
                include: {
                    coverImage: true,
                    participants: true,
                },
            });
        }),
    create: authProcedure
        .input(zCreateArgs(zDB.models.GroupCreateSchema))
        .mutation(async (opts) => {
            return db.group.create({
                data: {
                    id: opts.input.id,
                    ...opts.input.data,
                    participants: {
                        create: {
                            userId: opts.ctx.userId,
                            role: 'Owner',
                        },
                    },
                },
                include: {
                    coverImage: true,
                    participants: true,
                },
            });
        }),
    delete: authProcedure.input(zDeleteArgs).mutation(async (opts) => {
        const isOwner = await db.group.findUnique({
            where: {
                id: opts.input.id,
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                        role: 'Owner',
                    },
                },
            },
        });

        if (!isOwner) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'This group does not exist or you are not the group owner',
            });
        }

        await db.group.update({
            where: {
                id: opts.input.id,
            },
            data: {
                archived: true,
                archivedAt: new Date(),
            },
        });
    }),
});
