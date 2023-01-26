export type ExpenseShare = {
	enabled: boolean;
	amount?: number;
};

export type ExpenseSummary = {
	paid: number;
	owed: number;
	balance: number;
};
