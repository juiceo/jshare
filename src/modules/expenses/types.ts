import { Expense, ExpenseShareWithMember } from '@prisma/client';
import { User } from 'next-auth';

export type ExpenseShare = {
	enabled: boolean;
	amount?: number;
};

export type ExpenseSummary = {
	paid: number;
	owed: number;
	balance: number;
};

export type ExpenseWithSenderAndShares = Expense & {
	sender: User | null;
	shares: ExpenseShareWithMember[];
};
