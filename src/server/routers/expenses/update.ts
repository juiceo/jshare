import { observable } from '@trpc/server/observable';
import { z } from 'zod';

import { getAmountByMember } from '@/modules/expenses';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import * as Events from '@/server/events';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const updateExpenseInput = z.object({
	title: z.string(),
	payerId: z.string().min(1, 'Payer ID is required'),
	amount: z.number().min(1, 'Amount must be greater than 0'),
	shares: z.record(z.string(), z.object({ enabled: z.boolean(), amount: z.number().optional() })),
});

export const updateExpense = trpc.expenseOwnerProcedure
	.input(
		z.object({
			data: updateExpenseInput,
		}),
	)
	.mutation(async ({ input, ctx }) => {
		const { data } = input;
		const { expense } = ctx;
		const amountByMember = getAmountByMember({
			shares: data.shares,
			total: data.amount,
		});

		const shares = Object.entries(data.shares).reduce(
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
					payerId: data.payerId,
					amount: data.amount,
					title: data.title,
				},
			}),
			prisma.group.update({
				where: {
					id: expense.groupId,
				},
				data: {
					total: {
						increment: data.amount - expense.amount,
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
