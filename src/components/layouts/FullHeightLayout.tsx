import React from 'react';

import { Box } from '@chakra-ui/react';

interface Props {
	children: React.ReactNode;
	footer?: React.ReactNode;
}

const FullHeightLayout = (props: Props) => {
	const { children, footer } = props;
	return (
		<Box
			height="100%"
			display="flex"
			flexDirection="column"
			overflow="auto"
		>
			<Box flex={1} overflow="auto">
				{children}
			</Box>

			{!!footer && <Box>{footer}</Box>}
		</Box>
	);
};

export default FullHeightLayout;
