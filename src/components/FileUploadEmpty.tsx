import React from 'react';

import { CircularProgress, Stack, Text } from '@chakra-ui/react';

interface FileUploadEmptyProps {
	label: string;
	isLoading?: boolean;
}

const FileUploadEmpty = (props: FileUploadEmptyProps) => {
	const { label, isLoading } = props;
	return (
		<Stack direction="column" alignItems="center" p="4" width="100%" as="button" borderRadius="lg">
			{isLoading ? <CircularProgress isIndeterminate color="teal" /> : <Text fontSize="md">{label}</Text>}
		</Stack>
	);
};

export default FileUploadEmpty;
