import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const getByInviteId = trpc.publicProcedure
	.input(
		z.object({
			inviteId: z.string(),
		}),
	)
	.query(async ({ input }) => {
		const { inviteId } = input;
		const group = await prisma.group.findFirst({
			where: {
				inviteId,
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
	});

export const getById = trpc.groupMemberProcedure.query(async ({ ctx }) => {
	return ctx.group;
});
