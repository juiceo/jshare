import React, { useMemo } from 'react';

import { User } from '@prisma/client';

import { getAllGroupMembers } from '@/modules/groups';
import { ExpenseWithSenderAndShares } from '@/schemas/expense';
import { GroupWithMembers } from '@/schemas/group';
import { MessageWithSender } from '@/schemas/message';
import { trpc } from '@/services/trpc';

import GroupMessages from './GroupMessages';

interface Props {
	group: GroupWithMembers;
}

const GroupContent = (props: Props) => {
	const messages = trpc.messages.getByGroupId.useQuery(props.group.id);
	const expenses = trpc.expenses.getByGroupId.useQuery(props.group.id);
	const [localMessages, setLocalMessages] = React.useState<
		MessageWithSender[]
	>([]);
	const [localExpenses, setLocalExpenses] = React.useState<
		ExpenseWithSenderAndShares[]
	>([]);

	trpc.messages.onSendMessageToGroup.useSubscription(props.group.id, {
		onData: (message) => {
			setLocalMessages((prev) => [...prev, message]);
		},
	});
	trpc.expenses.onCreateExpenseInGroup.useSubscription(props.group.id, {
		onData: (expense) => {
			setLocalExpenses((prev) => [...prev, expense]);
		},
	});

	const membersById = useMemo(() => {
		const allMembers = getAllGroupMembers(props.group);
		return allMembers.reduce((acc, member) => {
			acc[member.id] = member;
			return acc;
		}, {} as Record<string, User>);
	}, [props.group]);

	const allMessages = [...(messages.data ?? []), ...localMessages];
	const allExpenses = [...(expenses.data ?? []), ...localExpenses];

	return (
		<GroupMessages
			messages={allMessages}
			expenses={allExpenses}
			membersById={membersById}
			loading={messages.isInitialLoading || expenses.isInitialLoading}
		/>
	);
};

export default GroupContent;
