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
		const amountToPay = Math.abs(balance);
		let amountPaid = 0;
		while (amountPaid < amountToPay) {
			const receiver = receivers.find((item) => item.balance > 0);
			if (!receiver) {
				// Should never happen
				break;
			}
			if (receiver.balance > amountToPay) {
				payments.push({
					id: shortid(),
					from: userId,
					to: receiver.userId,
					amount: amountToPay,
				});
				amountPaid = amountToPay;
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
				payments.push({
					id: shortid(),
					from: userId,
					to: receiver.userId,
					amount: receiver.balance,
				});
				amountPaid += receiver.balance;
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
