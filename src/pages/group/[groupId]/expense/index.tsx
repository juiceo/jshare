import React, { useEffect, useState } from 'react';

import { Button, Input, Stack, Text } from '@chakra-ui/react';
import { isEmpty, sum, sumBy } from 'lodash';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';
import { useRouter } from 'next/router';

import AppBar from '@/components/AppBar';
import ExpensePayerSelect from '@/components/ExpensePayerSelect';
import ExpenseSharesList from '@/components/ExpenseSharesList';
import Layout from '@/components/Layout';
import MoneyInput from '@/components/MoneyInput';
import Page from '@/components/Page';
import { formatAmount } from '@/modules/money';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Routes } from '@/routing';
import { GroupWithMembers } from '@/schemas/group';
import { appRouter } from '@/server/routers/_app';
import {
	ExpenseShareByMember,
	getAmountByMember,
	getInitialExpenseShares,
} from '@/utils/expenses';
import { getAllGroupMembers } from '@/utils/groups';
import { trpc } from '@/utils/trpc';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const CreateExpensePage = (props: Props) => {
	const { group, session } = props;
	const { userId } = session;
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
		console.log('SHARES', shares);
		console.log('AMOUNT EDITED', amountEdited);
		setShares(shares);
		if (!amountEdited) {
			const sum = sumBy(
				Object.values(shares),
				(share) => share.amount ?? 0,
			);
			console.log('SUM', sum);
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
		<Page
			title="New Expense"
			appBar={
				<AppBar
					heading="New Expense"
					backTo={Routes.Group(group.id)}
					variant="transparent"
				/>
			}
			footer={
				<Layout max="md" noMargin py="2" bg="theme.pageBackground">
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
				</Layout>
			}
		>
			<Layout max="md">
				<ExpensePayerSelect
					group={group}
					payerId={payerId}
					onPayerIdChange={setPayerId}
				/>

				<Stack direction="column" spacing={1}>
					<MoneyInput
						key={amountKey}
						initialValue={amount}
						onChange={handleAmountChange}
						currency={group.currency}
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
						currency={group.currency}
						onChange={handleSharesChange}
						members={allMembers}
						total={amount || 0}
						amountByMember={amountByMember}
					/>
				</Stack>
			</Layout>
		</Page>
	);
};

const CreateExpensePageWrapper = (props: Props) => {
	if (isEmpty(props)) return null;
	return <CreateExpensePage {...props} />;
};

export const getServerSideProps: GetServerSideProps<
	{
		group: GroupWithMembers;
		session: Session;
	},
	{
		groupId: string;
	}
> = async (ctx) => {
	try {
		const session = await unstable_getServerSession(
			ctx.req,
			ctx.res,
			authOptions,
		);

		if (!session || !ctx.params?.groupId) {
			return {
				notFound: true,
			};
		}

		const group = await appRouter
			.createCaller({ session })
			.groups.getByGroupId(ctx.params.groupId);

		if (!group) {
			return {
				notFound: true,
			};
		}

		return {
			props: {
				group,
				session,
			},
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
};

export default CreateExpensePageWrapper;
