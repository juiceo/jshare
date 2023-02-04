import { z } from 'zod';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const listByGroupId = trpc.groupMemberProcedure.query(async ({ input }) => {
	return prisma.message.findMany({
		where: {
			groupId: input.groupId,
		},
		include: {
			sender: true,
		},
	});
});

export const listByGroupIdInfinite = trpc.groupMemberProcedure
	.input(
		z.object({
			limit: z.number().min(1),
			cursor: z.string().nullish(),
		}),
	)
	.query(async ({ input }) => {
		const { groupId, limit, cursor } = input;

		const messages = await prisma.message.findMany({
			take: limit + 1,
			where: {
				groupId,
			},
			include: {
				sender: true,
			},
			cursor: cursor ? { id: cursor } : undefined,
			orderBy: {
				createdAt: 'desc',
			},
		});

		let nextCursor: typeof cursor | undefined = undefined;
		if (messages.length > limit) {
			const nextItem = messages.pop();
			if (!!nextItem) {
				nextCursor = nextItem.id;
			}
		}
		return {
			messages,
			nextCursor,
		};
	});
