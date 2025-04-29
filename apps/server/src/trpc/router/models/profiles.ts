import { TRPCError } from '@trpc/server';
import { isEmpty } from 'lodash';
import { z } from 'zod';

import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zID } from './_util';

export const zProfilesQuery = z
    .object({
        id: z.string(),
    })
    .partial()
    .refine((value) => !isEmpty(value));

export const zProfilesUpdate = z.object({
    id: z.string(),
    data: zDB.models.ProfileUpdateScalarSchema.omit({
        id: true,
        createdAt: true,
        updatedAt: true,
    })
        .extend({
            avatarId: z.string().nullable(),
        })
        .partial(),
});

export const zProfilesCreate = zDB.models.ProfileCreateScalarSchema.omit({
    createdAt: true,
    updatedAt: true,
}).extend({
    id: zID,
    avatarId: zID.nullable().optional(),
});

export const profilesRouter = router({
    findById: authProcedure.input(zID.array()).query(async (opts) => {
        return db.profile.findMany({
            where: {
                id: {
                    in: opts.input,
                },
            },
        });
    }),
    findWhere: authProcedure.input(zProfilesQuery).query(async (opts) => {
        return db.profile.findMany({
            where: opts.input,
        });
    }),
    update: authProcedure.input(zProfilesUpdate).mutation(async (opts) => {
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
    create: authProcedure.input(zProfilesCreate).mutation(async (opts) => {
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
