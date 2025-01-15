import { useCallback } from 'react';

import { BASE_EXCHANGE_RATES, convertAmount, getExchangeRate } from '@jshare/common';
import type { DB } from '@jshare/db';

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
        (args: { from: string; to: string }) => {
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
        (args: { amount: number; from: string; to: string }) => {
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
