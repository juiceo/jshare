import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import { BASE_EXCHANGE_RATES, convertAmount, getExchangeRate } from '@jshare/common';
import type { DB } from '@jshare/db';

import { useTRPC } from '~/lib/trpc';

export const useExchangeRates = (): {
    exchangeRates: DB.ExchangeRates;
    refetch: () => void;
} => {
    const trpc = useTRPC();
    const ratesQuery = useQuery(trpc.exchangeRates.latest.queryOptions());

    return {
        exchangeRates: ratesQuery.data ?? BASE_EXCHANGE_RATES,
        refetch: ratesQuery.refetch,
    };
};

export const useCurrencyConversion = () => {
    const { exchangeRates } = useExchangeRates();

    const getRate = useCallback(
        (args: { from: DB.CurrencyCode; to: DB.CurrencyCode }) => {
            const rate = getExchangeRate({
                from: args.from,
                to: args.to,
                exchangeRates,
            });
            if (!rate) return 0;
            return rate.toFixed(3);
        },
        [exchangeRates]
    );

    const convert = useCallback(
        (args: { amount: number; from: DB.CurrencyCode; to: DB.CurrencyCode }) => {
            return convertAmount({
                from: args.from,
                to: args.to,
                amount: args.amount,
                exchangeRates,
            });
        },
        [exchangeRates]
    );

    return {
        getRate,
        convert,
    };
};
