import { TRPCError } from '@trpc/server';

import { updateUserSchema } from '@/schemas/user';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const usersRouter = trpc.router({
	getSelf: trpc.authenticatedProcedure.query(async ({ ctx }) => {
		const user = await prisma.user.findUnique({
			where: {
				id: ctx.user.id,
			},
		});

		if (!user) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'User not found',
			});
		}

		return user;
	}),
	updateSelf: trpc.authenticatedProcedure
		.input(updateUserSchema)
		.mutation(async ({ input, ctx }) => {
			const updatedUser = await prisma.user.update({
				where: {
					id: ctx.user.id,
				},
				data: {
					...input,
					name: `${input.firstName} ${input.lastName}`,
				},
			});

			if (!updatedUser) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'User not found',
				});
			}

			return updatedUser;
		}),
});
