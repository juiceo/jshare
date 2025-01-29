import { z } from 'zod';

import { BASE_EXCHANGE_RATES } from '@jshare/common';
import { DB, zDB } from '@jshare/db';

import { db } from '../services/db';

export const getLatestExchangeRates = async (): Promise<DB.ExchangeRates> => {
    /**
     * TODO: Caching for the database call - no need to always query the database since this data never changes
     */
    const dbRates = await db.exchangeRates
        .findFirst({
            where: {
                createdAt: {
                    gte: new Date(Date.now() - 1000 * 60 * 60 * 24),
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        })
        .then((res) => res as DB.ExchangeRates | null);

    if (dbRates) return dbRates;

    const latestRates = await fetchExchangeRates();
    const rates = await db.exchangeRates.create({
        data: {
            baseCurrency: 'USD',
            rates: {
                ...BASE_EXCHANGE_RATES.rates,
                ...latestRates,
            },
        },
    });

    return rates as DB.ExchangeRates;
};

const fetchExchangeRates = async (): Promise<Partial<DB.ExchangeRatesObject>> => {
    console.log('FETCHING EXCHANGE RATES...');

    const API_KEY = process.env.CURRENCY_FREAKS_API_KEY;
    if (!API_KEY) {
        console.warn("Currency Freaks API key is missing. Exchange rates won't be updated.");
        return {};
    }
    const rates = await fetch(
        `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}&base=USD&symbols=${Object.values(DB.CurrencyCode).join(',')}`
    );

    const data = await rates.json();

    return z.record(zDB.enums.CurrencyCodeSchema, z.coerce.number()).parse(data.rates);
};
