import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { Currency, Role } from '@jshare/prisma';

import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';
import { defaultGroupInclude } from './util';

export const groupsRouter = router({
    create: authProcedure
        .input(
            z.object({
                name: z.string(),
                currency: z.nativeEnum(Currency),
                coverImageId: z.string().optional(),
            })
        )
        .mutation(async (opts) => {
            const group = await prisma.group.create({
                data: {
                    name: opts.input.name,
                    currency: opts.input.currency,
                    coverImage: opts.input.coverImageId
                        ? {
                              connect: {
                                  id: opts.input.coverImageId,
                              },
                          }
                        : undefined,
                    participants: {
                        create: {
                            userId: opts.ctx.userId,
                            role: Role.Owner,
                        },
                    },
                },
                include: {
                    ...defaultGroupInclude,
                },
            });

            return group;
        }),
    get: authProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
        const group = await prisma.group.findUnique({
            where: {
                id: opts.input.id,
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                    },
                },
            },
            include: {
                ...defaultGroupInclude,
            },
        });

        if (!group) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Group with id ${opts.input.id} not found`,
            });
        }

        return group;
    }),
    listParticipating: authProcedure.query(async (opts) => {
        const groups = await prisma.group.findMany({
            where: {
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                    },
                },
            },
            orderBy: {
                updatedAt: 'desc',
            },
            include: {
                ...defaultGroupInclude,
            },
        });

        return groups;
    }),
});
