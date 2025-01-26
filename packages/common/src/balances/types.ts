import type { DB } from '@jshare/db';

export type BalanceObject = {
    userId: string;
    currency: DB.CurrencyCode;
    paid: number;
    received: number;
    balance: number;
};

export type PaymentObject = {
    fromUserId: string;
    toUserId: string;
    currency: DB.CurrencyCode;
    amount: number;
};
