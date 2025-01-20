import { BASE_EXCHANGE_RATES } from '@jshare/common';
import type { DB } from '@jshare/db';

import { db } from '../services/db';

export const getLatestExchangeRates = async (): Promise<DB.ExchangeRates> => {
    return db.exchangeRates
        .findFirst({
            orderBy: {
                createdAt: 'desc',
            },
        })
        .then((res) => (res as DB.ExchangeRates) ?? BASE_EXCHANGE_RATES);
};
