import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';

export const groupParticipantsRouter = router({
    list: authProcedure.input(z.object({ groupId: z.string() })).query(async (opts) => {
        const isUserInGroup = await opts.ctx.acl.isInGroup(opts.input.groupId);
        if (!isUserInGroup) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Group with id ${opts.input.groupId} not found`,
            });
        }

        return db.groupParticipant.findMany({
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
