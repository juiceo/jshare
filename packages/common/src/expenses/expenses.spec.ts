import { sumBy } from 'lodash';
import { describe, expect, it } from 'vitest';

import { DB } from '@jshare/db';

import { BASE_EXCHANGE_RATES } from '../money';
import {
    addShare,
    convertExpense,
    isValidExpense,
    recalculateShares,
    removeShare,
    transferShare,
    updateShare,
    type PartialExpenseShare,
} from './util';

describe('isValidExpense', () => {
    it('should return true if the amount is equal to the sum of the shares', () => {
        expect(
            isValidExpense({
                amount: 100,
                currency: 'USD',
                shares: [
                    {
                        userId: '1',
                        amount: 50,
                        locked: false,
                    },
                    {
                        userId: '2',
                        amount: 50,
                        locked: false,
                    },
                ],
            })
        ).toBe(true);
    });

    it("should return false if the amount isn't equal to the sum of the shares", () => {
        expect(
            isValidExpense({
                amount: 100,
                currency: 'USD',
                shares: [
                    {
                        userId: '1',
                        amount: 50,
                        locked: false,
                    },
                    {
                        userId: '2',
                        amount: 100,
                        locked: false,
                    },
                ],
            })
        ).toBe(false);
    });
});

describe('convertExpense', () => {
    it('should return the original expense if the conversion is undefiend', () => {
        const expense = {
            amount: 100,
            currency: DB.CurrencyCode.USD,
            shares: [
                {
                    userId: '1',
                    amount: 49,
                    locked: false,
                },
                {
                    userId: '2',
                    amount: 51,
                    locked: false,
                },
            ],
        };
        const result = convertExpense({
            expense,
            conversion: null,
        });

        expect(result).toBe(expense);
    });
    it('should return the original expense if the conversion is to the same currency', () => {
        const expense = {
            amount: 100,
            currency: DB.CurrencyCode.USD,
            shares: [
                {
                    userId: '1',
                    amount: 49,
                    locked: false,
                },
                {
                    userId: '2',
                    amount: 51,
                    locked: false,
                },
            ],
        };
        const result = convertExpense({
            expense,
            conversion: {
                to: DB.CurrencyCode.USD,
                exchangeRates: BASE_EXCHANGE_RATES,
            },
        });

        expect(result).toBe(expense);
    });

    it('should convert the expense to the specified currency', () => {
        const result = convertExpense({
            expense: {
                amount: 100,
                currency: 'USD',
                shares: [
                    {
                        userId: '1',
                        amount: 49,
                        locked: false,
                    },
                    {
                        userId: '2',
                        amount: 51,
                        locked: false,
                    },
                ],
            },
            conversion: {
                to: 'EUR',
                exchangeRates: {
                    ...BASE_EXCHANGE_RATES,
                    rates: {
                        ...BASE_EXCHANGE_RATES.rates,
                        EUR: 0.9,
                    },
                },
            },
        });

        expect(result.amount).toBe(sumBy(result.shares, 'amount'));
        expect(result.currency).toBe('USD');
        expect(result.conversion?.amount).toBe(sumBy(result.shares, 'conversion.amount'));
        expect(result.conversion?.currency).toBe('EUR');
    });

    it("should return the expense's converted amount as the sum of the converted shares' amounts, to avoid rounding errors", () => {
        const result = convertExpense({
            expense: {
                amount: 279,
                currency: 'USD',
                shares: [
                    {
                        userId: '1',
                        amount: 93,
                        locked: false,
                    },
                    {
                        userId: '2',
                        amount: 93,
                        locked: false,
                    },
                    {
                        userId: '2',
                        amount: 93,
                        locked: false,
                    },
                ],
            },
            conversion: {
                to: 'EUR',
                exchangeRates: {
                    ...BASE_EXCHANGE_RATES,
                    rates: {
                        ...BASE_EXCHANGE_RATES.rates,
                        EUR: 0.9,
                    },
                },
            },
        });

        expect(result.amount).toBe(sumBy(result.shares, 'amount'));
        expect(result.currency).toBe('USD');
        expect(result.conversion?.amount).toBe(sumBy(result.shares, 'conversion.amount'));
        expect(result.conversion?.currency).toBe('EUR');

        expect(result.shares.map((s) => s.conversion?.amount)).toEqual([84, 84, 84]);
        expect(result.conversion?.amount).toBe(252);
    });
});

