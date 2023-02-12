import { sortBy } from 'lodash';
import shortid from 'shortid';

import { ByUserId } from '@/modules/common/types';
import { ExpenseSummary } from '@/modules/expenses';

type PendingPayment = {
	id: string;
	from: string;
	to: string;
	amount: number;
};

export const getPendingPaymentsByUser = (balances: ByUserId<ExpenseSummary>) => {
	const balancesWithUserId = Object.entries(balances).map(([userId, balance]) => ({
		userId,
		balance: balance.balance,
	}));
	const payments: PendingPayment[] = [];
	const sortedBalances = sortBy(balancesWithUserId, (item) => item.balance);
	const payers = sortedBalances.filter((item) => item.balance < 0);
	let receivers = sortedBalances.filter((item) => item.balance > 0).reverse();

	payers.forEach(({ userId, balance }) => {
		const totalToPay = Math.abs(balance);
		let totalRemaining = totalToPay;
		while (totalRemaining > 0) {
			const receiver = receivers.find((item) => item.balance > 0);
			if (!receiver) {
				// Should never happen
				break;
			}
			if (receiver.balance > totalRemaining) {
				const amountToPay = totalRemaining;
				payments.push({
					id: shortid(),
					from: userId,
					to: receiver.userId,
					amount: amountToPay,
				});
				totalRemaining = 0;
				receivers = receivers.map((r) => {
					if (r.userId === receiver.userId) {
						return {
							...r,
							balance: r.balance - amountToPay,
						};
					}
					return r;
				});
			} else {
				const amountToPay = Math.min(receiver.balance, totalRemaining);
				payments.push({
					id: shortid(),
					from: userId,
					to: receiver.userId,
					amount: amountToPay,
				});
				totalRemaining -= amountToPay;
				receivers = receivers.map((r) => {
					if (r.userId === receiver.userId) {
						return {
							...r,
							balance: 0,
						};
					}
					return r;
				});
			}
		}
	});

	return payments;
};
