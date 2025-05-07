import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zCreateArgs, zFindByIdArgs, zUpdateArgs } from './_util';

export const profilesRouter = router({
    findById: authProcedure.input(zFindByIdArgs).query(async (opts) => {
        return db.profile.findMany({
            where: {
                id: {
                    in: opts.input.ids,
                },
            },
            include: {
                avatar: true,
            },
        });
    }),
    update: authProcedure
        .input(
            zUpdateArgs(
                zDB.models.ProfileUpdateSchema.extend({
                    avatarId: z.string().nullable().optional(),
                }).omit({ lastActivity: true, temporary: true })
            )
        )
        .mutation(async (opts) => {
            if (opts.input.id !== opts.ctx.userId) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'You can only update your own profile',
                });
            }
            return db.profile.update({
                where: {
                    id: opts.input.id,
                },
                data: opts.input.data,
                include: {
                    avatar: true,
                },
            });
        }),
    create: authProcedure
        .input(
            zCreateArgs(
                zDB.models.ProfileCreateSchema.omit({
                    lastActivity: true,
                    temporary: true,
                    termsAcceptedAt: true,
                })
            )
        )
        .mutation(async (opts) => {
            if (opts.input.id !== opts.ctx.userId) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'You can only create your own profile',
                });
            }
            return db.profile.create({
                data: {
                    id: opts.input.id,
                    ...opts.input.data,
                    lastActivity: new Date(),
                    temporary: false,
                    termsAcceptedAt: new Date(),
                    showInSearch: true,
                },
                include: {
                    avatar: true,
                },
            });
        }),
});