describe('recalculateShares', () => {
    it('should work correctly when no shares are locked', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
        ];

        const result = recalculateShares({
            expenseAmount: 100,
            shares,
        });

        expect(result[0].amount).toBe(50);
        expect(result[1].amount).toBe(50);
    });

    it('should work correctly when some shares are locked', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 50,
                userId: '2',
                locked: true,
            },
        ];

        const result = recalculateShares({
            expenseAmount: 150,
            shares,
        });

        expect(result[0].amount).toBe(100);
        expect(result[1].amount).toBe(50);
    });

    it('should work correctly when all shares are locked', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: true,
            },
            {
                amount: 50,
                userId: '2',
                locked: true,
            },
        ];

        const result = recalculateShares({
            expenseAmount: 150,
            shares,
        });

        expect(result[0].amount).toBe(40);
        expect(result[1].amount).toBe(50);
    });

    it('should correctly distribute the amount if not evenly divisible by non-locked shares', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 400,
                userId: '1',
                locked: false,
            },
            {
                amount: 400,
                userId: '2',
                locked: false,
            },
        ];

        const result = recalculateShares({
            shares,
            expenseAmount: 801,
        });

        expect(result[0].amount).toBe(401);
        expect(result[1].amount).toBe(400);
    });

    it('should correct any floating shares that have incorrect amounts', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 0,
                userId: '1',
                locked: false,
            },
            {
                amount: 0,
                userId: '2',
                locked: false,
            },
        ];

        const result = recalculateShares({
            shares,
            expenseAmount: 100,
        });

        expect(result[0].amount).toBe(50);
        expect(result[1].amount).toBe(50);
    });

    it('should never set shares to less than 0, even if the total of locked shares exceeds the amount', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 100,
                userId: '1',
                locked: true,
            },
            {
                amount: 100,
                userId: '2',
                locked: true,
            },
            {
                amount: 50,
                userId: '3',
                locked: false,
            },
        ];

        const result = recalculateShares({
            shares,
            expenseAmount: 100,
        });

        expect(result[0].amount).toBe(100);
        expect(result[1].amount).toBe(100);
        expect(result[2].amount).toBe(0);
    });
});

describe('addShare', () => {
    it('should return the original shares if the user already has a share', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 45,
                userId: '1',
                locked: false,
            },
            {
                amount: 45,
                userId: '2',
                locked: false,
            },
        ];

        const result = addShare({
            shares,
            share: {
                userId: '2',
                amount: 99,
                locked: true,
            },
            expenseAmount: 90,
        });

        expect(result).toEqual(shares);
    });

    it('should work correctly when no existing shares are locked', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 45,
                userId: '1',
                locked: false,
            },
            {
                amount: 45,
                userId: '2',
                locked: false,
            },
        ];

        const result = addShare({
            shares,
            share: {
                userId: '3',
                amount: 0,
                locked: false,
            },
            expenseAmount: 90,
        });

        expect(result[0].amount).toBe(30);
        expect(result[1].amount).toBe(30);
        expect(result[2].amount).toBe(30);
        expect(result[2].userId).toBe('3');
    });

    it('should work correctly when some existing shares are locked', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: true,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
        ];

        const result = addShare({
            shares,
            share: {
                userId: '3',
                amount: 0,
                locked: false,
            },
            expenseAmount: 80,
        });

        expect(result[0].amount).toBe(40);
        expect(result[1].amount).toBe(20);
        expect(result[2].amount).toBe(20);
    });

    it('should work correctly when all existing shares are locked', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: true,
            },
            {
                amount: 40,
                userId: '2',
                locked: true,
            },
        ];

        const result = addShare({
            shares,
            share: {
                userId: '3',
                amount: 0,
                locked: false,
            },
            expenseAmount: 80,
        });

        expect(result[0].amount).toBe(40);
        expect(result[1].amount).toBe(40);
        expect(result[2].amount).toBe(0);
    });

    it('should work correctly when adding a locked share', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
        ];

        const result = addShare({
            shares,
            share: {
                userId: '3',
                amount: 50,
                locked: true,
            },
            expenseAmount: 80,
        });

        expect(result[0].amount).toBe(15);
        expect(result[1].amount).toBe(15);
        expect(result[2].amount).toBe(50);
    });

    it('should work correctly when the sum of existing locked shares exceeds the expense amount (adding floating share)', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: true,
            },
            {
                amount: 40,
                userId: '2',
                locked: true,
            },
        ];

        const result = addShare({
            shares,
            share: {
                userId: '3',
                amount: 50,
                locked: false,
            },
            expenseAmount: 60,
        });

        expect(result[0].amount).toBe(40);
        expect(result[1].amount).toBe(40);
        expect(result[2].amount).toBe(0);
    });

    it('should work correctly when the sum of existing locked shares exceeds the expense amount (adding locked share)', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: true,
            },
            {
                amount: 40,
                userId: '2',
                locked: true,
            },
        ];

        const result = addShare({
            shares,
            share: {
                userId: '3',
                amount: 50,
                locked: true,
            },
            expenseAmount: 60,
        });

        expect(result[0].amount).toBe(40);
        expect(result[1].amount).toBe(40);
        expect(result[2].amount).toBe(50);
    });
});

