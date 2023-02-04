import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const deleteGroup = trpc.groupOwnerProcedure.mutation(async ({ input }) => {
	return await prisma.group.delete({
		where: {
			id: input.groupId,
		},
	});
});
