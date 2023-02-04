import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const getById = trpc.userProcedure.query(async ({ input }) => {
	return prisma.user.findUnique({
		where: {
			id: input.userId,
		},
	});
});
