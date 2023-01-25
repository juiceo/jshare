import React, { useEffect, useState } from 'react';

import { Button, Container, Input, Stack, Text } from '@chakra-ui/react';
import { sum, sumBy } from 'lodash';
import { useRouter } from 'next/router';

import ExpensePayerSelect from '@/components/ExpensePayerSelect';
import ExpenseSharesList from '@/components/ExpenseSharesList';
import MoneyInput from '@/components/MoneyInput';
import FullHeightLayout from '@/components/layouts/FullHeightLayout';
import { formatAmount } from '@/modules/money';
import { Routes } from '@/routing';
import { GroupWithMembers } from '@/schemas/group';
import {
	ExpenseShareByMember,
	getAmountByMember,
	getInitialExpenseShares,
} from '@/utils/expenses';
import { getAllGroupMembers } from '@/utils/groups';
import { trpc } from '@/utils/trpc';

type Props = {
	group: GroupWithMembers;
	userId: string;
};

const CreateExpense = (props: Props) => {
	const { group, userId } = props;
	const router = useRouter();

	const createExpense = trpc.expenses.create.useMutation();
	const allMembers = getAllGroupMembers(group);

	const [payerId, setPayerId] = useState<string>(userId);
	const [title, setTitle] = useState<string>('');
	const [amount, setAmount] = useState<number>(0);
	const [amountEdited, setAmountEdited] = useState<boolean>(false);
	const [amountKey, setAmountKey] = useState<number>(0);

	useEffect(() => {
		if (!amountEdited) {
			setAmountKey((prev) => prev + 1);
		}
	}, [amount, amountEdited]);

	const [shares, setShares] = useState<ExpenseShareByMember>(
		getInitialExpenseShares(allMembers),
	);

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleSharesChange = (shares: ExpenseShareByMember) => {
		setShares(shares);
		if (!amountEdited) {
			const sum = sumBy(
				Object.values(shares),
				(share) => share.amount ?? 0,
			);
			setAmount(sum);
		}
	};

	const handleAmountChange = (amount: number) => {
		setAmountEdited(true);
		setAmount(amount);
	};

	const handleCreateExpense = async (groupId: string) => {
		if (!amount) return;

		await createExpense.mutateAsync({
			groupId,
			payerId,
			title,
			amount,
			currency: group.currency,
			shares,
		});

		router.push(Routes.Group(groupId));
	};

	const amountByMember = getAmountByMember({
		shares,
		total: amount,
	});

	const totalAmount = sum(Object.values(amountByMember));
	const difference = amount - totalAmount;

	const canSubmit =
		!!amount &&
		difference === 0 &&
		Object.values(shares).some((s) => s.enabled);

	const renderFooter = () => {
		return (
			<Container maxW="container.sm" py="2" centerContent>
				{difference !== 0 && (
					<Text color="red" mb="2" fontSize="xs">
						{difference < 0
							? `${formatAmount(
									difference * -1,
									group.currency,
							  )} too much assigned`
							: `${formatAmount(
									difference,
									group.currency,
							  )} not assigned to anyone`}
					</Text>
				)}
				<Button
					colorScheme="green"
					width="full"
					maxWidth="600px"
					borderRadius="2xl"
					isLoading={createExpense.isLoading}
					disabled={!canSubmit}
					onClick={() => handleCreateExpense(group.id)}
				>
					Create
				</Button>
			</Container>
		);
	};

	return (
		<FullHeightLayout footer={renderFooter()}>
			<Container maxW="container.sm">
				<ExpensePayerSelect
					group={group}
					payerId={payerId}
					onPayerIdChange={setPayerId}
				/>
			</Container>

			<Container maxW="container.sm">
				<Stack direction="column" spacing={1}>
					<MoneyInput
						currency={group.currency}
						key={amountKey}
						initialValue={amount}
						onChange={handleAmountChange}
						background="white"
						width="full"
						size="lg"
						borderRadius="lg"
					/>
					<Input
						textAlign="center"
						placeholder="Add comment"
						background="white"
						size="lg"
						value={title}
						onChange={handleTitleChange}
					/>
					<ExpenseSharesList
						currency={group.currency}
						value={shares}
						onChange={handleSharesChange}
						members={allMembers}
						total={amount || 0}
						amountByMember={amountByMember}
					/>
				</Stack>
			</Container>
		</FullHeightLayout>
	);
};

export default CreateExpense;
