import React from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';
import { Message } from '@prisma/client';

interface Props {
	id: string;
	message: Message;
}

const BotMessageItem = (props: Props) => {
	const { id, message } = props;

	return (
		<Stack direction="column" alignItems="center" px="4">
			<Box background="blackAlpha.500" px="4" py="0.5" borderRadius="xl" boxShadow="sm">
				<Text textAlign="center" fontSize="sm" color="white" fontWeight="bold">
					{message.message}
				</Text>
			</Box>
		</Stack>
	);
};

export default React.memo(BotMessageItem);
