import { describe, expect, it } from 'vitest';

import type { BalanceObject } from './types';
import { getPaymentsFromBalances } from './util';

describe('getPaymentsFromBalances', () => {
    it('should return an empty array if there are no balances', () => {
        expect(getPaymentsFromBalances([])).toEqual([]);
    });

    it('should return an empty array if all balances are zero', () => {
        const balances: BalanceObject[] = [
            {
                userId: '1',
                currency: 'EUR',
                paid: 100,
                received: 100,
                balance: 0,
            },
            {
                userId: '2',
                currency: 'EUR',
                paid: 200,
                received: 200,
                balance: 0,
            },
            {
                userId: '3',
                currency: 'EUR',
                paid: 300,
                received: 300,
                balance: 0,
            },
        ];

        const payments = getPaymentsFromBalances(balances);

        expect(payments).toEqual([]);
    });

    it('should throw an error if the total balance is non-zero', () => {
        const balances: BalanceObject[] = [
            {
                userId: '1',
                currency: 'EUR',
                paid: 100,
                received: 50,
                balance: 50,
            },
            {
                userId: '2',
                currency: 'EUR',
                paid: 200,
                received: 100,
                balance: 100,
            },
        ];

        expect(() => getPaymentsFromBalances(balances)).toThrowError(
            'The total balance is not zero: 0 debt vs 150 credit'
        );
    });

    it('should throw an error if the balances array contains duplicate userIds', () => {
        const balances: BalanceObject[] = [
            {
                userId: '1',
                currency: 'EUR',
                paid: 100,
                received: 50,
                balance: 50,
            },
            {
                userId: '1',
                currency: 'EUR',
                paid: 50,
                received: 100,
                balance: -50,
            },
        ];
        expect(() => getPaymentsFromBalances(balances)).toThrowError(
            'Cannot have duplicate userIds in balances: user 1 appears 2 times'
        );
    });

    it('should return the correct results for a simple case', () => {
        const balances: BalanceObject[] = [
            {
                userId: '1',
                currency: 'EUR',
                paid: 100,
                received: 50,
                balance: 50,
            },
            {
                userId: '2',
                currency: 'EUR',
                paid: 200,
                received: 100,
                balance: 100,
            },
            {
                userId: '3',
                currency: 'EUR',
                paid: 150,
                received: 300,
                balance: -150,
            },
        ];

        const payments = getPaymentsFromBalances(balances);

        expect(payments).toEqual([
            {
                fromUserId: '3',
                toUserId: '2',
                currency: 'EUR',
                amount: 100,
            },
            {
                fromUserId: '3',
                toUserId: '1',
                currency: 'EUR',
                amount: 50,
            },
        ]);
    });

    it('should return the correct results for a more complex case', () => {
        const balances: BalanceObject[] = [
            {
                userId: '2',
                currency: 'EUR',
                paid: 300,
                received: 350,
                balance: -50,
            },
            {
                userId: '3',
                currency: 'EUR',
                paid: 700,
                received: 1000,
                balance: -300,
            },
            {
                userId: '4',
                currency: 'EUR',
                paid: 100,
                received: 100,
                balance: 0,
            },
            {
                userId: '5',
                currency: 'EUR',
                paid: 200,
                received: 300,
                balance: -100,
            },
            {
                userId: '1',
                currency: 'EUR',
                paid: 500,
                received: 50,
                balance: 450,
            },
        ];

        const payments = getPaymentsFromBalances(balances);

        expect(payments).toEqual([
            {
                amount: 300,
                currency: 'EUR',
                fromUserId: '3',
                toUserId: '1',
            },
            {
                amount: 100,
                currency: 'EUR',
                fromUserId: '5',
                toUserId: '1',
            },
            {
                amount: 50,
                currency: 'EUR',
                fromUserId: '2',
                toUserId: '1',
            },
        ]);
    });

    it('should return the correct results for an even more complex case', () => {
        const balances: BalanceObject[] = [
            {
                userId: '1',
                currency: 'EUR',
                paid: 550,
                received: 50,
                balance: 500,
            },
            {
                userId: '2',
                currency: 'EUR',
                paid: 300,
                received: 50,
                balance: 250,
            },
            {
                userId: '3',
                currency: 'EUR',
                paid: 100,
                received: 100,
                balance: 0,
            },
            {
                userId: '4',
                currency: 'EUR',
                paid: 300,
                received: 350,
                balance: -50,
            },
            {
                userId: '5',
                currency: 'EUR',
                paid: 200,
                received: 300,
                balance: -100,
            },
            {
                userId: '6',
                currency: 'EUR',
                paid: 300,
                received: 550,
                balance: -250,
            },
            {
                userId: '7',
                currency: 'EUR',
                paid: 700,
                received: 1050,
                balance: -350,
            },
        ];

        const payments = getPaymentsFromBalances(balances);

        expect(payments).toEqual([
            {
                amount: 350,
                currency: 'EUR',
                fromUserId: '7',
                toUserId: '1',
            },
            {
                amount: 150,
                currency: 'EUR',
                fromUserId: '6',
                toUserId: '1',
            },
            {
                amount: 100,
                currency: 'EUR',
                fromUserId: '6',
                toUserId: '2',
            },
            {
                amount: 100,
                currency: 'EUR',
                fromUserId: '5',
                toUserId: '2',
            },
            {
                amount: 50,
                currency: 'EUR',
                fromUserId: '4',
                toUserId: '2',
            },
        ]);
    });
});
