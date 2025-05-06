import { TRPCError } from '@trpc/server';

import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zDeleteArgs, zFindByIdArgs, zFindManyArgs, zUpdateArgs } from './_util';

export const groupsRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.group.findMany({
            where: {
                id: {
                    in: opts.input.ids,
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
    }),
    findMany: authProcedure
        .input(
            zFindManyArgs(zDB.models.GroupScalarSchema.pick({ inviteCode: true }), {
                allowEmpty: true,
            })
        )
        .query(async (opts) => {
            const queries = opts.input.queries;

            return Promise.all(
                queries.map(async (query) => {
                    return db.group.findMany({
                        where: {
                            ...query,
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
                })
            );
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
