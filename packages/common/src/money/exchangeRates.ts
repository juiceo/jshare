import { z } from 'zod';

import type { CurrencyCode, ExchangeRates } from '@jshare/db/models';
import { enums } from '@jshare/db/zod';

export const BASE_EXCHANGE_RATES_ID = 'base_exchange_rates';

export const zRatesObject = z.record(enums.CurrencyCodeSchema, z.number());
export type RatesObject = z.infer<typeof zRatesObject>;

const BASE_RATES: Record<CurrencyCode, number> = {
    AED: 3.6743934438349,
    ARS: 1036.7437416522,
    AUD: 1.6184215461333,
    BRL: 6.080608973613,
    CAD: 1.4413181049844,
    CHF: 0.91411242745021,
    CLP: 1007.1431618158,
    COP: 4331.978756931,
    CZK: 24.350890350955,
    DKK: 7.2407579053779,
    EGP: 50.562456059929,
    EUR: 0.97202586842501,
    GBP: 0.81401213209574,
    HUF: 401.46387728718,
    INR: 86.016321653756,
    KES: 129.42449534161,
    MAD: 10.070450814975,
    MXN: 20.585236029141,
    NOK: 11.43429743831,
    PEN: 3.7661199706754,
    PLN: 4.1401395680079,
    RON: 4.8267946210073,
    SEK: 11.177811436505,
    THB: 34.602460081779,
    TZS: 2483.0208656832,
    USD: 1,
    ZAR: 19.067696017005,
};

export const BASE_EXCHANGE_RATES: ExchangeRates & { rates: RatesObject } = {
    id: BASE_EXCHANGE_RATES_ID,
    baseCurrency: 'USD',
    rates: BASE_RATES,
    createdAt: new Date('2025-01-11T10:55:01+0000'),
    updatedAt: new Date('2025-01-11T10:55:01+0000'),
};
