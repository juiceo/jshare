import React, { useState } from 'react';

import {
	Avatar,
	AvatarBadge,
	Box,
	Button,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { GroupWithMembers } from '@/schemas';
import { getAllGroupMembers } from '@/utils/groups';
import { getUserShortName } from '@/utils/users';

import Layout from './Layout';

interface Props {
	group: GroupWithMembers;
	payerId: string;
	onPayerIdChange: (payerId: string) => void;
}

const ExpensePayerSelect = (props: Props) => {
	const session = useSession();
	const { group, payerId, onPayerIdChange } = props;
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const members = getAllGroupMembers(group);
	const payer = members.find((member) => member.id === payerId);
	const isSelf = session.data?.userId === payerId;

	const handlePayerIdChange = (newPayerId: string) => {
		onPayerIdChange(newPayerId);
		setDrawerOpen(false);
	};

	return (
		<Stack
			direction="column"
			alignItems="center"
			justifyContent="center"
			flex={1}
			p="4"
		>
			<Button
				variant="unstyled"
				height="auto"
				onClick={() => setDrawerOpen(true)}
			>
				<Stack
					sx={{ transition: 'background 0.1s ease' }}
					_hover={{ background: 'gray.100' }}
					padding="4"
					direction="column"
					alignItems="center"
					borderRadius="lg"
				>
					<Avatar src={payer?.image ?? ''} />
					<Stack direction="row" alignItems="center" spacing={1}>
						<Text fontSize="md" mb="2px">
							{isSelf
								? 'I paid'
								: `${getUserShortName(
										payer ?? null,
								  )} paid`}{' '}
						</Text>
						<RiArrowDownSLine display="inline" size={20} />
					</Stack>
				</Stack>
			</Button>
			<Drawer
				placement="bottom"
				isOpen={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				size="sm"
			>
				<DrawerOverlay />
				<DrawerContent overflow="auto" maxHeight="67vh" px="2">
					<Stack direction="column" mb="8">
						<Text fontSize="xl" align="center" p="4">
							Who paid?
						</Text>
					</Stack>
					<Layout max="md" noMargin>
						<SimpleGrid
							columns={3}
							spacing={3}
							alignItems="center"
							justifyContent="center"
							alignContent="center"
						>
							{members.map((member) => {
								const isSelected = member.id === payerId;
								const name =
									member.id === session.data?.userId
										? 'Me'
										: getUserShortName(member);
								return (
									<Button
										variant="unstyled"
										key={member.id + Math.random()}
										height="auto"
										onClick={() =>
											handlePayerIdChange(member.id)
										}
									>
										<Stack
											sx={{
												background: isSelected
													? 'gray.100'
													: 'transparent',
												transition:
													'background 0.1s ease',
											}}
											_hover={{
												background: 'gray.100',
											}}
											direction="column"
											alignItems="center"
											padding="4"
											borderRadius="md"
										>
											<Avatar src={member.image ?? ''}>
												{payerId === member.id && (
													<AvatarBadge
														boxSize="1.25em"
														bg="green.500"
													/>
												)}
											</Avatar>
											<Text>{name}</Text>
										</Stack>
									</Button>
								);
							})}
						</SimpleGrid>
						<Stack direction="column" mt="8" py="8">
							<Button
								variant="ghost"
								onClick={() => setDrawerOpen(false)}
							>
								Close
							</Button>
						</Stack>
					</Layout>
				</DrawerContent>
			</Drawer>
		</Stack>
	);
};

export default ExpensePayerSelect;
