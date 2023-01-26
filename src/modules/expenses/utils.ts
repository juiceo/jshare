import { Expense, ExpenseShareWithMember, User } from '@prisma/client';
import { range, sum } from 'lodash';

import { AmountByMember } from '@/utils/expenses';

import { ByUserId } from '../common/types';
import { ExpenseShare, ExpenseSummary } from './types';

export const getInitialExpenseShares = (
	members: User[],
): ByUserId<ExpenseShare> => {
	return members.reduce((acc, member) => {
		acc[member.id] = {
			enabled: true,
		};
		return acc;
	}, {} as ByUserId<ExpenseShare>);
};

export const getExpenseSharesByMember = (
	value: ExpenseShareWithMember[],
): ByUserId<ExpenseShare> => {
	return value.reduce((acc, share) => {
		acc[share.memberId] = {
			enabled: true, //TODO: This is not yet correct
		};

		return acc;
	}, {} as ByUserId<ExpenseShare>);
};

export const getAmountByMember = (args: {
	shares: ByUserId<ExpenseShare>;
	total: number;
}): ByUserId<number> => {
	const { shares, total } = args;

	const amountByMember: AmountByMember = {};
	let membersLeft = Object.keys(shares);
	let totalLeft = total;

	Object.entries(args.shares).forEach(([memberId, share]) => {
		if (!share.enabled) {
			amountByMember[memberId] = 0;
			membersLeft = membersLeft.filter((id) => id !== memberId);
		} else if (!!share.amount) {
			totalLeft = Math.max(totalLeft - share.amount, 0);
			membersLeft = membersLeft.filter((id) => id !== memberId);
			amountByMember[memberId] = share.amount;
		}
	});

	membersLeft.forEach((memberId) => {
		amountByMember[memberId] = Math.floor(totalLeft / membersLeft.length);
	});

	const totalAmount = sum(Object.values(amountByMember));
	const difference = total - totalAmount;

	if (membersLeft.length > 0 && difference > 0) {
		range(difference).forEach((index) => {
			const memberId = membersLeft[index % membersLeft.length];
			if (memberId) {
				amountByMember[memberId] += 1;
			}
		});
	}

	return amountByMember;
};

export const getExpenseSummaryByMember = (
	expenses: (Expense & { shares: ExpenseShareWithMember[] })[],
): ByUserId<ExpenseSummary> => {
	return expenses.reduce((result, expense) => {
		if (!result[expense.payerId]) {
			result[expense.payerId] = { paid: 0, owed: 0, balance: 0 };
		}
		const summary = result[expense.payerId];
		if (summary) {
			summary.paid += expense.amount;
			summary.balance += expense.amount;
		}
		expense.shares.forEach((share) => {
			if (!result[share.memberId]) {
				result[share.memberId] = { paid: 0, owed: 0, balance: 0 };
			}
			const summary = result[share.memberId];
			if (summary) {
				summary.owed += share.amount;
				summary.balance -= share.amount;
			}
		});

		return result;
	}, {} as ByUserId<ExpenseSummary>);
};

export const EMPTY_EXPENSE_SUMMARY: ExpenseSummary = {
	paid: 0,
	owed: 0,
	balance: 0,
};

export const getExpenseName = (expense: Expense): string => {
	return expense.title || `Expense #${expense.number}`;
};
