import { CurrencyCode, CurrencyDetails } from './types';

export const CURRENCIES: Record<CurrencyCode, CurrencyDetails> = {
	USD: {
		code: 'USD',
		name: 'United States dollar',
		symbol: '$',
		symbolPosition: 'before',
		symbolSpacing: false,
	},
	EUR: {
		code: 'EUR',
		symbol: '€',
		name: 'Euro',
		symbolPosition: 'before',
		symbolSpacing: false,
	},
	GBP: {
		code: 'GBP',
		symbol: '£',
		name: 'Pound sterling',
		symbolPosition: 'before',
		symbolSpacing: false,
	},
	CHF: {
		code: 'CHF',
		symbol: 'Fr.',
		name: 'Swiss franc',
		symbolPosition: 'after',
		symbolSpacing: true,
	},
};
