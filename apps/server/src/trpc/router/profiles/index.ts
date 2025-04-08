import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { DB, zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { supabase } from '../../../services/supabase';
import { authProcedure, router } from '../../trpc';

export const profilesRouter = router({
    create: authProcedure
        .input(
            z.object({
                firstName: z.string(),
                lastName: z.string(),
                email: z.string(),
                currency: zDB.enums.CurrencyCodeSchema,
                avatarId: z.string().optional(),
            })
        )
        .mutation(async (opts) => {
            const profile = await db.profile.create({
                data: {
                    id: opts.ctx.userId,
                    firstName: opts.input.firstName,
                    lastName: opts.input.lastName,
                    email: opts.input.email,
                    currency: opts.input.currency,
                    termsAcceptedAt: new Date(),
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
        const profile = await db.profile.findUnique({
            where: {
                id: opts.ctx.userId,
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
        const profile = await db.profile.findUnique({
            where: {
                id: opts.input.id,
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
                    currency: zDB.enums.CurrencyCodeSchema,
                    avatarId: z.string().nullable(),
                    showInSearch: z.boolean(),
                })
                .partial()
        )
        .mutation(async (opts) => {
            return db.profile.update({
                where: {
                    id: opts.ctx.userId,
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
                    showInSearch: opts.input.showInSearch,
                },
                include: {
                    avatar: true,
                },
            });
        }),
    acceptTerms: authProcedure.mutation(async (opts) => {
        return db.profile.update({
            where: {
                id: opts.ctx.userId,
            },
            data: {
                termsAcceptedAt: new Date(),
            },
            include: {
                avatar: true,
            },
        });
    }),
    delete: authProcedure.mutation(async (opts) => {
        await db.profile.update({
            where: {
                id: opts.ctx.userId,
            },
            data: {
                email: '',
                temporary: true,
                firstName: 'Deleted',
                lastName: 'User',
                currency: DB.CurrencyCode.USD,
                showInSearch: false,
                termsAcceptedAt: null,
                createdAt: new Date(),
                lastActivity: new Date(),
            },
        });
        await supabase.auth.admin.deleteUser(opts.ctx.userId);
    }),
});
