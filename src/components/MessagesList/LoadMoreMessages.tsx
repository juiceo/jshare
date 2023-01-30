import React from 'react';

import { Button, Stack } from '@chakra-ui/react';

interface LoadMoreMessagesProps {
	onLoadMore: () => void;
	isLoadingMore: boolean;
}

const LoadMoreMessages = (props: LoadMoreMessagesProps) => {
	const { onLoadMore, isLoadingMore } = props;
	return (
		<Stack direction="column" alignItems="center" py="4">
			<Button
				size="sm"
				borderRadius="2xl"
				colorScheme="blackAlpha"
				onClick={onLoadMore}
				isLoading={isLoadingMore}
			>
				Load older messages
			</Button>
		</Stack>
	);
};

export default LoadMoreMessages;
