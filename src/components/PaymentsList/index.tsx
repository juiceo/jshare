import React from 'react';

import { Avatar, Card, CardBody, Divider, Stack, Text } from '@chakra-ui/react';
import { Payment, User } from '@prisma/client';

import { formatAmount } from '@/modules/money';
import { getUserDisplayName } from '@/modules/users';

interface BalanceListProps {
	payments: (Payment & { from: User; to: User })[];
}

const PaymentsList = (props: BalanceListProps) => {
	const { payments } = props;

	return (
		<Card background="white">
			<Stack divider={<Divider />} spacing={0}>
				{payments.map((payment) => (
					<CardBody key={payment.id}>
						<Stack direction="row" alignItems="center" spacing="4">
							<Avatar size="md" src={payment.from.image ?? undefined} />
							<Stack flex="1" direction="column" alignItems="flex-start" spacing={0}>
								<Text textAlign="left">{getUserDisplayName(payment.from, 'full')}</Text>
								<Text textAlign="left" fontSize="xs">
									{`Paid to ${getUserDisplayName(payment.to, 'full')}`}
								</Text>
							</Stack>
							<Text fontSize="xl" fontWeight="bold" textAlign="right">
								{formatAmount(payment.amount, payment.currency)}
							</Text>
						</Stack>
					</CardBody>
				))}
			</Stack>
		</Card>
	);
};

export default PaymentsList;
