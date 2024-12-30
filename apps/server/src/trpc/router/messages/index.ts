import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { AuthorType } from '@jshare/types';

import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const messagesRouter = router({
    listByGroup: authProcedure
        .input(
            z.object({
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

            return prisma.message.findMany({
                where: {
                    groupId: opts.input.groupId,
                },
                include: {
                    author: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
        }),
    create: authProcedure
        .input(
            z.object({
                text: z.string(),
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

            return prisma.message.create({
                data: {
                    text: opts.input.text,
                    authorId: opts.ctx.userId,
                    groupId: opts.input.groupId,
                    authorType: AuthorType.User,
                },
            });
        }),
});
