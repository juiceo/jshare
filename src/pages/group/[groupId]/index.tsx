import React, { useMemo } from 'react';

import { User } from '@prisma/client';
import { isEmpty } from 'lodash';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Session, unstable_getServerSession } from 'next-auth';

import GroupHeader from '@/components/GroupHeader';
import GroupMessages from '@/components/GroupMessages';
import GroupMessagesFooter from '@/components/GroupMessagesFooter';
import Page from '@/components/Page';
import { getAllGroupMembers } from '@/modules/groups';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import { GroupWithMembers } from '@/schemas/group';
import { MessageWithSender } from '@/schemas/message';
import { appRouter } from '@/server/routers/_app';
import { trpc } from '@/services/trpc';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const GroupPage = (props: Props) => {
	const { group } = props;
	const remoteMessages = trpc.messages.getByGroupId.useQuery(group.id);
	const remoteExpenses = trpc.expenses.getByGroupId.useQuery(group.id);

	const [localMessages, setLocalMessages] = React.useState<
		MessageWithSender[]
	>([]);
	const [localExpenses, setLocalExpenses] = React.useState<
		ExpenseWithSenderAndShares[]
	>([]);

	trpc.messages.onSendMessageToGroup.useSubscription(group.id, {
		onData: (message) => {
			setLocalMessages((prev) => [...prev, message]);
		},
	});
	trpc.expenses.onCreateExpenseInGroup.useSubscription(group.id, {
		onData: (expense) => {
			setLocalExpenses((prev) => [...prev, expense]);
		},
	});

	const membersById = useMemo(() => {
		const allMembers = getAllGroupMembers(group);
		return allMembers.reduce((acc, member) => {
			acc[member.id] = member;
			return acc;
		}, {} as Record<string, User>);
	}, [group]);

	const messages = [...(remoteMessages.data ?? []), ...localMessages];
	const expenses = [...(remoteExpenses.data ?? []), ...localExpenses];
	const loading =
		remoteMessages.isInitialLoading || remoteExpenses.isInitialLoading;

	return (
		<Page
			title={group.name}
			appBar={<GroupHeader group={group} />}
			footer={<GroupMessagesFooter group={group} />}
			wrapperProps={{
				flexDirection: 'column-reverse',
			}}
		>
			<GroupMessages
				messages={messages}
				expenses={expenses}
				membersById={membersById}
				loading={loading}
			/>
		</Page>
	);
};

const GroupPageWrapper = (props: Props) => {
	if (isEmpty(props)) return null;
	return <GroupPage {...props} />;
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
			.groups.getById(ctx.params.groupId);

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

export default GroupPageWrapper;
