import { describe, expect, it } from 'vitest';

import type { DB } from '@jshare/types';

import { convertAmount, getExchangeRate } from './utils';

describe('getExchangeRate', () => {
    const exchangeRates: DB.ExchangeRates = {
        id: 'base',
        baseCurrency: 'USD',
        rates: {
            AUD: 1.6184215461333,
            CAD: 1.4413181049844,
        },
        createdAt: new Date('2025-01-11T10:55:01+0000'),
        updatedAt: new Date('2025-01-11T10:55:01+0000'),
    };
    it('should return the correct exchange rate when fromCurrency is the base currency', () => {
        expect(getExchangeRate({ from: 'USD', to: 'AUD', exchangeRates })).toBe(1.6184215461333);
    });

    it('should return the correct exchange rate when toCurrency is the base currency', () => {
        expect(getExchangeRate({ from: 'CAD', to: 'USD', exchangeRates })).toBeCloseTo(
            1 / 1.4413181049844
        );
    });

    it('should return the correct exchange rate when neither currency is the base currency', () => {
        expect(getExchangeRate({ from: 'AUD', to: 'CAD', exchangeRates })).toBeCloseTo(
            1.6184215461333 / 1.4413181049844
        );
    });
});

describe('convertAmount', () => {
    const exchangeRates: DB.ExchangeRates = {
        id: 'base',
        baseCurrency: 'USD',
        rates: {
            AUD: 1.6184215461333,
            CAD: 1.4413181049844,
        },
        createdAt: new Date('2025-01-11T10:55:01+0000'),
        updatedAt: new Date('2025-01-11T10:55:01+0000'),
    };

    it('should return the original amount if both currencies are the same', () => {
        expect(convertAmount({ amount: 100, from: 'USD', to: 'USD', exchangeRates })).toBe(100);
    });

    it('should correctly convert from base currency to other currency', () => {
        expect(convertAmount({ amount: 100, from: 'USD', to: 'CAD', exchangeRates })).toBe(144);
    });

    it('should correctly convert from other currency to base currency', () => {
        expect(convertAmount({ amount: 100, from: 'CAD', to: 'USD', exchangeRates })).toBe(69);
    });

    it('should correctly convert between two non-base currencies', () => {
        expect(convertAmount({ amount: 100, from: 'AUD', to: 'CAD', exchangeRates })).toBe(112);
    });

    it("should return 0 if the exchange rate can't be found", () => {
        expect(convertAmount({ amount: 100, from: 'EUR', to: 'CAD', exchangeRates })).toBe(0);
    });
});
