import React, { useEffect } from 'react';

import { Box } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

interface ScrollDetectorProps {
	onChange?: (visible: boolean) => void;
	onChangeRef?: React.MutableRefObject<boolean>;
	initial: boolean;
	height: string;
}

const ScrollDetector = (props: ScrollDetectorProps) => {
	const { onChange, onChangeRef, initial, height } = props;
	const { ref: innerRef, inView } = useInView({
		threshold: 0,
		initialInView: initial,
	});

	useEffect(() => {
		onChange?.(inView);
		if (onChangeRef) {
			onChangeRef.current = inView;
		}
	}, [inView, onChange, onChangeRef]);

	return (
		<Box width="full" position="relative">
			<Box
				ref={innerRef}
				position="absolute"
				bottom="0"
				left="0"
				right="0"
				height={height}
			></Box>
		</Box>
	);
};

export default ScrollDetector;
