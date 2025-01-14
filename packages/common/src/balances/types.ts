import type { DB } from '@jshare/types';

export type BalanceObject = {
    participant: DB.GroupParticipant<{ user: true }>;
    currency: string;
    paid: number;
    received: number;
    balance: number;
};
