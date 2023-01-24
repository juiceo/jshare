import React from 'react';

import { Avatar, Box, IconButton, Stack, Text } from '@chakra-ui/react';
import { User } from '@prisma/client';
import { RiCheckLine } from 'react-icons/ri';

interface Props {
	member: User;
	onToggle: (enabled: boolean) => void;
	total: number;
	share: number | null;
	enabled: boolean;
}

const ExpenseMemberRow = (props: Props) => {
	const { member, enabled, onToggle } = props;
	return (
		<Stack direction="row" spacing={4} justifyContent="space-between">
			<Stack
				direction="row"
				spacing={4}
				opacity={enabled ? 1 : 0.3}
				flex={1}
				sx={{ transition: 'opacity 0.2s ease-in-out' }}
			>
				<Avatar src={member.image ?? ''} />
				<Box flex={1}>
					<Text>{member.name}</Text>
				</Box>
			</Stack>
			<Box display="flex" alignItems="center" justifyContent="center">
				<Toggle enabled={enabled} onClick={() => onToggle(!enabled)} />
			</Box>
		</Stack>
	);
};

const Toggle = ({
	enabled,
	onClick,
}: {
	enabled: boolean;
	onClick: () => void;
}) => {
	return (
		<IconButton
			aria-label="Toggle"
			onClick={onClick}
			width="28px"
			height="28px"
			padding="0"
			minWidth="0"
			borderRadius="50px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			borderWidth="3px"
			borderColor="green.500"
			_hover={{
				bg: 'green.100',
			}}
			sx={{
				transition: 'background-color 0.2s ease-in-out',
			}}
		>
			<RiCheckLine color={enabled ? 'white' : 'transparent'} />
		</IconButton>
	);
};

export default ExpenseMemberRow;
