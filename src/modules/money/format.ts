import { CurrencyCode } from '@prisma/client';
import { NumericFormatProps, numericFormatter } from 'react-number-format';

import { getCurrencyDetails } from './utils';

export const getNumericFormatProps = (
	currency: CurrencyCode,
): NumericFormatProps => {
	const currencyDetails = getCurrencyDetails(currency);

	const symbol = currencyDetails.symbol ?? currency;
	const isPrefix = currencyDetails.symbolPosition === 'before';
	const isSuffix = currencyDetails.symbolPosition === 'after';
	const spacing = currencyDetails.symbolSpacing ? ' ' : '';

	return {
		thousandSeparator: currencyDetails.thousandSeparator,
		decimalSeparator: currencyDetails.decimalSeparator,
		prefix: isPrefix ? `${symbol}${spacing}` : '',
		suffix: isSuffix ? `${spacing}${symbol}` : '',
		decimalScale: 2,
	};
};

export const asMinorUnits = (majorUnits: number): number => {
	return isNaN(majorUnits) ? 0 : Math.round(majorUnits * 100);
};

export const asMajorUnits = (minorUnits: number): string => {
	return isNaN(minorUnits) ? '0' : (minorUnits / 100).toFixed(2);
};

export const formatAmount = (
	minorUnits: number,
	currency: CurrencyCode,
): string => {
	const majorUnits = asMajorUnits(minorUnits);
	return numericFormatter(majorUnits, getNumericFormatProps(currency));
};
