import React from 'react';

import { Box, Button, Card, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface EmptyCardProps {
	title: string;
	description?: string;
	link?: {
		href: string;
		label: string;
	};
}

const EmptyCard = (props: EmptyCardProps) => {
	const { title, description, link } = props;
	return (
		<Box
			width="full"
			background="white"
			p="4"
			borderRadius="md"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
			minHeight="200"
		>
			<Text fontSize="xl" mb="1">
				{title}
			</Text>
			<Text fontSize="md" mb="6">
				{description}
			</Text>
			{!!link && (
				<Box mt={6}>
					<Link href={link.href}>
						<Button colorScheme="green">{link.label}</Button>
					</Link>
				</Box>
			)}
		</Box>
	);
};

export default EmptyCard;
