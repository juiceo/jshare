import { observable } from '@trpc/server/observable';
import { z } from 'zod';

import { ExpenseWithSenderAndShares, getAmountByMember } from '@/modules/expenses';
import { zCurrencyCode } from '@/modules/money';
import * as Events from '@/server/events';
import { prisma } from '@/server/prisma';
import * as trpc from '@/server/trpc';

export const createExpenseInput = z.object({
	title: z.string().optional().default(''),
	amount: z.number().min(1, 'Amount must be greater than 0'),
	groupId: z.string().min(1, 'Group ID is required'),
	payerId: z.string().min(1, 'Payer ID is required'),
	currency: zCurrencyCode,
	shares: z.record(z.string(), z.object({ enabled: z.boolean(), amount: z.number().optional() })),
});

export const createExpense = trpc.groupMemberProcedure.input(createExpenseInput).mutation(async ({ input, ctx }) => {
	const { group } = ctx;
	const amountByMember = getAmountByMember({
		shares: input.shares,
		total: input.amount,
	});
	const sharesToCreate = Object.entries(input.shares).reduce(
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
	const [expense] = await prisma.$transaction([
		prisma.expense.create({
			data: {
				...input,
				senderId: ctx.user.id,
				currency: group.currency,
				number: group.expenseCount + 1,
				shares: {
					create: sharesToCreate,
				},
			},
			include: {
				shares: true,
				sender: true,
			},
		}),
		prisma.group.update({
			where: {
				id: group.id,
			},
			data: {
				expenseCount: {
					increment: 1,
				},
				total: {
					increment: input.amount,
				},
			},
		}),
	]);

	Events.emit(Events.CreateExpenseInGroup(input.groupId), expense);

	return expense;
});

export const onCreateExpenseInGroup = trpc.groupMemberProcedure.subscription(async ({ input }) => {
	return observable<ExpenseWithSenderAndShares>((emit) => {
		const onSend = (data: ExpenseWithSenderAndShares) => {
			emit.next(data);
		};
		Events.on(Events.CreateExpenseInGroup(input.groupId), onSend);

		return () => {
			Events.off(Events.CreateExpenseInGroup(input.groupId), onSend);
		};
	});
});
