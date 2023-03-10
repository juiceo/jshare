import { observable } from '@trpc/server/observable';
import { z } from 'zod';

import { ExpenseWithSenderAndShares, getAmountByMember } from '@/modules/expenses';
import * as Events from '@/server/events';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const updateExpenseInput = z.object({
	title: z.string(),
	payerId: z.string().min(1, 'Payer ID is required'),
	amount: z.number().min(1, 'Amount must be greater than 0'),
	shares: z.record(z.string(), z.object({ enabled: z.boolean(), amount: z.number().optional() })),
});

export const updateExpense = trpc.expenseOwnerProcedure.input(updateExpenseInput).mutation(async ({ input, ctx }) => {
	const { expense } = ctx;
	const amountByMember = getAmountByMember({
		shares: input.shares,
		total: input.amount,
	});

	const shares = Object.entries(input.shares).reduce(
		(acc, [memberId, share]) => {
			acc.push({
				memberId,
				amount: amountByMember[memberId] ?? 0,
				locked: share.amount !== undefined,
			});
			return acc;
		},
		[] as {
			memberId: string;
			amount: number;
			locked: boolean;
		}[],
	);

	const [updatedExpense, updatedGroup, ...updatedShares] = await prisma.$transaction([
		prisma.expense.update({
			where: {
				id: input.expenseId,
			},
			data: {
				payerId: input.payerId,
				amount: input.amount,
				title: input.title,
			},
		}),
		prisma.group.update({
			where: {
				id: expense.groupId,
			},
			data: {
				total: {
					increment: input.amount - expense.amount,
				},
			},
		}),
		...shares.map((share) =>
			prisma.expenseShareWithMember.upsert({
				where: {
					expenseId_memberId: {
						expenseId: expense.id,
						memberId: share.memberId,
					},
				},
				create: {
					amount: share.amount,
					locked: share.locked,
					memberId: share.memberId,
					expenseId: expense.id,
				},
				update: {
					amount: share.amount,
					locked: share.locked,
				},
			}),
		),
	]);

	const expenseAfter = {
		...updatedExpense,
		shares: updatedShares,
	};

	Events.emit(Events.EditExpenseInGroup(expenseAfter.groupId), expenseAfter);

	return expenseAfter;
});

export const onUpdateExpenseInGroup = trpc.groupMemberProcedure.subscription(async ({ input }) => {
	return observable<ExpenseWithSenderAndShares>((emit) => {
		const onSend = (data: ExpenseWithSenderAndShares) => {
			emit.next(data);
		};
		Events.on(Events.EditExpenseInGroup(input.groupId), onSend);

		return () => {
			Events.off(Events.EditExpenseInGroup(input.groupId), onSend);
		};
	});
});
