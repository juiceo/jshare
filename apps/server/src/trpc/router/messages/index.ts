import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { AuthorType } from '@jshare/types';

import { broadcastNewMessage } from '../../../services/broadcast';
import { prisma } from '../../../services/prisma';
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
            const isInGroup = await opts.ctx.acl.isUserInGroup(opts.input.groupId);
            if (!isInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const messages = await prisma.message.findMany({
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
            const isInGroup = await opts.ctx.acl.isUserInGroup(opts.input.groupId);
            if (!isInGroup) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            const message = await prisma.message.create({
                data: {
                    text: opts.input.text,
                    authorId: opts.ctx.userId,
                    groupId: opts.input.groupId,
                    authorType: AuthorType.User,
                    key: opts.input.key,
                },
            });

            broadcastNewMessage(opts.input.groupId);

            return message;
        }),
});
