export const asMinorUnits = (majorUnits: number): number => {
	return isNaN(majorUnits) ? 0 : Math.round(majorUnits * 100);
};

export const asMajorUnits = (minorUnits: number): string => {
	return isNaN(minorUnits) ? '0' : (minorUnits / 100).toFixed(2);
};

export const formatAmount = (minorUnits: number, currency: string): string => {
	const currencyDetails = CURRENCIES[currency];
	const amount = asMajorUnits(minorUnits);
	if (!currencyDetails) {
		return `${amount}${currency}`;
	} else {
		switch (currencyDetails.position) {
			case 'prefix':
				return `${currencyDetails.symbol}${amount}`;
			case 'suffix':
				return `${amount}${currencyDetails.symbol}`;
			default:
				return `${amount}${currency}`;
		}
	}
};

export type CurrencyDetails = {
	symbol: string;
	position: 'prefix' | 'suffix';
};

const CURRENCIES: { [code: string]: CurrencyDetails } = {
	EUR: {
		symbol: '€',
		position: 'suffix',
	},
	USD: {
		symbol: '$',
		position: 'prefix',
	},
};
