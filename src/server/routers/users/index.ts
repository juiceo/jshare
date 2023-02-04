import { z } from 'zod';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const updateUserInput = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.string(),
});

export const usersRouter = trpc.router({
	getSelf: trpc.authenticatedProcedure.query(async ({ ctx }) => {
		return prisma.user.findUnique({
			where: {
				id: ctx.user.id,
			},
		});
	}),
	updateSelf: trpc.authenticatedProcedure.input(updateUserInput).mutation(async ({ input, ctx }) => {
		return prisma.user.update({
			where: {
				id: ctx.user.id,
			},
			data: {
				...input,
				name: `${input.firstName} ${input.lastName}`,
			},
		});
	}),
});
