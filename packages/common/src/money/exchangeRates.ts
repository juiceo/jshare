import { z } from 'zod';

import { zDB, type DB } from '@jshare/db';

export const BASE_EXCHANGE_RATES_ID = 'base_exchange_rates';

export const zRatesObject = z.record(zDB.enums.CurrencyCodeSchema, z.number());
export type RatesObject = z.infer<typeof zRatesObject>;

const BASE_RATES: Record<DB.CurrencyCode, number> = {
    AED: 3.67295,
    ARS: 1053.88,
    AUD: 1.59147,
    BRL: 5.8044,
    CAD: 1.4317,
    CHF: 0.9015,
    CLP: 971.44,
    COP: 4175.22,
    CZK: 24.2124,
    DKK: 7.17396,
    EGP: 50.3207,
    EUR: 0.96165,
    GBP: 0.799872,
    HUF: 390.646,
    INR: 87.3347,
    KES: 129.1,
    KZT: 517.06,
    KGS: 87.35,
    MAD: 10.0172,
    MXN: 20.5791,
    NOK: 11.2272,
    PEN: 3.716,
    PLN: 4.04055,
    RON: 4.78517,
    SEK: 10.9108,
    THB: 33.5975,
    TZS: 2545.0,
    USD: 1,
    ZAR: 18.5472,
};

export const BASE_EXCHANGE_RATES: DB.ExchangeRates & { rates: RatesObject } = {
    id: BASE_EXCHANGE_RATES_ID,
    baseCurrency: 'USD',
    rates: BASE_RATES,
    createdAt: new Date('2025-02-06T10:55:01+0000'),
    updatedAt: new Date('2025-02-06T10:55:01+0000'),
};
