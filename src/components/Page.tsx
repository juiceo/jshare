import React, { useEffect, useRef, useState } from 'react';

import { Box, BoxProps, Stack, StackProps } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
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

const MotionBox = motion(Box);

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
		if (!appBarRef.current) return; // wait for the elementRef to be available
		const resizeObserver = new ResizeObserver(() => {
			setAppBarHeight(appBarRef.current?.clientHeight ?? 0);
			// Do what you want to do when the size of the element changes
		});
		resizeObserver.observe(appBarRef.current);
		return () => resizeObserver.disconnect(); // clean up
	}, []);

	useEffect(() => {
		if (!footerRef.current) return; // wait for the elementRef to be available
		const resizeObserver = new ResizeObserver(() => {
			setFooterHeight(footerRef.current?.clientHeight ?? 0);
			// Do what you want to do when the size of the element changes
		});
		resizeObserver.observe(footerRef.current);
		return () => resizeObserver.disconnect(); // clean up
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
			<AnimatePresence>
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
					<MotionBox
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ delay: 0.1, opacity: { duration: 0.2 } }}
						flex={1}
						{...contentProps}
					>
						{children}
					</MotionBox>
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
			</AnimatePresence>
		</>
	);
};

export default Page;
