import { CURRENCIES } from './currencies';
import { CurrencyCode, CurrencyDetails } from './types';

export const asMinorUnits = (majorUnits: number): number => {
	return isNaN(majorUnits) ? 0 : Math.round(majorUnits * 100);
};

export const asMajorUnits = (minorUnits: number): string => {
	return isNaN(minorUnits) ? '0' : (minorUnits / 100).toFixed(2);
};

export const getCurrencyDetails = (
	currencyCode: CurrencyCode,
): CurrencyDetails => {
	return (
		CURRENCIES[currencyCode] ?? {
			code: currencyCode,
			name: currencyCode,
			symbol: currencyCode,
			symbolPosition: 'after',
			symbolSpacing: true,
		}
	);
};

export const getCurrencySymbol = (currencyCode: CurrencyCode): string => {
	const currencyDetails = getCurrencyDetails(currencyCode);
	return currencyDetails?.symbol ?? currencyCode;
};

export const formatAmount = (
	minorUnits: number,
	currency: CurrencyCode,
): string => {
	const currencyDetails = getCurrencyDetails(currency);
	const amount = asMajorUnits(minorUnits);
	if (!currencyDetails) {
		return `${amount}${currency}`;
	} else {
		const spacing = currencyDetails.symbolSpacing ? ' ' : '';
		const symbol = currencyDetails.symbol ?? currency;
		switch (currencyDetails.symbolPosition) {
			case 'before':
				return `${symbol}${spacing}${amount}`;
			case 'after':
			default:
				return `${amount}${spacing}${symbol}`;
		}
	}
};
