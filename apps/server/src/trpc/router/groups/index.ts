import { TRPCError } from '@trpc/server';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { getUserShortName } from '@jshare/common';
import { AuthorType, Role, zCurrencyCode, zDbImage } from '@jshare/types';

import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';
import { defaultGroupInclude } from './util';

export const groupsRouter = router({
    create: authProcedure
        .input(
            z.object({
                name: z.string(),
                currency: zCurrencyCode,
                coverImage: zDbImage.optional(),
            })
        )
        .mutation(async (opts) => {
            return prisma.$transaction(async (tx) => {
                const [group, profile] = await Promise.all([
                    tx.group.create({
                        data: {
                            name: opts.input.name,
                            currency: opts.input.currency,
                            coverImage: opts.input.coverImage
                                ? {
                                      connect: {
                                          id: opts.input.coverImage.id,
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
                    }),
                    tx.profile.findUniqueOrThrow({
                        where: {
                            userId: opts.ctx.userId,
                        },
                    }),
                ]);

                await tx.message.create({
                    data: {
                        key: uuidv4(),
                        text: `Group created by ${getUserShortName(profile)}`,
                        authorType: AuthorType.System,
                        groupId: group.id,
                    },
                });

                return group;
            });
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
    list: authProcedure.query(async (opts) => {
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
