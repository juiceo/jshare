import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const listOwnGroups = trpc.authenticatedProcedure.query(async ({ ctx }) => {
	const ownedGroups = await prisma.group.findMany({
		where: {
			ownerId: ctx.user.id,
			archived: false,
		},
		include: {
			members: true,
			owner: true,
		},
	});

	const memberGroups = await prisma.group.findMany({
		where: {
			members: {
				some: {
					id: ctx.user.id,
				},
			},
		},
		include: {
			members: true,
			owner: true,
		},
	});

	return [...ownedGroups, ...memberGroups];
});
