import { sortBy } from 'lodash';

import { zDB, type DB } from '@jshare/db';

import { CURRENCY_DETAILS, type CurrencyDetails } from './currencyDetails';

export const SORTED_CURRENCIES: CurrencyDetails[] = sortBy(
    Object.values(CURRENCY_DETAILS),
    (item) => item.ranking ?? Infinity
);

export const formatAmount = (cents: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
    }).format(cents / 100);
};

export const isCurrencyCode = (currency: string): currency is DB.CurrencyCode => {
    return zDB.enums.CurrencyCodeSchema.safeParse(currency).success;
};

export const getCurrencyDetails = (currency: DB.CurrencyCode): CurrencyDetails => {
    return CURRENCY_DETAILS[currency];
};

export const convertAmount = (args: {
    amount: number;
    from: DB.CurrencyCode;
    to: DB.CurrencyCode;
    exchangeRates: DB.ExchangeRates;
}): number => {
    const rate = getExchangeRate(args);
    if (!rate) return 0;
    return Math.round(args.amount * rate);
};

export const getExchangeRate = (args: {
    from: DB.CurrencyCode;
    to: DB.CurrencyCode;
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
        return rates[to] / rates[from];
    }

    return 0;
};

export const getConversionDetails = (args: {
    sourceCurrency: DB.CurrencyCode;
    sourceAmount: number;
    currency: DB.CurrencyCode;
    exchangeRates: DB.ExchangeRates;
}): DB.CurrencyConversion => {
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

export const getInCurrency = (
    data: { amount: number; currency: DB.CurrencyCode; conversion: DB.CurrencyConversion | null },
    currency: string
): number | null => {
    if (data.currency === currency) return data.amount;
    if (data.conversion?.currency === currency) return data.conversion.amount;

    return null;
};

export const sumInCurrency = (
    data: { amount: number; currency: DB.CurrencyCode; conversion: DB.CurrencyConversion | null }[],
    currency: string
): number => {
    return data.reduce((result, item) => {
        const amount = getInCurrency(item, currency);
        if (amount === null) return result;
        return result + amount;
    }, 0);
};
