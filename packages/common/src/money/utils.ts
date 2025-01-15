import { sortBy } from 'lodash';

import { CurrencyConversion, ExchangeRates, type CurrencyCode } from '@jshare/db/models';
import { enums } from '@jshare/db/zod';

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

export const isCurrencyCode = (currency: string): currency is CurrencyCode => {
    return enums.CurrencyCodeSchema.safeParse(currency).success;
};

export const getCurrencyDetails = (currency: CurrencyCode): CurrencyDetails => {
    return CURRENCY_DETAILS[currency];
};

export const convertAmount = (args: {
    amount: number;
    from: string;
    to: string;
    exchangeRates: ExchangeRates;
}): number => {
    const rate = getExchangeRate(args);
    if (!rate) return 0;
    return Math.round(args.amount * rate);
};

export const getExchangeRate = (args: {
    from: string;
    to: string;
    exchangeRates: ExchangeRates;
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
    sourceCurrency: CurrencyCode;
    sourceAmount: number;
    currency: CurrencyCode;
    exchangeRates: ExchangeRates;
}): CurrencyConversion => {
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
    data: { amount: number; currency: CurrencyCode; conversion: CurrencyConversion | null },
    currency: string
): number | null => {
    if (data.currency === currency) return data.amount;
    if (data.conversion?.currency === currency) return data.conversion.amount;

    return null;
};

export const sumInCurrency = (
    data: { amount: number; currency: CurrencyCode; conversion: CurrencyConversion | null }[],
    currency: string
): number => {
    return data.reduce((result, item) => {
        const amount = getInCurrency(item, currency);
        if (amount === null) return result;
        return result + amount;
    }, 0);
};
