import { TRPCError } from '@trpc/server';

import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zFindByIdArgs, zFindManyArgs, zUpdateArgs } from './_util';

export const groupParticipantsRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.groupParticipant.findMany({
            where: {
                id: {
                    in: opts.input.ids,
                },
            },
        });
    }),
    findWhere: authProcedure
        .input(zFindManyArgs(zDB.models.GroupParticipantSchema.pick({ groupId: true })))
        .query(async (opts) => {
            const queries = opts.input.queries;
            return Promise.all(
                queries.map(async (query) => {
                    return db.groupParticipant.findMany({
                        where: {
                            ...query,
                            group: {
                                participants: {
                                    some: {
                                        userId: opts.ctx.userId,
                                    },
                                },
                            },
                        },
                    });
                })
            );
        }),
    update: authProcedure
        .input(zUpdateArgs(zDB.models.GroupParticipantUpdateSchema))
        .mutation(async (opts) => {
            const groupParticipant = await db.groupParticipant.findUnique({
                where: {
                    id: opts.input.id,
                    group: {
                        participants: {
                            some: {
                                userId: opts.ctx.userId,
                                role: {
                                    in: ['Admin', 'Owner'],
                                },
                            },
                        },
                    },
                },
            });

            if (!groupParticipant) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message:
                        'Participant not found, or you are missing the required permission to update the group participants',
                });
            }

            return db.group.update({
                where: {
                    id: opts.input.id,
                },
                data: opts.input.data,
            });
        }),
    create: authProcedure
        .input(zCreateArgs(zDB.models.GroupParticipantCreateSchema))
        .mutation(async (opts) => {
            const isAdminOrOwner = await db.groupParticipant
                .findFirst({
                    where: {
                        groupId: opts.input.groupId,
                        userId: opts.ctx.userId,
                        role: {
                            in: ['Admin', 'Owner'],
                        },
                    },
                })
                .then((res) => !!res);

            if (!isAdminOrOwner) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'You are not authorized to create a participant in this group',
                });
            }

            return db.groupParticipant.create({
                data: {
                    ...opts.input,
                },
            });
        }),
});
