import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { DB } from '@jshare/db';

import { broadcastNewMessage } from '../../../services/broadcast';
import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';

export const messagesRouter = router({
    listByGroup: authProcedure
        .input(
            z.object({
                cursor: z.string().nullish(),
                limit: z.number().min(10).max(100).default(20),
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

            const messages = await db.message.findMany({
                take: opts.input.limit + 1,
                where: {
                    groupId: opts.input.groupId,
                },
                cursor: opts.input.cursor ? { id: opts.input.cursor } : undefined,
                include: {
                    author: true,
                    attachments: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });

            const nextCursor = messages.length > opts.input.limit ? messages.pop()!.id : undefined;

            return {
                messages,
                nextCursor,
            };
        }),
    create: authProcedure
        .input(
            z.object({
                text: z.string(),
                key: z.string(),
                groupId: z.string().uuid(),
            })
        )
        .mutation(async (opts) => {
            const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
            if (!isUserInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const message = await db.message.create({
                data: {
                    text: opts.input.text,
                    authorId: opts.ctx.userId,
                    groupId: opts.input.groupId,
                    authorType: DB.AuthorType.User,
                    key: opts.input.key,
                },
            });

            broadcastNewMessage(opts.input.groupId);

            return message;
        }),
});
