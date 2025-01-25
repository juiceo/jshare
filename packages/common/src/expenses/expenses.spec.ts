import { sumBy } from 'lodash';
import { describe, expect, it } from 'vitest';

import { DB } from '@jshare/db';

import { BASE_EXCHANGE_RATES } from '../money';
import { convertExpense, isValidExpense } from './util';

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
