import React from 'react';

import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import moment from 'moment';
import { useInView } from 'react-intersection-observer';

interface DateHeaderProps {
	date: Date;
	messageId: string;
}

const MotionStack = motion(Stack);

const DateHeader = (props: DateHeaderProps) => {
	const { date } = props;

	const formatDate = (date: Date) => {
		const now = moment();
		const dateMoment = moment(date);
		const diff = now.diff(dateMoment, 'days');
		if (diff === 0) {
			return 'Today';
		}
		if (diff === 1) {
			return 'Yesterday';
		}
		if (diff < 7) {
			return dateMoment.format('dddd');
		}
		if (dateMoment.year() === now.year()) {
			return dateMoment.format('MMMM Do');
		}
		return dateMoment.format('MMMM Do, YYYY');
	};

	const handleClick = () => {
		const messageEl = document.getElementById(props.messageId);
		if (!!messageEl) {
			messageEl.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const formattedDate = formatDate(date);

	return (
		<MotionStack direction="column" alignItems="center" py="4" sx={{ position: 'sticky', top: '0' }}>
			<Button
				variant="outline"
				colorScheme="gray"
				borderRadius="2xl"
				width="105px"
				size="xs"
				onClick={handleClick}
				background="theme.pageBackground"
			>
				<Text fontSize="xs" textAlign="center" py="1" margin="0">
					{formattedDate}
				</Text>
			</Button>
		</MotionStack>
	);
};

export default DateHeader;
