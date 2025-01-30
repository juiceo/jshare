import { TRPCError } from '@trpc/server';
import shortid from 'shortid';
import { z } from 'zod';

import { DB, zDB } from '@jshare/db';

import { db } from '../../../services/db';
import { authProcedure, publicProcedure, router } from '../../trpc';
import { defaultGroupInclude } from './util';

export const groupsRouter = router({
    create: authProcedure
        .input(
            z.object({
                name: z.string(),
                currency: zDB.enums.CurrencyCodeSchema,
                coverImageId: z.string().optional(),
            })
        )
        .mutation(async (opts) => {
            return db.group.create({
                data: {
                    name: opts.input.name,
                    currency: opts.input.currency,
                    inviteCode: shortid.generate(),
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
                            role: DB.Role.Owner,
                        },
                    },
                },
                include: {
                    ...defaultGroupInclude,
                },
            });
        }),
    update: authProcedure
        .input(
            z.object({
                groupId: z.string(),
                updates: z
                    .object({
                        name: z.string(),
                    })
                    .partial(),
            })
        )
        .mutation(async (opts) => {
            const isAdmin = await opts.ctx.acl.isGroupAdmin(opts.input.groupId);
            if (!isAdmin) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: `The group was not found or you are missing the required role to update the group`,
                });
            }

            return db.group.update({
                where: {
                    id: opts.input.groupId,
                },
                data: opts.input.updates,
                include: {
                    ...defaultGroupInclude,
                },
            });
        }),
    get: authProcedure.input(z.object({ id: z.string() })).query(async (opts) => {
        const group = await db.group.findUnique({
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
    getByCode: publicProcedure.input(z.object({ code: z.string() })).query(async (opts) => {
        const group = await db.group.findUnique({
            where: {
                inviteCode: opts.input.code,
            },
            include: {
                ...defaultGroupInclude,
            },
        });

        return group;
    }),
    joinByCode: authProcedure.input(z.object({ code: z.string() })).mutation(async (opts) => {
        const group = await db.group.findUnique({
            where: {
                inviteCode: opts.input.code,
            },
        });

        if (!group) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Invalid invite code ${opts.input.code}`,
            });
        }

        return db.groupParticipant.create({
            data: {
                groupId: group.id,
                userId: opts.ctx.userId,
                role: DB.Role.Member,
                inviteType: DB.InviteType.Code,
            },
        });
    }),
    refreshCode: authProcedure.input(z.object({ groupId: z.string() })).mutation(async (opts) => {
        /**
         * TODO: Should check if user is group admin
         */
        if (!opts.ctx.acl.isInGroup(opts.input.groupId)) {
            throw new TRPCError({
                code: 'NOT_FOUND',
                message: `Group with id ${opts.input.groupId} not found`,
            });
        }

        const updatedGroup = await db.group.update({
            where: {
                id: opts.input.groupId,
            },
            data: {
                inviteCode: shortid.generate(),
            },
            include: {
                ...defaultGroupInclude,
            },
        });

        return updatedGroup;
    }),
    list: authProcedure.query(async (opts) => {
        const groups = await db.group.findMany({
            where: {
                participants: {
                    some: {
                        userId: opts.ctx.userId,
                    },
                },
            },
            orderBy: {
                lastActivity: 'desc',
            },
            include: {
                ...defaultGroupInclude,
            },
        });

        return groups;
    }),
    delete: authProcedure
        .input(
            z.object({
                groupId: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const isOwner = await ctx.acl.isGroupOwner(input.groupId);
            if (!isOwner) {
                throw new TRPCError({
                    code: 'UNAUTHORIZED',
                    message: 'Only the group owner can delete a group',
                });
            }

            await db.group.delete({
                where: {
                    id: input.groupId,
                },
            });
        }),
});
