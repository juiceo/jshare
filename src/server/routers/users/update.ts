import { z } from 'zod';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const updateUserInput = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
});

export const updateUser = trpc.userProcedure.input(updateUserInput).mutation(async ({ input }) => {
	return prisma.user.update({
		where: {
			id: input.userId,
		},
		data: {
			...input,
			name: `${input.firstName} ${input.lastName}`,
		},
	});
});
