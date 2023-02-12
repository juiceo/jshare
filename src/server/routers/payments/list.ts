import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const listByGroupId = trpc.groupMemberProcedure.query(async ({ input }) => {
	const { groupId } = input;
	const expenses = await prisma.payment.findMany({
		where: {
			groupId,
		},
		include: {
			from: true,
			to: true,
		},
	});
	return expenses;
});
