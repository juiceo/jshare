import { BASE_EXCHANGE_RATES } from '@jshare/common';
import type { DB } from '@jshare/types';

import { prisma } from '../services/prisma';

export const getLatestExchangeRates = async (): Promise<DB.ExchangeRates> => {
    return prisma.exchangeRates
        .findFirst({
            orderBy: {
                createdAt: 'desc',
            },
        })
        .then((res) => (res ?? BASE_EXCHANGE_RATES) as DB.ExchangeRates);
};
