import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { zCurrencyCode } from '@jshare/types';

import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const profilesRouter = router({
    create: authProcedure
        .input(
            z.object({
                firstName: z.string(),
                lastName: z.string(),
                email: z.string(),
                currency: zCurrencyCode,
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
                    currency: opts.input.currency,
                    avatar: opts.input.avatarId
                        ? {
                              connect: {
                                  id: opts.input.avatarId,
                              },
                          }
                        : undefined,
                },
                include: {
                    avatar: true,
                },
            });

            return profile;
        }),
    me: authProcedure.query(async (opts) => {
        const profile = await prisma.profile.findUnique({
            where: {
                userId: opts.ctx.userId,
            },
            include: {
                avatar: true,
            },
        });

        if (!profile) {
            throw new TRPCError({ code: 'NOT_FOUND', message: 'Profile not found' });
        }

        return profile;
    }),
    get: authProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
        const profile = await prisma.profile.findUnique({
            where: {
                userId: opts.input.id,
            },
            include: {
                avatar: true,
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
                    currency: zCurrencyCode,
                    avatarId: z.string().nullable(),
                })
                .partial()
        )
        .mutation(async (opts) => {
            return prisma.profile.update({
                where: {
                    userId: opts.ctx.userId,
                },
                data: {
                    firstName: opts.input.firstName,
                    lastName: opts.input.lastName,
                    email: opts.input.email,
                    currency: opts.input.currency,
                    avatar: opts.input.avatarId
                        ? {
                              connect: {
                                  id: opts.input.avatarId,
                              },
                          }
                        : opts.input.avatarId === null
                          ? {
                                disconnect: true,
                            }
                          : undefined,
                },
                include: {
                    avatar: true,
                },
            });
        }),
});
