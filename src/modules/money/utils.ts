import { CURRENCIES } from './currencies';
import { CurrencyCode, CurrencyDetails } from './types';

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
			decimalSeparator: ',',
			thousandSeparator: '.',
		}
	);
};

export const getCurrencySymbol = (currencyCode: CurrencyCode): string => {
	const currencyDetails = getCurrencyDetails(currencyCode);
	return currencyDetails?.symbol ?? currencyCode;
};
