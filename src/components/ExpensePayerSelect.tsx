import React, { useState } from 'react';

import {
	Avatar,
	AvatarBadge,
	Button,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	SimpleGrid,
	Stack,
	Text,
} from '@chakra-ui/react';
import { User } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { RiArrowDownSLine } from 'react-icons/ri';

import { getUserDisplayName } from '@/modules/users';

import Layout from './Layout';

interface Props {
	payerId: string;
	onPayerIdChange: (payerId: string) => void;
	users: User[];
}

const ExpensePayerSelect = (props: Props) => {
	const session = useSession();
	const { users, payerId, onPayerIdChange } = props;
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const payer = users.find((user) => user.id === payerId);
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
								: `${getUserDisplayName(
										payer ?? null,
										'short',
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
					<Layout max="md" noMargin background="white">
						<SimpleGrid
							columns={3}
							spacing={3}
							alignItems="center"
							justifyContent="center"
							alignContent="center"
						>
							{users.map((user) => {
								const isSelected = user.id === payerId;
								const name =
									user.id === session.data?.userId
										? 'Me'
										: getUserDisplayName(user, 'short');
								return (
									<Button
										variant="unstyled"
										key={user.id}
										height="auto"
										onClick={() =>
											handlePayerIdChange(user.id)
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
											<Avatar src={user.image ?? ''}>
												{payerId === user.id && (
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
