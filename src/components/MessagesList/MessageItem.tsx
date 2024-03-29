import React from 'react';

import { Card, Stack, Text } from '@chakra-ui/react';
import { Message, User } from '@prisma/client';
import moment from 'moment';

import { getUserDisplayName } from '@/modules/users';

import ChatItem from './ChatItem';

interface Props {
	id: string;
	message: Message;
	sender: User | null;
	hideAvatar?: boolean;
	hideName?: boolean;
	isSelf?: boolean;
}

const MessageItem = (props: Props) => {
	const { id, message, sender, hideAvatar, hideName, isSelf } = props;

	return (
		<ChatItem sender={sender} hideAvatar={hideAvatar} isSelf={isSelf} id={id}>
			<Card borderRadius="lg" background="gray.200">
				<Stack direction="column" spacing={1} px="2">
					{!hideName && <Text fontSize="xs">{getUserDisplayName(sender, 'short')}</Text>}
					<Stack
						direction="row"
						maxWidth="100%"
						flex={0}
						alignItems="flex-end"
						justifyContent="space-between"
					>
						<Text fontSize="md">{message.message}</Text>
						<Text fontSize="xs" align="right" pb="2px">
							{moment(message.createdAt).format('HH:mm')}
						</Text>
					</Stack>
				</Stack>
			</Card>
		</ChatItem>
	);
};

export default React.memo(MessageItem);
