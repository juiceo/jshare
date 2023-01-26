import React, { useState } from 'react';

import { Button, Stack } from '@chakra-ui/react';
import { isEmpty } from 'lodash';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';

import AppBar from '@/components/AppBar';
import ExpenseForm, { ExpenseFormValue } from '@/components/ExpenseForm';
import ExpenseSummary from '@/components/ExpenseSummary';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import {
	getExpenseName,
	getExpenseSharesFromExpense,
} from '@/modules/expenses';
import { getAllGroupMembers } from '@/modules/groups';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Routes } from '@/routing';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import { GroupWithMembers } from '@/schemas/group';
import { appRouter } from '@/server/routers/_app';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const EditExpensePage = (props: Props) => {
	const { group, expense } = props;

	const allMembers = getAllGroupMembers(group);

	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [editedExpense, setEditedExpense] = useState<ExpenseFormValue>({
		payerId: expense.payerId,
		amount: expense.amount,
		title: expense.title,
		shares: getExpenseSharesFromExpense(expense),
	});

	return (
		<Page
			appBar={
				<AppBar
					heading={getExpenseName(expense)}
					backTo={Routes.Group(group.id)}
				/>
			}
			footer={
				<Layout max="md" noMargin p="4" bg="theme.pageBackground">
					{!isEditing ? (
						<Button
							width="full"
							colorScheme="green"
							onClick={() => setIsEditing(true)}
						>
							Edit expense
						</Button>
					) : (
						<Stack direction="column">
							<Button
								width="full"
								colorScheme="green"
								onClick={() => setIsEditing(false)}
							>
								Save changes
							</Button>
							<Button width="full" variant="ghost">
								Cancel
							</Button>
						</Stack>
					)}
				</Layout>
			}
		>
			<Layout max="md">
				{isEditing ? (
					<ExpenseForm
						value={editedExpense}
						onChange={setEditedExpense}
						currency={expense.currency}
						members={allMembers}
					/>
				) : (
					<ExpenseSummary expense={expense} group={group} />
				)}
			</Layout>
		</Page>
	);
};

const EditExpensePageWrapper = (props: Props) => {
	if (isEmpty(props)) return null;
	return <EditExpensePage {...props} />;
};

export const getServerSideProps: GetServerSideProps<
	{
		group: GroupWithMembers;
		expense: ExpenseWithSenderAndShares;
		session: Session;
	},
	{
		groupId: string;
		expenseId: string;
	}
> = async (ctx) => {
	try {
		const session = await unstable_getServerSession(
			ctx.req,
			ctx.res,
			authOptions,
		);

		if (!session || !ctx.params?.groupId || !ctx.params?.expenseId) {
			return {
				notFound: true,
			};
		}

		const [group, expense] = await Promise.all([
			await appRouter
				.createCaller({ session })
				.groups.getByGroupId(ctx.params.groupId),
			await appRouter
				.createCaller({ session })
				.expenses.getById(ctx.params?.expenseId),
		]);

		if (!expense || !group) {
			return {
				notFound: true,
			};
		}

		return {
			props: {
				group,
				expense,
				session,
			},
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
};

export default EditExpensePageWrapper;
