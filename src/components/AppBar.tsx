import React from 'react';

import {
	Box,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Stack,
	Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiArrowLeftLine, RiMore2Line } from 'react-icons/ri';

export type AppBarVariant = 'default' | 'transparent';
export interface AppBarProps {
	heading: string;
	subheading?: string;
	backTo?: string;
	actions?: AppBarAction[];
	variant?: AppBarVariant;
}

export type AppBarAction = {
	key: string;
	label: string;
	onClick: () => void;
	hidden?: boolean;
};

const AppBar = (props: AppBarProps) => {
	const { heading, subheading, backTo, actions, variant = 'default' } = props;

	const actionsToRender = actions?.filter((action) => !action.hidden);

	const backgroundColors: Record<AppBarVariant, string> = {
		default: 'white',
		transparent: 'theme.pageBackground',
	};

	const boxShadows: Record<AppBarVariant, string> = {
		default: 'sm',
		transparent: 'none',
	};

	return (
		<Stack
			direction="row"
			p="2"
			alignItems="center"
			justifyContent="space-between"
			spacing={2}
			background={backgroundColors[variant]}
			boxShadow={boxShadows[variant]}
			zIndex={2}
			py="4"
			height="72px"
		>
			<Box width="40px" height="40px">
				{!!backTo && (
					<Link href={backTo}>
						<IconButton aria-label="Back" variant="ghost">
							<RiArrowLeftLine size={24} />
						</IconButton>
					</Link>
				)}
			</Box>

			<Stack
				flex={1}
				direction="column"
				alignItems="center"
				justifyContent="center"
				whiteSpace="nowrap"
				spacing={0}
				position="relative"
			>
				<Heading
					fontSize="xl"
					textAlign="center"
					display="inline-block"
					textOverflow="ellipsis"
					overflow="hidden"
					whiteSpace="nowrap"
					width="calc(100vw - 120px)"
				>
					{heading}
				</Heading>
				{!!subheading && <Text fontSize="xs">{subheading}</Text>}
			</Stack>
			<Box width="40px" height="40px">
				{!!actionsToRender?.length && (
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<RiMore2Line size={24} />}
							variant="ghost"
						/>
						<MenuList>
							{actionsToRender.map((action) => (
								<MenuItem
									key={action.key}
									onClick={action.onClick}
								>
									{action.label}
								</MenuItem>
							))}
						</MenuList>
					</Menu>
				)}
			</Box>
		</Stack>
	);
};

export default AppBar;
