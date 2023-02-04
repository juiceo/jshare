import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const deleteExpense = trpc.authenticatedProcedure
	.input(
		z.object({
			groupId: z.string(),
		}),
	)
	.mutation(async ({ input, ctx }) => {
		const expense = await prisma.expense.findUnique({
			where: {
				id: input.groupId,
			},
		});

		if (!expense) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Expense not found',
			});
		}

		if (expense.senderId !== ctx.user.id) {
			throw new TRPCError({
				code: 'UNAUTHORIZED',
				message: 'You cannot delete an expense you did not create',
			});
		}

		await prisma.$transaction([
			prisma.expense.delete({
				where: {
					id: expense.id,
				},
			}),
			prisma.group.update({
				where: {
					id: expense.groupId,
				},
				data: {
					total: {
						decrement: expense.amount,
					},
					expenseCount: {
						decrement: 1,
					},
				},
			}),
		]);
	});
