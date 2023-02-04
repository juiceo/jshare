import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const joinGroupWithInviteId = trpc.authenticatedProcedure
	.input(
		z.object({
			inviteId: z.string(),
		}),
	)
	.mutation(async ({ input, ctx }) => {
		const { inviteId } = input;
		const group = await prisma.group.findFirst({
			where: {
				inviteId,
			},
		});

		if (!group) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Invalid invite link',
			});
		}

		return prisma.group.update({
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
			include: {
				members: true,
			},
		});
	});
