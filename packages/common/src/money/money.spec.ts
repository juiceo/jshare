import { describe, expect, it } from 'vitest';

import type { DB } from '@jshare/types';

import { getExchangeRate } from './utils';

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
        expect(getExchangeRate('USD', 'AUD', exchangeRates)).toBe(1.6184215461333);
    });

    it('should return the correct exchange rate when toCurrency is the base currency', () => {
        expect(getExchangeRate('CAD', 'USD', exchangeRates)).toBeCloseTo(1 / 1.4413181049844);
    });

    it('should return the correct exchange rate when neither currency is the base currency', () => {
        expect(getExchangeRate('AUD', 'CAD', exchangeRates)).toBeCloseTo(
            1.6184215461333 / 1.4413181049844
        );
    });
});
