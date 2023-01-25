import React from 'react';

import {
	NumberInput,
	NumberInputField,
	NumberInputProps,
} from '@chakra-ui/react';
import { CurrencyCode } from '@prisma/client';

import {
	asMajorUnits,
	asMinorUnits,
	getCurrencyDetails,
} from '@/modules/money';

interface Props extends Omit<NumberInputProps, 'onChange' | 'value'> {
	initialValue: number;
	onChange: (value: number) => void;
	currency: CurrencyCode;
}

const MoneyInput = (props: Props) => {
	const { initialValue, onChange, currency, ...numberInputProps } = props;
	const [inputValue, setInputValue] = React.useState<string>(
		asMajorUnits(initialValue),
	);
	const currencyDetails = getCurrencyDetails(currency);
	const symbol = currencyDetails.symbol;

	const format = (value: string) => {
		return `${symbol}${value}`;
	};
	const parse = (value: string) => value.replace(symbol, '');

	const handleValueChange = (valueString: string, valueNumber: number) => {
		setInputValue(parse(valueString));
		onChange(asMinorUnits(valueNumber));
	};

	return (
		<NumberInput
			onChange={handleValueChange}
			value={format(inputValue)}
			precision={2}
			min={0}
			{...numberInputProps}
		>
			<NumberInputField textAlign="center" />
		</NumberInput>
	);
};

export default MoneyInput;
