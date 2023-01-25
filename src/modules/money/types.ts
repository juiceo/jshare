import { z } from 'zod';

export const zCurrencyCode = z.enum(['USD', 'EUR', 'CHF', 'GBP']);

export const zCurrencyDetails = z.object({
	code: zCurrencyCode,
	name: z.string(),
	symbol: z.string(),
	symbolPosition: z.enum(['before', 'after']),
	symbolSpacing: z.boolean(),
});

export type CurrencyDetails = z.infer<typeof zCurrencyDetails>;
export type CurrencyCode = z.infer<typeof zCurrencyCode>;
