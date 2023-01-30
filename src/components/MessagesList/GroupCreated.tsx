import React from 'react';

import { Stack, Text } from '@chakra-ui/react';
import moment from 'moment';

import { getUserDisplayName } from '@/modules/users';
import { GroupWithMembers } from '@/schemas';

interface GroupCreatedProps {
	group: GroupWithMembers;
}

const GroupCreated = (props: GroupCreatedProps) => {
	const { group } = props;
	return (
		<Stack direction="column" alignItems="center" px="2" py="20">
			<Text fontSize="sm">
				{getUserDisplayName(group.owner, 'full')} created this group on{' '}
				{moment(group.createdAt).format('MMMM Do, YYYY')}
			</Text>
		</Stack>
	);
};

export default GroupCreated;
