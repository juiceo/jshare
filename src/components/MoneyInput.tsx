import React, { useMemo, useState } from 'react';

import { Input, InputProps } from '@chakra-ui/react';
import { CurrencyCode } from '@prisma/client';
import { NumericFormat } from 'react-number-format';

import { asMinorUnits } from '@/modules/money';
import { formatAmount, getNumericFormatProps } from '@/modules/money/format';

interface Props extends Omit<InputProps, 'onChange' | 'value'> {
	initialValue: number;
	onChange: (value: number) => void;
	currency: CurrencyCode;
}

const MoneyInput = (props: Props) => {
	const { initialValue, onChange, currency, ...inputProps } = props;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const handleValueChange = ({ floatValue }: { floatValue: number }) => {
		onChange(asMinorUnits(floatValue));
	};

	const numericFormatProps = useMemo(() => {
		return getNumericFormatProps(currency);
	}, [currency]);

	const [inputValue, setInputValue] = useState<string>(
		formatAmount(initialValue, currency),
	);

	return (
		<Input
			as={NumericFormat}
			value={inputValue}
			onChange={handleChange}
			onValueChange={handleValueChange}
			placeholder="Amount"
			textAlign="center"
			allowNegative={false}
			maxLength={20}
			{...(numericFormatProps as any)}
			{...inputProps}
		/>
	);
};

export default MoneyInput;
