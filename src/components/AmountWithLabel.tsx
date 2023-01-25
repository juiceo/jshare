import React from 'react';

import { CircularProgress, Heading, Stack, Text } from '@chakra-ui/react';

import { CurrencyCode, formatAmount } from '@/modules/money';

interface AmountWithLabelProps {
	label: string;
	amount: number;
	currency: CurrencyCode;
	loading?: boolean;
}

const AmountWithLabel = (props: AmountWithLabelProps) => {
	const { label, amount, currency, loading } = props;
	return (
		<Stack direction="column" alignItems="center">
			{loading ? (
				<CircularProgress isIndeterminate color="green.300" />
			) : (
				<Heading fontSize="3xl">
					{formatAmount(amount, currency)}
				</Heading>
			)}
			<Text fontSize="xs">{label}</Text>
		</Stack>
	);
};

export default AmountWithLabel;
