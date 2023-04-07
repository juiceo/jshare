import React, { useState } from 'react';

import { Box, Button, Heading, IconButton, Input, Stack, Text, useToast } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { RiAddLine, RiSendPlaneFill } from 'react-icons/ri';

import { GroupWithMembers } from '@/modules/groups/types';
import { Routes } from '@/routing';
import { trpc } from '@/services/trpc';

interface Props {
	group: GroupWithMembers;
	onSendMessage?: () => void;
	showInviteBanner?: boolean;
}

const MotionBox = motion(Box);

const GroupMessagesFooter = (props: Props) => {
	const { group, onSendMessage } = props;
	const toast = useToast();
	const sendMessage = trpc.messages.create.useMutation();
	const [inputValue, setInputValue] = useState<string>('');
	const inputRef = React.useRef<HTMLInputElement>(null);

	const handleSendMessage = async () => {
		const message = inputValue.trim();
		if (!message) return;
		setInputValue('');
		inputRef.current?.focus();
		onSendMessage?.();
		await sendMessage.mutateAsync({
			message,
			groupId: group.id,
		});
	};

	const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSendMessage();
		}
	};

	const handleCopyInviteLink = async () => {
		await navigator.clipboard.writeText(`${window.location.host}/invite/${group.inviteId}`);
		toast({
			title: 'Invite link copied',
			description: 'Share it to your friends to add them to the group',
			status: 'success',
			duration: 5000,
			isClosable: true,
		});
	};

	return (
		<Box>
			<Stack
				direction={{ base: 'column', md: 'row' }}
				alignItems="center"
				justifyContent="space-between"
				p="4"
				spacing="4"
				bgColor="gray.200"
				width="100%"
			>
				<Stack direction="column" alignItems={{ base: 'center', md: 'flex-start' }} spacing={0}>
					<Heading fontSize="md" textAlign={{ base: 'center', md: 'left' }}>
						It's pretty lonely in here...
					</Heading>
					<Text fontSize="sm" textAlign={{ base: 'center', md: 'left' }}>
						Share an invite link with your friends to invite them!
					</Text>
				</Stack>
				<Button colorScheme="green" variant="solid" onClick={handleCopyInviteLink}>
					Copy invite link
				</Button>
			</Stack>

			<Stack
				direction="column"
				alignItems="stretch"
				background="white"
				borderTop="1px solid"
				borderColor="gray.200"
			>
				<Stack background="white" direction="row" alignItems="center" p="2" pb="6">
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
						ref={inputRef}
					/>
					<Box>
						<AnimatePresence mode="popLayout" initial={false}>
							{!!inputValue ? (
								<MotionBox
									key="send-message"
									initial={{ scale: 0.5 }}
									animate={{
										scale: 1,
									}}
									exit={{ scale: 0.5 }}
								>
									<IconButton
										aria-label="Send"
										borderRadius="50%"
										onClick={handleSendMessage}
										colorScheme="teal"
									>
										<RiSendPlaneFill size={18} />
									</IconButton>
								</MotionBox>
							) : (
								<MotionBox
									key="add-expense"
									initial={{ scale: 0.5 }}
									animate={{
										scale: 1,
									}}
									exit={{ scale: 0.5 }}
								>
									<Link href={Routes.CreateExpense(group.id)}>
										<IconButton
											aria-label="Add expense"
											borderRadius="50%"
											onClick={handleSendMessage}
											colorScheme="green"
										>
											<RiAddLine size={18} />
										</IconButton>
									</Link>
								</MotionBox>
							)}
						</AnimatePresence>
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
};

export default GroupMessagesFooter;
