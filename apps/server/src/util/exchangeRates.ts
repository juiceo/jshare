import dayjs from 'dayjs';
import { z } from 'zod';

import { BASE_EXCHANGE_RATES } from '@jshare/common';
import { DB, zDB } from '@jshare/db';

import { db } from '../services/db';

export const getLatestExchangeRates = async (args: {
    requiredCurrencies?: DB.CurrencyCode[];
}): Promise<DB.ExchangeRates> => {
    /**
     * TODO: Caching for the database call - no need to always query the database since this data never changes
     */
    const latestRates = await db.exchangeRates
        .findFirst({
            orderBy: {
                createdAt: 'desc',
            },
        })
        .then((res) => res as DB.ExchangeRates | null);

    if (latestRates && dayjs(latestRates.createdAt).isAfter(dayjs().subtract(1, 'day')))
        return {
            ...latestRates,
            rates: {
                ...BASE_EXCHANGE_RATES.rates,
                ...latestRates.rates,
            },
        };

    const newRates = await fetchExchangeRates();
    return db.exchangeRates
        .create({
            data: {
                baseCurrency: 'USD',
                rates: {
                    ...BASE_EXCHANGE_RATES.rates,
                    ...latestRates?.rates,
                    ...newRates,
                },
            },
        })
        .then((res) => res as DB.ExchangeRates);
};

const fetchExchangeRates = async (): Promise<Partial<DB.ExchangeRatesObject>> => {
    const API_KEY = process.env.CURRENCY_FREAKS_API_KEY;
    if (!API_KEY) {
        console.warn("Currency Freaks API key is missing. Exchange rates won't be updated.");
        return {};
    }
    try {
        const rates = await fetch(
            `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}&base=USD&symbols=${Object.values(DB.CurrencyCode).join(',')}`
        );

        const data = await rates.json();

        return z.record(zDB.enums.CurrencyCodeSchema, z.coerce.number()).parse(data.rates);
    } catch (err: any) {
        console.error('Error fetching exchange rates: ' + err.message);
        return {};
    }
};
