import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { isUserInGroup } from '@/modules/groups';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const getById = trpc.authenticatedProcedure
	.input(
		z.object({
			expenseId: z.string(),
		}),
	)
	.query(async ({ input, ctx }) => {
		const expense = await prisma.expense.findUnique({
			where: {
				id: input.expenseId,
			},
			include: {
				shares: true,
				sender: true,
			},
		});

		if (!expense) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Expense not found',
			});
		}

		const group = await prisma.group.findUnique({
			where: {
				id: expense.groupId,
			},
			select: {
				owner: true,
				members: true,
			},
		});

		if (!group || !isUserInGroup(ctx.user.id, group)) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Expense not found',
			});
		}

		return expense;
	});
