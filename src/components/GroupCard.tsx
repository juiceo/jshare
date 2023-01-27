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
import { formatAmount } from '@/modules/money';
import { Routes } from '@/routing';
import { GroupWithMembers } from '@/schemas';
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

	const handleArchive = async () => {
		await archiveGroup.mutateAsync(group.id);
		utils.groups.invalidate();
	};

	const handleDelete = async () => {
		await deleteGroup.mutateAsync(group.id);
		utils.groups.invalidate();
	};

	const memberCount = getGroupMemberCount(group);

	const isOwner = group.ownerId === session.data?.userId;

	return (
		<Card
			background="white"
			borderRadius="lg"
			overflow="hidden"
			variant="outline"
		>
			<CardHeader>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					minHeight="40px"
				>
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
									disabled={
										group.ownerId !==
											session.data?.userId ||
										archiveGroup.isLoading
									}
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
				<Image
					width="full"
					height="200px"
					src={pattern.src}
					bgRepeat="repeat"
					objectFit="cover"
					alt=""
				/>

				<CardBody>
					<Text>
						{memberCount === 1
							? `1 member`
							: `${memberCount} members`}
					</Text>
					<Text>{group.expenseCount} expenses</Text>
					<Text>
						{formatAmount(group.total ?? 0, group.currency)} revenue
					</Text>
				</CardBody>
			</Link>
		</Card>
	);
};

export default GroupCard;
