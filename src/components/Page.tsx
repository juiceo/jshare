import React from 'react';

import { Box, BoxProps, Stack, StackProps } from '@chakra-ui/react';
import Head from 'next/head';

interface Props {
	children: React.ReactNode;
	appBar?: React.ReactNode;
	appBarHeight?: string;
	footer?: React.ReactNode;
	footerHeight?: string;
	title?: string;
	description?: string;
	wrapperProps?: StackProps;
	contentProps?: BoxProps;
}

const Page = (props: Props) => {
	const {
		title,
		description,
		children,
		appBar,
		appBarHeight = '72px',
		footer,
		footerHeight = '72px',
		wrapperProps,
		contentProps,
	} = props;

	return (
		<>
			<Head>
				<title>{title ? `${title} | JShare` : 'JShare'}</title>
				<meta
					name="description"
					content={description ?? "It's like WeShare, but better!"}
				/>
			</Head>
			<Stack
				height="100vh"
				maxHeight="100%"
				direction="column"
				spacing={0}
				background="theme.pageBackground"
				paddingTop={!!appBar ? appBarHeight : 0}
				paddingBottom={!!footer ? footerHeight : 0}
				{...wrapperProps}
			>
				{!!appBar && (
					<Box
						position="fixed"
						top="0"
						left="0"
						right="0"
						zIndex={1000}
					>
						{appBar}
					</Box>
				)}
				<Box flex={1} {...contentProps}>
					{children}
				</Box>
				{!!footer && (
					<Box
						position="fixed"
						bottom="0"
						left="0"
						right="0"
						zIndex={1000}
					>
						{footer}
					</Box>
				)}
			</Stack>
		</>
	);
};

export default Page;
