import { CurrencyCode } from './types';

export const formatAmount = (cents: number, currency: CurrencyCode) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100);
};
