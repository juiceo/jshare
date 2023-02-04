import { z } from 'zod';

import { getExpenseSummaryByMember } from '@/modules/expenses';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const getExpenseSummaryForUser = trpc.groupMemberProcedure
	.input(z.object({ userId: z.string() }))
	.query(async ({ input, ctx }) => {
		const expenses = await prisma.expense.findMany({
			where: {
				groupId: ctx.group.id,
			},
			include: {
				shares: true,
			},
		});

		const summary = getExpenseSummaryByMember(expenses);

		return summary[input.userId] ?? { paid: 0, owed: 0, balance: 0 };
	});

export const getExpenseSummary = trpc.groupMemberProcedure.query(async ({ ctx }) => {
	const expenses = await prisma.expense.findMany({
		where: {
			groupId: ctx.group.id,
		},
		include: {
			shares: true,
		},
	});

	return getExpenseSummaryByMember(expenses);
});
