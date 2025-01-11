import { z } from 'zod';

import { CURRENCIES, CURRENCY_CODES } from './currencies';

export type CurrencyDetails = (typeof CURRENCIES)[CurrencyCode];
export type CurrencyCode = keyof typeof CURRENCIES;
export const zCurrencyCode = z.custom<string>((value) => CURRENCY_CODES.includes(value));