describe('updateShare', () => {
    it('should return the original shares if no matching share is found', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: true,
            },
            {
                amount: 40,
                userId: '2',
                locked: true,
            },
        ];

        const result = updateShare({
            shares,
            share: {
                amount: 100,
                userId: '3',
                locked: true,
            },
            expenseAmount: 80,
        });

        expect(result).toEqual(shares);
    });

    it('should update the matching share if found, and re-calculate other shares', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
        ];

        const result = updateShare({
            shares,
            share: {
                userId: '2',
                amount: 60,
                locked: true,
            },
            expenseAmount: 80,
        });

        expect(result[0].amount).toBe(20);
        expect(result[1].amount).toBe(60);
    });
});

describe('removeShare', () => {
    it('should return the original shares if no matching share is found', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
        ];

        const result = removeShare({
            shares,
            userId: '3',
            expenseAmount: 80,
        });

        expect(result).toEqual(shares);
    });

    it('should remove the matching share and re-calculate other shares', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
        ];

        const result = removeShare({
            shares,
            userId: '2',
            expenseAmount: 80,
        });

        expect(result[0].amount).toBe(80);
        expect(result.length).toBe(1);
    });
});

describe('transferShare', () => {
    it('if fromUserId does not have a share, should return the original shares', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
        ];

        const result = transferShare({
            shares,
            fromUserId: '4',
            toUserId: '2',
        });

        expect(result).toEqual(shares);
    });

    it("if fromUserId's share amount is 0, should remove the share", () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
            {
                amount: 0,
                userId: '3',
                locked: true,
            },
        ];

        const result = transferShare({
            shares,
            fromUserId: '3',
            toUserId: '2',
        });

        expect(result.length).toBe(2);
        expect(result[0].amount).toBe(40);
        expect(result[0].locked).toBe(false);
        expect(result[1].amount).toBe(40);
        expect(result[1].locked).toBe(false);
    });

    it('should work correctly when toUserId does not have a share', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
        ];

        const result = transferShare({
            shares,
            fromUserId: '2',
            toUserId: '3',
        });

        expect(result[0].amount).toBe(40);
        expect(result[1].amount).toBe(40);
        expect(result[1].userId).toBe('3');
    });

    it('should work correctly when both fromUserId and toUserId have shares', () => {
        const shares: PartialExpenseShare[] = [
            {
                amount: 40,
                userId: '1',
                locked: false,
            },
            {
                amount: 40,
                userId: '2',
                locked: false,
            },
            {
                amount: 100,
                userId: '3',
                locked: false,
            },
        ];

        const result = transferShare({
            shares,
            fromUserId: '2',
            toUserId: '3',
        });

        expect(result.length).toBe(2);
        expect(result[0].amount).toBe(40);
        expect(result[1].amount).toBe(140);
        expect(result[1].userId).toBe('3');
        expect(result[1].locked).toBe(true);
    });
});
