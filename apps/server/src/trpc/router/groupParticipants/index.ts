import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const groupParticipantsRouter = router({
    list: authProcedure.input(z.object({ groupId: z.string() })).query(async (opts) => {
        if (!opts.ctx.acl.isUserInGroup(opts.input.groupId)) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Group with id ${opts.input.groupId} not found`,
            });
        }

        return prisma.groupParticipant.findMany({
            where: {
                groupId: opts.input.groupId,
            },
            include: {
                user: true,
            },
            orderBy: {
                user: {
                    firstName: 'asc',
                },
            },
        });
    }),
});
