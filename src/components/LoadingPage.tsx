import React from 'react';

import { Box, CircularProgress } from '@chakra-ui/react';

const LoadingPage = () => {
	return (
		<Box
			w="100%"
			h="100%"
			p="4"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<CircularProgress isIndeterminate size={10} color="green.300" />
		</Box>
	);
};

export default LoadingPage;
