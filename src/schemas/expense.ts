import { Expense, ExpenseShareWithMember, User } from '@prisma/client';
import { z } from 'zod';

import { zCurrencyCode } from '@/modules/money';

export const createExpenseSchema = z.object({
	title: z.string().optional().default(''),
	amount: z.number().min(1, 'Amount must be greater than 0'),
	groupId: z.string().min(1, 'Group ID is required'),
	payerId: z.string().min(1, 'Payer ID is required'),
	currency: zCurrencyCode,
	shares: z.record(
		z.string(),
		z.object({ enabled: z.boolean(), amount: z.number().optional() }),
	),
});

export const editExpenseSchema = z.object({
	id: z.string(),
	title: z.string(),
	payerId: z.string().min(1, 'Payer ID is required'),
	amount: z.number().min(1, 'Amount must be greater than 0'),
	shares: z.record(
		z.string(),
		z.object({ enabled: z.boolean(), amount: z.number().optional() }),
	),
});

export type CreateExpenseSchema = z.infer<typeof createExpenseSchema>;

export type ExpenseWithSenderAndShares = Expense & {
	sender: User | null;
	shares: ExpenseShareWithMember[];
};

export const createExpenseShareSchema = z.object({
	memberId: z.string().min(1, 'Please enter a member id'),
	amount: z.number().nullable(),
	locked: z.boolean(),
});

export type CreateExpenseShareSchema = z.infer<typeof createExpenseShareSchema>;
