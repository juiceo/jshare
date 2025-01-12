import { sortBy } from 'lodash';

import {
    CURRENCIES,
    CURRENCY_CODES,
    CurrencyCode,
    type ConversionDetails,
    type DB,
} from '@jshare/types';

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

export const convertAmount = (args: {
    amount: number;
    from: string;
    to: string;
    exchangeRates: DB.ExchangeRates;
}): number => {
    const rate = getExchangeRate(args);
    if (!rate) return 0;
    return Math.round(args.amount * rate);
};

export const getExchangeRate = (args: {
    from: string;
    to: string;
    exchangeRates: DB.ExchangeRates;
}): number => {
    const { from, to, exchangeRates } = args;

    if (from === to) return 1;
    const baseCurrency = exchangeRates.baseCurrency;
    const rates = exchangeRates.rates as Record<string, number>;
    if (baseCurrency === from) {
        if (!rates[to]) {
            return 0;
        }
        return rates[to];
    }
    if (baseCurrency === to) {
        if (!rates[from]) {
            return 0;
        }
        return 1 / rates[from];
    }

    if (rates[from] && rates[to]) {
        return rates[from] / rates[to];
    }

    return 0;
};

export const getConversionDetails = (args: {
    sourceCurrency: string;
    sourceAmount: number;
    currency: string;
    exchangeRates: DB.ExchangeRates;
}): ConversionDetails => {
    return {
        sourceCurrency: args.sourceCurrency,
        sourceAmount: args.sourceAmount,
        currency: args.currency,
        amount: convertAmount({
            amount: args.sourceAmount,
            from: args.sourceCurrency,
            to: args.currency,
            exchangeRates: args.exchangeRates,
        }),
        exchangeRate: getExchangeRate({
            from: args.sourceCurrency,
            to: args.currency,
            exchangeRates: args.exchangeRates,
        }),
        exchangeRatesId: args.exchangeRates.id,
    };
};
