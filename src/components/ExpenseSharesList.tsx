import React from 'react';

import { Card, Divider, Stack } from '@chakra-ui/react';
import { CurrencyCode, User } from '@prisma/client';
import { omit } from 'lodash';

import { ByUserId } from '@/modules/common/types';
import { ExpenseShare } from '@/modules/expenses';

import ExpenseSharesListItem from './ExpenseSharesListItem';

interface Props {
	value: ByUserId<ExpenseShare>;
	onChange: (value: ByUserId<ExpenseShare>) => void;
	total: number;
	members: User[];
	amountByMember: Record<string, number>;
	currency: CurrencyCode;
}

const ExpenseSharesList = (props: Props) => {
	const { value, onChange, total, members, amountByMember, currency } = props;

	const handleMemberToggle = (memberId: string, enabled: boolean) => {
		onChange({
			...value,
			[memberId]: {
				...value[memberId],
				enabled,
			},
		});
	};

	const handleMemberAmountChange = (memberId: string, amount: number) => {
		onChange({
			...value,
			[memberId]: {
				...value[memberId],
				enabled: true,
				amount,
			},
		});
	};

	const handleMemberUnlock = (memberId: string) => {
		onChange({
			...value,
			[memberId]: {
				...omit(value[memberId], 'amount'),
				enabled: true,
			},
		});
	};

	return (
		<Card variant="outline">
			<Stack
				direction="column"
				background="white"
				borderRadius="lg"
				width="full"
				spacing={0}
				divider={<Divider />}
			>
				{members.map((member) => {
					return (
						<ExpenseSharesListItem
							currency={currency}
							key={member.id}
							user={member}
							amount={amountByMember[member.id] ?? 0}
							total={total}
							enabled={value[member.id]?.enabled ?? false}
							onToggle={(enabled) =>
								handleMemberToggle(member.id, enabled)
							}
							onAmountChange={(amount) =>
								handleMemberAmountChange(member.id, amount)
							}
							onUnlock={() => handleMemberUnlock(member.id)}
							locked={value[member.id]?.amount != null}
						/>
					);
				})}
			</Stack>
		</Card>
	);
};

export default ExpenseSharesList;
