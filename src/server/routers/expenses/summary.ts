import { z } from 'zod';

import { getExpenseSummaryByMember } from '@/modules/expenses';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const getExpenseSummaryForUser = trpc.groupMemberProcedure
	.input(z.object({ userId: z.string() }))
	.query(async ({ input, ctx }) => {
		const [expenses, payments] = await Promise.all([
			prisma.expense.findMany({
				where: {
					groupId: ctx.group.id,
				},
				include: {
					shares: true,
				},
			}),
			prisma.payment.findMany({
				where: {
					groupId: ctx.group.id,
				},
			}),
		]);

		const summary = getExpenseSummaryByMember(expenses, payments);

		return summary[input.userId] ?? { paid: 0, owed: 0, balance: 0 };
	});

export const getExpenseSummary = trpc.groupMemberProcedure.query(async ({ ctx }) => {
	const [expenses, payments] = await Promise.all([
		prisma.expense.findMany({
			where: {
				groupId: ctx.group.id,
			},
			include: {
				shares: true,
			},
		}),
		prisma.payment.findMany({
			where: {
				groupId: ctx.group.id,
			},
		}),
	]);

	return getExpenseSummaryByMember(expenses, payments);
});
