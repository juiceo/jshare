import React from 'react';

import { isEmpty } from 'lodash';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';

import AppBar from '@/components/AppBar';
import Page from '@/components/Page';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Routes } from '@/routing';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import { GroupWithMembers } from '@/schemas/group';
import { appRouter } from '@/server/routers/_app';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const EditExpensePage = (props: Props) => {
	const { group } = props;
	return (
		<Page
			appBar={
				<AppBar heading="Expense #1" backTo={Routes.Group(group.id)} />
			}
		>
			Edit expense here
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

		const group = await appRouter
			.createCaller({ session })
			.groups.getByGroupId(ctx.params.groupId);

		if (!group) {
			return {
				notFound: true,
			};
		}

		const expense = await appRouter
			.createCaller({ session })
			.expenses.getById(ctx.params?.expenseId);

		if (!expense) {
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
