import React from 'react';

import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import moment from 'moment';

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
		<MotionStack
			direction="column"
			alignItems="center"
			p="4"
			sx={{ position: 'sticky', top: 0 }}
			zIndex={date.valueOf()}
		>
			<Box
				width="105px"
				background="theme.pageBackground"
				// borderWidth="4px"
				// borderColor="red.400"
				borderRadius="2xl"
			>
				<Button
					colorScheme="blackAlpha"
					borderRadius="2xl"
					width="full"
					size="sm"
					height="auto"
					onClick={handleClick}
				>
					<Text fontSize="xs" textAlign="center" py="1">
						{formattedDate}
					</Text>
				</Button>
			</Box>
		</MotionStack>
	);
};

export default DateHeader;
