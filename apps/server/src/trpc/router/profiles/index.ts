import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const profilesRouter = router({
    create: authProcedure
        .input(
            z.object({
                firstName: z.string(),
                lastName: z.string(),
                email: z.string(),
                avatarId: z.string().optional(),
            })
        )
        .mutation(async (opts) => {
            const profile = await prisma.profile.create({
                data: {
                    userId: opts.ctx.userId,
                    firstName: opts.input.firstName,
                    lastName: opts.input.lastName,
                    email: opts.input.email,
                    avatarId: opts.input.avatarId,
                },
            });

            return profile;
        }),
    get: authProcedure.query(async (opts) => {
        const profile = await prisma.profile.findUnique({
            where: {
                userId: opts.ctx.userId,
            },
        });

        if (!profile) {
            throw new TRPCError({ code: 'NOT_FOUND', message: 'Profile not found' });
        }

        return profile;
    }),
    update: authProcedure
        .input(
            z
                .object({
                    firstName: z.string(),
                    lastName: z.string(),
                    email: z.string(),
                    avatarId: z.string().nullable(),
                })
                .partial()
        )
        .mutation(async (opts) => {
            const updatedProfile = await prisma.profile
                .update({
                    where: {
                        userId: opts.ctx.userId,
                    },
                    data: {
                        firstName: opts.input.firstName,
                        lastName: opts.input.lastName,
                        email: opts.input.email,
                        avatarId: opts.input.avatarId,
                    },
                })
                .catch((err: any) => {
                    console.error('Error updating profile: ' + err.message);
                    throw new TRPCError({
                        code: 'NOT_FOUND',
                        message: 'Profile not found',
                    });
                });

            return updatedProfile;
        }),
});
