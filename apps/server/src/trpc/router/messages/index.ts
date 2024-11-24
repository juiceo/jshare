import { TRPCError } from '@trpc/server';
import { z } from 'zod';

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
            const group = await prisma.group.findUnique({
                where: {
                    id: opts.input.groupId,
                    participants: {
                        some: {
                            userId: opts.ctx.userId,
                        },
                    },
                },
            });
            if (!group) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `Group with id ${opts.input.groupId} not found`,
                });
            }

            return prisma.message.findMany({
                where: {
                    groupId: group.id,
                },
                include: {
                    author: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
            });
        }),
});
