import { describe, expect, it } from 'vitest';

import type { DB } from '@jshare/db';

import { BASE_EXCHANGE_RATES } from './exchangeRates';
import { convertAmount, getExchangeRate } from './utils';

describe('getExchangeRate', () => {
    const exchangeRates: DB.ExchangeRates = {
        id: 'base',
        baseCurrency: 'USD',
        rates: {
            ...BASE_EXCHANGE_RATES.rates,
            AUD: 1.6184215461333,
            CAD: 1.4413181049844,
            KZT: 517.39,
        },
        createdAt: new Date('2025-01-11T10:55:01+0000'),
        updatedAt: new Date('2025-01-11T10:55:01+0000'),
        archived: false,
    };
    it('should return the correct exchange rate when fromCurrency is the base currency', () => {
        expect(getExchangeRate({ from: 'USD', to: 'AUD', exchangeRates })).toBe(1.6184215461333);
        expect(getExchangeRate({ from: 'USD', to: 'KZT', exchangeRates })).toBe(517.39);
    });

    it('should return the correct exchange rate when toCurrency is the base currency', () => {
        expect(getExchangeRate({ from: 'CAD', to: 'USD', exchangeRates })).toBeCloseTo(
            1 / 1.4413181049844
        );
        expect(getExchangeRate({ from: 'KZT', to: 'USD', exchangeRates })).toBeCloseTo(1 / 517.39);
    });

    it('should return the correct exchange rate when neither currency is the base currency', () => {
        expect(getExchangeRate({ from: 'AUD', to: 'CAD', exchangeRates })).toBeCloseTo(
            1.4413181049844 / 1.6184215461333
        );
    });
});

describe('convertAmount', () => {
    const exchangeRates = {
        id: 'base',
        baseCurrency: 'USD',
        rates: {
            ...BASE_EXCHANGE_RATES.rates,
            EUR: 0.9,
            AUD: 1.6184215461333,
            CAD: 1.4413181049844,
            KZT: 517.39,
        },
        createdAt: new Date('2025-01-11T10:55:01+0000'),
        updatedAt: new Date('2025-01-11T10:55:01+0000'),
        archived: false,
    };

    it('should return the original amount if both currencies are the same', () => {
        expect(convertAmount({ amount: 100, from: 'USD', to: 'USD', exchangeRates })).toBe(100);
    });

    it('should correctly convert from base currency to other currency', () => {
        expect(convertAmount({ amount: 100, from: 'USD', to: 'CAD', exchangeRates })).toBe(144);
        expect(convertAmount({ amount: 100, from: 'USD', to: 'KZT', exchangeRates })).toBe(51739);
    });

    it('should correctly convert from other currency to base currency', () => {
        expect(convertAmount({ amount: 100, from: 'CAD', to: 'USD', exchangeRates })).toBe(69);
        expect(convertAmount({ amount: 51739, from: 'KZT', to: 'USD', exchangeRates })).toBe(100);
    });

    it('should correctly convert between two non-base currencies', () => {
        expect(convertAmount({ amount: 100_00, from: 'AUD', to: 'CAD', exchangeRates })).toBe(
            89_06
        );
        expect(convertAmount({ amount: 500_00, from: 'KZT', to: 'EUR', exchangeRates })).toBe(87);
    });

    it("should return 0 if the exchange rate can't be found", () => {
        expect(
            convertAmount({ amount: 100, from: 'EUR', to: 'asdasd' as any, exchangeRates })
        ).toBe(0);
    });
});
