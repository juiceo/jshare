import React, { useState } from 'react';

import {
	Button,
	IconButton,
	Input,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { RiAddLine, RiSendPlaneFill } from 'react-icons/ri';

import { Routes } from '@/routing';
import { GroupWithMembers } from '@/schemas';
import { trpc } from '@/utils/trpc';

interface Props {
	group: GroupWithMembers;
}

const GroupMessagesFooter = (props: Props) => {
	const { group } = props;
	const router = useRouter();
	const sendMessage = trpc.messages.send.useMutation();
	const [inputValue, setInputValue] = useState<string>('');

	const handleSendMessage = () => {
		sendMessage.mutate({
			message: inputValue,
			groupId: group.id,
		});
		setInputValue('');
	};

	const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSendMessage();
		}
	};

	return (
		<Stack
			direction="column"
			alignItems="stretch"
			background="white"
			borderTop="1px solid"
			borderColor="gray.200"
		>
			<Stack
				background="white"
				direction="row"
				alignItems="center"
				p="2"
				pb="6"
			>
				<Input
					pr="4.5rem"
					placeholder="Write a message"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={(e) => handleEnterPress(e)}
					borderRadius="20px"
					height="40px"
					border="none"
					background="gray.100"
					flex={1}
				/>

				<Stack direction="row" spacing={0} overflow="hidden">
					<motion.div
						animate={!!inputValue ? 'visible' : 'hidden'}
						variants={{
							visible: {
								width: 'auto',
								opacity: 1,
								transition: {
									scale: {
										delay: 0.2,
									},
								},
							},
							hidden: {
								width: 0,
								opacity: 0,
								translateX: '50px',
							},
						}}
						style={{ overflow: 'hidden' }}
					>
						<IconButton
							aria-label="Send"
							borderRadius="50%"
							onClick={handleSendMessage}
							colorScheme="teal"
						>
							<RiSendPlaneFill size={18} />
						</IconButton>
					</motion.div>
					<motion.div
						initial={false}
						animate={!inputValue ? 'visible' : 'hidden'}
						variants={{
							visible: {
								width: 'auto',
							},
							hidden: {
								width: 0,
							},
						}}
						style={{
							overflow: 'hidden',
							borderRadius: '20px',
							background: 'white',
							zIndex: 5,
						}}
					>
						<Stack direction="row" spacing="2">
							<Button
								size="md"
								width="40px"
								height="40px"
								borderRadius="20px"
								colorScheme="green"
								onClick={() =>
									router.push(Routes.CreateExpense(group.id))
								}
							>
								$
							</Button>
							<Menu>
								<MenuButton
									as={IconButton}
									aria-label="More"
									icon={<RiAddLine size={18} />}
									borderRadius="50%"
								/>
								<MenuList>
									<MenuItem>Action 1</MenuItem>
									<MenuItem>Action 2</MenuItem>
									<MenuItem>Action 3</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</motion.div>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default GroupMessagesFooter;
