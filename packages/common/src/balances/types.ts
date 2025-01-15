import type { GroupParticipant, Profile } from '@jshare/db/models';

export type BalanceObject = {
    participant: GroupParticipant & { user: Profile };
    currency: string;
    paid: number;
    received: number;
    balance: number;
};
