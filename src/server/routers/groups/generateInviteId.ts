import shortId from 'shortid';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const generateInviteId = trpc.groupMemberProcedure.mutation(async ({ input }) => {
	return prisma.group.update({
		where: {
			id: input.groupId,
		},
		data: {
			inviteId: shortId.generate(),
		},
	});
});
