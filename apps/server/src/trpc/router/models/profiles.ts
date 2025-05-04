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
        });
    }),
    update: authProcedure
        .input(
            zUpdateArgs(
                zDB.models.ProfileUpdateSchema.extend({
                    avatarId: z.string().nullable(),
                })
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
            });
        }),
    create: authProcedure
        .input(zCreateArgs(zDB.models.ProfileCreateSchema))
        .mutation(async (opts) => {
            if (opts.input.id !== opts.ctx.userId) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'You can only create your own profile',
                });
            }
            return db.profile.create({
                data: opts.input,
            });
        }),
});
