import { TRPCError } from '@trpc/server';
import shortId from 'shortid';
import { z } from 'zod';

import { createGroupSchema } from '@/schemas/group';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';
import { isUserInGroup } from '@/utils/groups';

export const groupRouter = trpc.router({
	create: trpc.authenticatedProcedure
		.input(createGroupSchema)
		.mutation(async ({ input, ctx }) => {
			try {
				const group = await prisma.group.create({
					data: {
						...input,
						ownerId: ctx.user.id,
					},
				});
				return group;
			} catch (err) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Failed to create group',
					cause: err,
				});
			}
		}),
	archive: trpc.authenticatedProcedure
		.input(z.string())
		.mutation(async ({ input, ctx }) => {
			try {
				const group = await prisma.group.findUnique({
					where: {
						id: input,
					},
				});
				if (!group) {
					throw new TRPCError({
						code: 'NOT_FOUND',
						message: 'Group not found',
					});
				}
				const updatedGroup = await prisma.group.update({
					where: {
						id: input,
					},
					data: {
						archived: true,
					},
				});
				return updatedGroup;
			} catch (err) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Failed to create group',
					cause: err,
				});
			}
		}),
	joinGroupWithInviteId: trpc.authenticatedProcedure
		.input(z.string())
		.mutation(async ({ input, ctx }) => {
			const group = await prisma.group.findFirst({
				where: {
					inviteId: input,
				},
			});

			if (!group) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Invalid invite link',
				});
			}

			await prisma.group.update({
				where: {
					id: group.id,
				},
				data: {
					members: {
						connect: {
							id: ctx.user.id,
						},
					},
				},
			});

			return group;
		}),
	generateInviteId: trpc.authenticatedProcedure
		.input(z.string())
		.mutation(async ({ input, ctx }) => {
			const group = await prisma.group.findUnique({
				where: {
					id: input,
				},
				include: {
					members: true,
					owner: true,
				},
			});

			if (!group || !isUserInGroup(ctx.user.id, group)) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Group not found',
				});
			}

			const updatedGroup = await prisma.group.update({
				where: {
					id: input,
				},
				data: {
					inviteId: shortId.generate(),
				},
			});

			return updatedGroup;
		}),
	getByInviteId: trpc.publicProcedure
		.input(z.string())
		.query(async ({ input }) => {
			const group = await prisma.group.findFirst({
				where: {
					inviteId: input,
					archived: false,
				},
				include: {
					members: true,
					owner: true,
				},
			});

			if (!group) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Invalid invite link',
				});
			}

			return group;
		}),
	getByGroupId: trpc.authenticatedProcedure
		.input(z.string())
		.query(async ({ input, ctx }) => {
			const group = await prisma.group.findUnique({
				where: {
					id: input,
				},
				include: {
					members: true,
					owner: true,
				},
			});
			if (
				!group ||
				(group.ownerId !== ctx.user.id &&
					!group.members.some((mem) => mem.id === ctx.user.id))
			) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Group not found',
				});
			}
			return group;
		}),
	getByUserId: trpc.authenticatedProcedure.query(async ({ ctx }) => {
		const groups = await prisma.group.findMany({
			where: {
				ownerId: ctx.user.id,
				archived: false,
			},
			include: {
				members: true,
				owner: true,
			},
		});
		return groups;
	}),
});
