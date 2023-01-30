import React from 'react';

import { Avatar, Box, Stack } from '@chakra-ui/react';
import { User } from '@prisma/client';
import { motion } from 'framer-motion';

interface Props {
	id: string;
	hideAvatar?: boolean;
	sender: User | null;
	children: React.ReactNode;
	isSelf?: boolean;
}

const ChatItem = (props: Props) => {
	const { id, sender, hideAvatar, children, isSelf } = props;
	return (
		<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} id={id}>
			<Stack
				direction={isSelf ? 'row-reverse' : 'row'}
				spacing={2}
				alignItems="flex-start"
				justifyContent="flex-start"
				width="full"
				px="2"
			>
				{!isSelf && (
					<Box
						width="50px"
						alignSelf="stretch"
						display="flex"
						flexDirection="column"
						justifyContent="flex-end"
					>
						{!hideAvatar && <Avatar src={sender?.image ?? ''}></Avatar>}
					</Box>
				)}
				<Box sx={{ maxWidth: 'calc(100vw - 100px)' }}>{children}</Box>
			</Stack>
		</motion.div>
	);
};

export default ChatItem;
