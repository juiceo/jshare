import React from 'react';

import {
	NumberInput,
	NumberInputField,
	NumberInputProps,
} from '@chakra-ui/react';

import { asMajorUnits, asMinorUnits } from '@/utils/money';

interface Props extends Omit<NumberInputProps, 'onChange' | 'value'> {
	initialValue: number;
	onChange: (value: number) => void;
	currencySymbol: string;
}

const MoneyInput = (props: Props) => {
	const { initialValue, onChange, currencySymbol, ...numberInputProps } =
		props;
	const [inputValue, setInputValue] = React.useState<string>(
		asMajorUnits(initialValue),
	);

	const format = (value: string) => currencySymbol + value;
	const parse = (value: string) => value.replace(currencySymbol, '');

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
