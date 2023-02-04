import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const archiveGroup = trpc.groupOwnerProcedure.mutation(async ({ input }) => {
	return await prisma.group.update({
		where: {
			id: input.groupId,
		},
		data: {
			archived: true,
		},
	});
});
