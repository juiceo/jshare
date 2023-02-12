import { Expense, ExpenseShareWithMember, Payment, User } from '@prisma/client';
import { range, sum, sumBy } from 'lodash';

import { ExpenseFormValue } from '@/components/ExpenseForm';

import { ByUserId } from '../common/types';
import { CurrencyCode, formatAmount } from '../money';
import { ExpenseShare, ExpenseSummary } from './types';

export const getInitialExpenseShares = (members: User[]): ByUserId<ExpenseShare> => {
	return members.reduce((result, member) => {
		result[member.id] = {
			enabled: true,
		};
		return result;
	}, {} as ByUserId<ExpenseShare>);
};

export const getExpenseSharesFromExpense = (
	expense: Expense & { shares: ExpenseShareWithMember[] },
): ByUserId<ExpenseShare> => {
	return expense.shares.reduce((result, share) => {
		result[share.memberId] = {
			enabled: share.amount > 0,
			amount: share.locked ? share.amount : undefined,
		};
		return result;
	}, {} as ByUserId<ExpenseShare>);
};

export const getExpenseSharesByMember = (value: ExpenseShareWithMember[]): ByUserId<ExpenseShare> => {
	return value.reduce((acc, share) => {
		acc[share.memberId] = {
			enabled: true, //TODO: This is not yet correct
		};

		return acc;
	}, {} as ByUserId<ExpenseShare>);
};

export const getAmountByMember = (args: { shares: ByUserId<ExpenseShare>; total: number }): ByUserId<number> => {
	const { shares, total } = args;

	const amountByMember: ByUserId<number> = {};
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
	payments: Payment[],
): ByUserId<ExpenseSummary> => {
	const summary = expenses.reduce((result, expense) => {
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

	payments.forEach((payment) => {
		if (!summary[payment.fromId]) summary[payment.fromId] = EMPTY_EXPENSE_SUMMARY;

		summary[payment.fromId]!.paid += payment.amount;
		summary[payment.fromId]!.balance += payment.amount;

		if (!summary[payment.toId]) summary[payment.toId] = EMPTY_EXPENSE_SUMMARY;

		summary[payment.toId]!.owed += payment.amount;
		summary[payment.toId]!.balance -= payment.amount;
	});

	return summary;
};

export const EMPTY_EXPENSE_SUMMARY: ExpenseSummary = {
	paid: 0,
	owed: 0,
	balance: 0,
};

export const getExpenseName = (expense: Expense): string => {
	return expense.title || `Expense #${expense.number}`;
};

export const validateExpenseFormValue = (expense: ExpenseFormValue, currency: CurrencyCode) => {
	const amountByMember = getAmountByMember({
		shares: expense.shares,
		total: expense.amount,
	});

	const totalAmount = sum(Object.values(amountByMember));
	const difference = expense.amount - totalAmount;

	if (!expense.amount) {
		return {
			valid: false,
		};
	}

	if (difference > 0) {
		return {
			valid: false,
			message: `The total amount is ${formatAmount(difference, currency)} too high`,
		};
	}

	if (difference < 0) {
		return {
			valid: false,
			message: `The total amount is ${formatAmount(Math.abs(difference), currency)} too low`,
		};
	}

	if (!Object.values(expense.shares).some((s) => s.enabled)) {
		return {
			valid: false,
		};
	}

	return {
		valid: true,
	};
};
