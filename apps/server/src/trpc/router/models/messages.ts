import { TRPCError } from '@trpc/server';

import { sleep } from '@jshare/common';
import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zFindByIdArgs, zFindManyArgs } from './_util';

export const messagesRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.message.findMany({
            where: {
                id: {
                    in: opts.input.ids,
                },
                group: {
                    participants: {
                        some: {
                            userId: opts.ctx.userId,
                        },
                    },
                },
            },
            include: {
                attachments: true,
            },
        });
    }),
    findMany: authProcedure
        .input(zFindManyArgs(zDB.models.MessageSchema.pick({ groupId: true })))
        .query(async (opts) => {
            const queries = opts.input.queries;
            return Promise.all(
                queries.map(async (query) => {
                    return db.message.findMany({
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
                        include: {
                            attachments: true,
                        },
                    });
                })
            );
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
