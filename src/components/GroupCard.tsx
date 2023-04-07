import React from 'react';

import {
	Card,
	CardBody,
	CardHeader,
	Heading,
	IconButton,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { RiMore2Line } from 'react-icons/ri';

import pattern from '@/assets/paisley.webp';
import { getGroupMemberCount } from '@/modules/groups';
import { GroupWithMembers } from '@/modules/groups/types';
import { formatAmount } from '@/modules/money';
import { Routes } from '@/routing';
import { trpc } from '@/services/trpc';

interface Props {
	group: GroupWithMembers;
}

const GroupCard: React.FC<Props> = (props) => {
	const { group } = props;
	const session = useSession();
	const utils = trpc.useContext();

	const archiveGroup = trpc.groups.archive.useMutation();
	const deleteGroup = trpc.groups.delete.useMutation();
	const expenseSummary = trpc.expenses.getExpenseSummaryForUser.useQuery({
		groupId: group.id,
		userId: session.data?.userId ?? '',
	});

	const handleArchive = async () => {
		await archiveGroup.mutateAsync({ groupId: group.id });
		utils.groups.invalidate();
	};

	const handleDelete = async () => {
		await deleteGroup.mutateAsync({ groupId: group.id });
		utils.groups.invalidate();
	};

	const memberCount = getGroupMemberCount(group);

	const isOwner = group.ownerId === session.data?.userId;

	const renderBalance = () => {
		if (!expenseSummary.data) return null;
		const { balance } = expenseSummary.data;

		if (balance > 0) {
			return (
				<Text color="green.500" fontWeight="bold">
					You will receive {formatAmount(balance, group.currency)}
				</Text>
			);
		} else {
			return (
				<Text color={balance < 0 ? 'red.500' : 'gray.500'} fontWeight="bold">
					You owe {formatAmount(-1 * balance, group.currency)}
				</Text>
			);
		}
	};

	return (
		<Card background="white" borderRadius="lg" overflow="hidden" variant="outline">
			<CardHeader>
				<Stack direction="row" justifyContent="space-between" alignItems="center" minHeight="40px">
					<Heading fontSize="lg">{group.name}</Heading>
					{isOwner && (
						<Menu>
							<MenuButton
								as={IconButton}
								aria-label="Options"
								icon={<RiMore2Line size={24} />}
								variant="ghost"
							/>
							<MenuList>
								<MenuItem
									key="archive"
									onClick={handleArchive}
									disabled={group.ownerId !== session.data?.userId || archiveGroup.isLoading}
								>
									Archive group
								</MenuItem>
								<MenuItem
									key="delete"
									onClick={handleDelete}
									disabled={isOwner || deleteGroup.isLoading}
								>
									Delete group
								</MenuItem>
							</MenuList>
						</Menu>
					)}
				</Stack>
			</CardHeader>
			<Link href={Routes.Group(group.id)}>
				<Image width="full" height="200px" src={pattern.src} bgRepeat="repeat" objectFit="cover" alt="" />

				<CardBody>
					<Text>{memberCount === 1 ? `1 member` : `${memberCount} members`}</Text>
					<Text>{group.expenseCount} expenses</Text>
					<Text>{formatAmount(group.total ?? 0, group.currency)} revenue</Text>
					{renderBalance()}
				</CardBody>
			</Link>
		</Card>
	);
};

export default GroupCard;
