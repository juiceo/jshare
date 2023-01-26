import React, { ReactNode } from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {
	children: ReactNode;
	noMargin?: boolean;
	max?: BoxProps['maxW'];
	innerProps?: BoxProps;
}

const Layout: React.FC<Props> = (props) => {
	const { children, noMargin, max, innerProps, ...boxProps } = props;
	return (
		<Box px="4" background="theme.pageBackground" {...boxProps}>
			<Box
				maxW={max ?? '5xl'}
				margin="0 auto"
				mt={noMargin ? 0 : 16}
				mb={noMargin ? 0 : 16}
				{...innerProps}
			>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
