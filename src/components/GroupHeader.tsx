import React, { useRef } from 'react';

import { Box, Button, Stack, ToastId, UseToastOptions, useToast } from '@chakra-ui/react';
import Link from 'next/link';

import { getAllGroupMembers } from '@/modules/groups';
import { Routes } from '@/routing';
import { GroupWithMembers } from '@/schemas';
import { trpc } from '@/services/trpc';

import AppBar from './AppBar';

interface Props {
	group: GroupWithMembers;
}

const INVITE_LINK_COPIED: UseToastOptions = {
	title: 'Invite link copied',
	description: 'Share it to your friends to add them to the group',
	status: 'success',
	duration: 5000,
	isClosable: true,
};

const GENERATING_INVITE_LINK: UseToastOptions = {
	title: 'Generating invite link',
	description: 'Just a second...',
	status: 'info',
	isClosable: false,
};

const GroupHeader = (props: Props) => {
	const { group } = props;
	const toast = useToast();
	const inviteLinkToastRef = useRef<ToastId>();

	const generateInviteId = trpc.groups.generateInviteId.useMutation();

	const handleCopyInviteLink = async () => {
		if (group.inviteId) {
			await copyInviteLinkToClipboard(group.inviteId);
			toast(INVITE_LINK_COPIED);
		} else {
			generateInviteLink();
		}
	};

	const generateInviteLink = async () => {
		inviteLinkToastRef.current = toast(GENERATING_INVITE_LINK);

		const { inviteId } = await generateInviteId.mutateAsync({ groupId: group.id });
		if (!!inviteId) {
			await copyInviteLinkToClipboard(inviteId);
		}
		toast.update(inviteLinkToastRef.current, INVITE_LINK_COPIED);
	};

	const copyInviteLinkToClipboard = async (inviteId: string) => {
		await navigator.clipboard.writeText(`${window.location.host}/invite/${inviteId}`);
	};

	const memberCount = getAllGroupMembers(group).length;

	return (
		<Box sx={{ position: 'relative' }}>
			<AppBar
				heading={group.name}
				subheading={memberCount === 1 ? '1 member' : `${memberCount} members`}
				backTo="/"
				actions={[
					{
						key: 'copy-invite-link',
						label: 'Copy invite link',
						onClick: handleCopyInviteLink,
					},
					{
						key: 'refresh-invite-link',
						label: 'Refresh invite link',
						onClick: generateInviteLink,
						hidden: !group.inviteId,
					},
				]}
			/>
			<Stack
				position="absolute"
				bottom="0"
				width="full"
				direction="column"
				alignItems="center"
				sx={{
					transform: 'translateY(50%)',
				}}
			>
				<Link href={Routes.OverviewTab(group.id, 'balances')}>
					<Button size="xs" borderRadius="xl" colorScheme="teal" px="4">
						View expenses
					</Button>
				</Link>
			</Stack>
		</Box>
	);
};

export default GroupHeader;
