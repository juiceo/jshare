import React, { useState } from 'react';

import { Button, Text } from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';
import { useRouter } from 'next/router';

import AppBar from '@/components/AppBar';
import ExpenseForm, { ExpenseFormValue } from '@/components/ExpenseForm';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import { getInitialExpenseShares, validateExpenseFormValue } from '@/modules/expenses';
import { getAllGroupMembers } from '@/modules/groups';
import { GroupWithMembers } from '@/modules/groups/types';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Routes } from '@/routing';
import { appRouter } from '@/server/routers/_app';
import { trpc } from '@/services/trpc';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const CreateExpensePage = (props: Props) => {
	const { group, session } = props;
	const { userId } = session;
	const router = useRouter();

	const createExpense = trpc.expenses.create.useMutation();
	const allMembers = getAllGroupMembers(group);

	const [expense, setExpense] = useState<ExpenseFormValue>({
		payerId: userId,
		amount: 0,
		title: '',
		shares: getInitialExpenseShares(allMembers),
	});

	const handleCreateExpense = async (groupId: string) => {
		if (!expense.amount) return;

		await createExpense.mutateAsync({
			groupId,
			payerId: expense.payerId,
			title: expense.title,
			amount: expense.amount,
			shares: expense.shares,
			currency: group.currency,
		});

		router.push(Routes.Group(groupId));
	};

	const validation = validateExpenseFormValue(expense, group.currency);

	return (
		<Page
			title="New Expense"
			appBar={<AppBar heading="New Expense" backTo={Routes.Group(group.id)} />}
			footer={
				<Layout max="md" noMargin py="2">
					{validation.message && (
						<Text color="red.500" mb="2" fontSize="xs" textAlign="center" fontWeight="bold">
							{validation.message}
						</Text>
					)}

					<Button
						colorScheme="green"
						width="full"
						borderRadius="2xl"
						isLoading={createExpense.isLoading}
						disabled={!validation.valid}
						onClick={() => handleCreateExpense(group.id)}
					>
						Create
					</Button>
				</Layout>
			}
		>
			<Layout max="md">
				<ExpenseForm value={expense} onChange={setExpense} currency={group.currency} members={allMembers} />
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
		const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
		const { groupId } = ctx.params ?? {};

		if (!session || !groupId) {
			return {
				notFound: true,
			};
		}

		const group = await appRouter.createCaller({ session }).groups.getById({ groupId });

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
