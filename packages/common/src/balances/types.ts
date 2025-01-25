export type BalanceObject = {
    userId: string;
    currency: string;
    paid: number;
    received: number;
    balance: number;
};

export type PaymentObject = {
    fromUserId: string;
    toUserId: string;
    currency: string;
    amount: number;
};
