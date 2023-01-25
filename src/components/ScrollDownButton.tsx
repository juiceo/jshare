import React from 'react';

import { Button } from '@chakra-ui/react';
import { RiArrowDownSLine } from 'react-icons/ri';

interface ScrollDownButtonProps {
	onClick: () => void;
}

const ScrollDownButton = (props: ScrollDownButtonProps) => {
	return (
		<Button
			onClick={props.onClick}
			aria-label="Scroll to bottom"
			variant="unstyled"
			width="40px"
			height="40px"
			borderRadius="50%"
			background="gray.800"
			_hover={{
				background: 'gray.600',
			}}
			color="whiteAlpha.900"
			display="flex"
			alignItems="center"
			justifyContent="center"
			position="relative"
		>
			<RiArrowDownSLine color="inherit" size={24} />
		</Button>
	);
};

export default ScrollDownButton;
