import { sortBy } from 'lodash';

import { CURRENCIES, CURRENCY_CODES, CurrencyCode, type DB } from '@jshare/types';

export const SUGGESTED_CURRENCIES = sortBy(
    Object.values(CURRENCIES).filter((currencyDetails) => currencyDetails.ranking !== null),
    'ranking'
);

export const OTHER_CURRENCIES = sortBy(
    Object.values(CURRENCIES).filter((currencyDetails) => currencyDetails.ranking === null),
    'name'
);

export const SORTED_CURRENCIES = [...SUGGESTED_CURRENCIES, ...OTHER_CURRENCIES];

export const formatAmount = (cents: number, currency: string) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100);
};

export const isCurrencyCode = (currency: string): currency is CurrencyCode => {
    return CURRENCY_CODES.includes(currency as any);
};

export const getCurrencyDetails = (currency: string) => {
    if (!isCurrencyCode(currency)) {
        throw new Error(`Invalid currency code: ${currency}`);
    }
    return CURRENCIES[currency];
};

export const getAmountInCurrency = (
    amount: number,
    currency: string,
    asCurrency: string,
    rates: DB.ExchangeRates
): number => {
    const exchangeRate = getExchangeRate(currency, asCurrency, rates);
    if (!exchangeRate) return 0;
    return amount * exchangeRate;
};

export const getExchangeRate = (
    fromCurrency: string,
    toCurrency: string,
    _rates: DB.ExchangeRates
): number | null => {
    if (fromCurrency === toCurrency) return 1;
    const baseCurrency = _rates.baseCurrency;
    const rates = _rates.rates as Record<string, number>;
    if (baseCurrency === fromCurrency) {
        if (!rates[toCurrency]) {
            return null;
        }
        return rates[toCurrency];
    }
    if (baseCurrency === toCurrency) {
        if (!rates[fromCurrency]) {
            return null;
        }
        return 1 / rates[fromCurrency];
    }

    if (rates[fromCurrency] && rates[toCurrency]) {
        return rates[fromCurrency] / rates[toCurrency];
    }

    return null;
};
