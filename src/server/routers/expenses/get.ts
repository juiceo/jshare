import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const getById = trpc.groupMemberProcedure
	.input(
		z.object({
			expenseId: z.string(),
		}),
	)
	.query(async ({ input }) => {
		const expense = await prisma.expense.findUnique({
			where: {
				id: input.expenseId,
			},
			include: {
				shares: true,
				sender: true,
			},
		});

		if (!expense || expense.groupId !== input.groupId) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Expense not found',
			});
		}

		return expense;
	});
