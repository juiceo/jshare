import React, { useState } from 'react';

import { Box, IconButton, Input, Stack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { RiAddLine, RiSendPlaneFill } from 'react-icons/ri';

import { GroupWithMembers } from '@/modules/groups/types';
import { Routes } from '@/routing';
import { trpc } from '@/services/trpc';

interface Props {
	group: GroupWithMembers;
	onSendMessage?: () => void;
}

const MotionBox = motion(Box);

const GroupMessagesFooter = (props: Props) => {
	const { group, onSendMessage } = props;
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

	return (
		<Stack direction="column" alignItems="stretch" background="white" borderTop="1px solid" borderColor="gray.200">
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
	);
};

export default GroupMessagesFooter;
