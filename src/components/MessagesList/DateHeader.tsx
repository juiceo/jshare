import React from 'react';

import { Button, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import moment from 'moment';

interface DateHeaderProps {
	date: Date;
	messageId: string;
}

const DateHeader = (props: DateHeaderProps) => {
	const { date } = props;

	const formatDate = (date: Date) => {
		const now = moment();
		const dateMoment = moment(date);

		if (now.isSame(date, 'day')) {
			return 'Today';
		}
		if (now.isSame(date, 'week')) {
			return dateMoment.format('dddd');
		}
		if (now.isSame(date, 'year')) {
			return dateMoment.format('MMMM Do');
		}
		return dateMoment.format('MMMM Do, YYYY');
	};

	const handleClick = () => {
		const messageEl = document.getElementById(props.messageId);
		if (!!messageEl) {
			messageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const formattedDate = formatDate(date);

	return (
		<Stack direction="column" alignItems="center" py="4">
			<Button colorScheme="blackAlpha" borderRadius="2xl" px="4" size="xs" onClick={handleClick}>
				<Text fontSize="xs" textAlign="center" py="1" margin="0">
					{formattedDate}
				</Text>
			</Button>
		</Stack>
	);
};

export default DateHeader;
