import React, { ReactNode } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
	children: ReactNode;
	noMargin?: boolean;
	max?: BoxProps['maxW'];
}

const Layout: React.FC<Props> = (props) => {
	const { children, noMargin, max, ...boxProps } = props;
	return (
		<Box px="4" {...boxProps}>
			<Box
				maxW={max ?? '5xl'}
				margin="0 auto"
				mt={noMargin ? 0 : 16}
				mb={noMargin ? 0 : 16}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
