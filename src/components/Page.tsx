import React, { useEffect, useRef, useState } from 'react';

import { Box, BoxProps, Stack, StackProps } from '@chakra-ui/react';
import Head from 'next/head';

interface Props {
	children: React.ReactNode;
	appBar?: React.ReactNode;
	footer?: React.ReactNode;
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
		footer,
		wrapperProps,
		contentProps,
	} = props;

	const [appBarHeight, setAppBarHeight] = useState<number>(0);
	const [footerHeight, setFooterHeight] = useState<number>(0);

	const appBarRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!appBarRef.current) return;
		const resizeObserver = new ResizeObserver(() => {
			setAppBarHeight(appBarRef.current?.clientHeight ?? 0);
		});
		resizeObserver.observe(appBarRef.current);
		return () => resizeObserver.disconnect();
	}, []);

	useEffect(() => {
		if (!footerRef.current) return;
		const resizeObserver = new ResizeObserver(() => {
			setFooterHeight(footerRef.current?.clientHeight ?? 0);
		});
		resizeObserver.observe(footerRef.current);
		return () => resizeObserver.disconnect();
	}, []);

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
				minHeight="100%"
				direction="column"
				spacing={0}
				background="theme.pageBackground"
				{...wrapperProps}
			>
				{!!appBar && (
					<Box
						position="fixed"
						top="0"
						left="0"
						right="0"
						zIndex={1000}
						ref={appBarRef}
					>
						{appBar}
					</Box>
				)}
				<Box height={`${appBarHeight}px`} id="footer-filler" />
				<Box flex={1} {...contentProps}>
					{children}
				</Box>
				<Box height={`${footerHeight}px`} id="footer-filler" />
				{!!footer && (
					<Box
						position="fixed"
						bottom="0"
						left="0"
						right="0"
						zIndex={1000}
						ref={footerRef}
					>
						{footer}
					</Box>
				)}
			</Stack>
		</>
	);
};

export default Page;
