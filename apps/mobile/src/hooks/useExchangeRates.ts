import { useCallback } from 'react';

import { BASE_EXCHANGE_RATES, getExchangeRate } from '@jshare/common';
import type { DB } from '@jshare/types';

import { trpc } from '~/services/trpc';

export const useExchangeRates = (): {
    exchangeRates: DB.ExchangeRates;
    refetch: () => void;
} => {
    const ratesQuery = trpc.exchangeRates.latest.useQuery();

    return {
        exchangeRates: ratesQuery.data ?? BASE_EXCHANGE_RATES,
        refetch: ratesQuery.refetch,
    };
};

export const useCurrencyConversion = () => {
    const { exchangeRates } = useExchangeRates();

    const getRate = useCallback(
        (args: { fromCurrency: string; toCurrency: string }) => {
            const rate = getExchangeRate(args.fromCurrency, args.toCurrency, exchangeRates);
            if (!rate) return 0;
            return Math.round(rate);
        },
        [exchangeRates]
    );

    const getAmountInCurrency = useCallback(
        (args: { amount: number; currency: string; asCurrency: string }) => {
            const rate = getRate({
                fromCurrency: args.currency,
                toCurrency: args.asCurrency,
            });
            if (!rate) return 0;
            return Math.round(args.amount * rate);
        },
        [getRate]
    );

    return {
        getRate,
        getAmountInCurrency,
    };
};
