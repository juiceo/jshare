import type { DB } from '@jshare/db';

export type BalanceObject = {
    participant: DB.GroupParticipant<{ user: true }>;
    currency: string;
    paid: number;
    received: number;
    balance: number;
};
