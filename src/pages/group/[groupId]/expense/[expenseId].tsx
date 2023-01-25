import React from 'react';

import {
	Avatar,
	Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Divider,
	Stack,
	Text,
} from '@chakra-ui/react';
import { ExpenseShareWithMember } from '@prisma/client';
import { isEmpty } from 'lodash';
import moment from 'moment';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';

import AmountWithLabel from '@/components/AmountWithLabel';
import AppBar from '@/components/AppBar';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import { formatAmount } from '@/modules/money';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Routes } from '@/routing';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import { GroupWithMembers } from '@/schemas/group';
import { appRouter } from '@/server/routers/_app';
import { getExpenseName } from '@/utils/expenses';
import { getAllGroupMembersById } from '@/utils/groups';
import { getUserFullName } from '@/utils/users';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const EditExpensePage = (props: Props) => {
	const { group, expense } = props;

	const membersById = getAllGroupMembersById(group);

	const renderShare = (share: ExpenseShareWithMember) => {
		const user = membersById[share.memberId];

		return (
			<CardBody key={share.memberId}>
				<Stack direction="row" spacing={4}>
					<Avatar src={user?.image ?? undefined} />
					<Stack direction="column" flex={1}>
						<Text>
							{!!user ? getUserFullName(user) : 'Unknown'}
						</Text>
					</Stack>
					<Text>{formatAmount(share.amount, expense.currency)}</Text>
				</Stack>
			</CardBody>
		);
	};

	const getPayerName = () => {
		const user = membersById[expense.payerId];
		return !!user ? getUserFullName(user) : 'Unknown';
	};

	const getCreatorName = () => {
		const user = membersById[expense.senderId];
		return !!user ? getUserFullName(user) : 'Unknown';
	};

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
					<Button width="full" colorScheme="green" disabled>
						Edit expense
					</Button>
				</Layout>
			}
		>
			<Layout max="md">
				<Stack direction="column">
					<AmountWithLabel
						label={`Paid by ${getPayerName()}`}
						amount={expense.amount}
						currency={expense.currency}
					/>
				</Stack>
				<Card background="white" mt="8">
					<CardHeader textAlign="center">
						<Text fontSize="lg">Shares</Text>
					</CardHeader>
					<Divider />
					{expense.shares.map((share) => renderShare(share))}
				</Card>
				<Box mt="4">
					<Text fontSize="xs" textAlign="center">
						Created{' '}
						{moment(expense.createdAt).format(
							'MMMM Do, YYYY HH:mm',
						)}{' '}
						by {getCreatorName()}
					</Text>
				</Box>
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
