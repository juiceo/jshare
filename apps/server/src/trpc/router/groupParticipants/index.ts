import { TRPCError } from '@trpc/server';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { DB } from '@jshare/db';

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
    createTemporaryParticipant: authProcedure
        .input(
            z.object({
                groupId: z.string(),
                firstName: z.string(),
                lastName: z.string(),
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

            const user = await db.profile.create({
                data: {
                    email: '',
                    userId: uuidv4(),
                    firstName: opts.input.firstName,
                    lastName: opts.input.lastName,
                    currency: DB.CurrencyCode.USD,
                },
            });

            return db.groupParticipant.create({
                data: {
                    groupId: opts.input.groupId,
                    role: DB.Role.Member,
                    userId: user.userId,
                },
            });
        }),
});
