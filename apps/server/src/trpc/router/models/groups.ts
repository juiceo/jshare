import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';
import { zID } from './_util';

export const zGroupsQuery = z
    .object({
        id: z.string(),
    })
    .partial();

export const zGroupsUpdate = z.object({
    id: z.string(),
    data: zDB.models.GroupUpdateScalarSchema.omit({
        createdAt: true,
        updatedAt: true,
        id: true,
    }).partial(),
});

export const zGroupsCreate = zDB.models.GroupCreateScalarSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
}).extend({
    id: zID,
    coverImageId: zID.nullable().optional(),
});

export const groupsRouter = router({
    findById: authProcedure.input(zID.array()).query(async (opts) => {
        return db.group.findMany({
            where: {
                id: {
                    in: opts.input,
                },
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                    },
                },
            },
        });
    }),
    findWhere: authProcedure.input(zGroupsQuery).query(async (opts) => {
        return db.group.findMany({
            where: {
                ...opts.input,
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                    },
                },
            },
        });
    }),
    update: authProcedure.input(zGroupsUpdate).mutation(async (opts) => {
        const group = await db.group.findUnique({
            where: {
                id: opts.input.id,
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                        role: {
                            in: ['Admin', 'Owner'],
                        },
                    },
                },
            },
        });

        if (!group) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message:
                    'Group not found, or you are missing the required permission to update the group',
            });
        }

        return db.group.update({
            where: {
                id: opts.input.id,
            },
            data: opts.input.data,
        });
    }),
    create: authProcedure.input(zGroupsCreate).mutation(async (opts) => {
        return db.group.create({
            data: {
                ...opts.input,
                participants: {
                    create: {
                        userId: opts.ctx.userId,
                        role: 'Owner',
                    },
                },
            },
        });
    }),
});
