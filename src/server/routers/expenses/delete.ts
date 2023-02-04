import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const deleteExpense = trpc.expenseOwnerProcedure.mutation(async ({ ctx }) => {
	const { expense } = ctx;
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
