import React from 'react';

import { Box, IconButton, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { RiCloseLine } from 'react-icons/ri';

import { GroupWithMembers } from '@/modules/groups/types';
import { Routes } from '@/routing';

interface Props {
	group: GroupWithMembers;
}

const ExpenseHeader = (props: Props) => {
	const { group } = props;
	return (
		<Stack direction="row" background="white" alignItems="center" p="2">
			<Box width="1px">
				<Link href={Routes.Group(group.id)}>
					<IconButton aria-label="Exit" variant="ghost">
						<RiCloseLine size={24} />
					</IconButton>
				</Link>
			</Box>

			<Text fontSize="xl" flex={1} align="center">
				New expense
			</Text>
			<Box width="1px" />
		</Stack>
	);
};

export default ExpenseHeader;
