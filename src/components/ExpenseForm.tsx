import React, { useState } from 'react';

import { Box, Button, IconButton, Input, Stack, Text } from '@chakra-ui/react';
import { sum } from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftLine } from 'react-icons/ri';

import ExpensePayerSelect from '@/components/ExpensePayerSelect';
import ExpenseSharesList from '@/components/ExpenseSharesList';
import MoneyInput from '@/components/MoneyInput';
import { Routes } from '@/routing';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import { GroupWithMembers } from '@/schemas/group';
import {
	ExpenseShareByMember,
	getAmountByMember,
	getExpenseSharesByMember,
	getInitialExpenseShares,
} from '@/utils/expenses';
import { getAllGroupMembers } from '@/utils/groups';
import { formatAmount } from '@/utils/money';
import { trpc } from '@/utils/trpc';

type Props = {
	group: GroupWithMembers;
	expense: ExpenseWithSenderAndShares | null;
	userId: string;
};

const ExpenseForm = (props: Props) => {
	const { group, expense, userId } = props;
	const router = useRouter();

	const createExpense = trpc.expenses.create.useMutation();
	const allMembers = getAllGroupMembers(group);

	const [payerId, setPayerId] = useState<string>(expense?.payerId ?? userId);
	const [title, setTitle] = useState<string>(expense?.title ?? '');
	const [amount, setAmount] = useState<number>(expense?.amount ?? 0);

	const [shares, setShares] = useState<ExpenseShareByMember>(
		expense?.shares
			? getExpenseSharesByMember(expense.shares)
			: getInitialExpenseShares(allMembers),
	);

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleCreateExpense = async (groupId: string) => {
		if (!amount) return;

		await createExpense.mutateAsync({
			groupId,
			payerId,
			title,
			amount,
			currency: 'EUR',
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

	return (
		<Box
			height="100%"
			display="flex"
			flexDirection="column"
			overflow="auto"
		>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				p="3"
				background="white"
			>
				<Box width={50}>
					<Link href={Routes.Group(group.id)}>
						<IconButton aria-label="Back" variant="ghost">
							<RiArrowLeftLine size={24} />
						</IconButton>
					</Link>
				</Box>
				<Text fontSize="xl">Add expense</Text>
				<Box width={50}></Box>
			</Stack>
			<Box flex={1} overflow="auto" p="2">
				<Box>
					<ExpensePayerSelect
						group={group}
						payerId={payerId}
						onPayerIdChange={setPayerId}
					/>
					<Stack
						direction="column"
						alignItems="center"
						maxWidth="600px"
						margin="0 auto"
					>
						<MoneyInput
							initialValue={amount}
							onChange={setAmount}
							currencySymbol="€"
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
							value={shares}
							onChange={setShares}
							members={allMembers}
							total={amount || 0}
							amountByMember={amountByMember}
						/>
					</Stack>
				</Box>
			</Box>

			<Box
				background="gray.200"
				padding="2"
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				{difference !== 0 && (
					<Text color="red" mb="2" fontSize="xs">
						{difference < 0
							? `${formatAmount(
									difference * -1,
									'€',
							  )} too much assigned`
							: `${formatAmount(
									difference,
									'€',
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
			</Box>
		</Box>
	);
};

export default ExpenseForm;
