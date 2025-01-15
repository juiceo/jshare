import type { DB } from '@jshare/db';

import { db } from '../services/db';

export const getLatestExchangeRates = async () => {
    return db.exchangeRates.findFirst({
        orderBy: {
            createdAt: 'desc',
        },
    }) as Promise<DB.ExchangeRates>;
};
