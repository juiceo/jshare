import { sortBy } from 'lodash';

import { CURRENCIES, CURRENCY_CODES, CurrencyCode } from '@jshare/types';

export const SUGGESTED_CURRENCIES = sortBy(
    Object.values(CURRENCIES).filter((currencyDetails) => currencyDetails.ranking !== null),
    'ranking'
);

export const OTHER_CURRENCIES = sortBy(
    Object.values(CURRENCIES).filter((currencyDetails) => currencyDetails.ranking === null),
    'name'
);

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
