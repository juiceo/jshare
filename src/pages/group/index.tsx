import React, { useState } from 'react';

import {
	Box,
	Button,
	Card,
	FormControl,
	FormLabel,
	Input,
	Select,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import { CurrencyCode } from '@prisma/client';
import router from 'next/router';
import { RiQuestionLine } from 'react-icons/ri';

import AppBar from '@/components/AppBar';
import Layout from '@/components/Layout';
import Page from '@/components/Page';
import { CURRENCIES } from '@/modules/money';
import { Routes } from '@/routing';
import { trpc } from '@/services/trpc';

const CreateGroup: React.FC = () => {
	const [name, setName] = useState<string>('');
	const [currency, setCurrency] = useState<CurrencyCode>('EUR');

	const createGroup = trpc.groups.create.useMutation();

	const handleCreateGroup = async () => {
		try {
			const group = await createGroup.mutateAsync({ name, currency });
			router.push(Routes.Group(group.id));
		} catch (err) {}
	};

	return (
		<Page
			appBar={
				<AppBar
					heading="New group"
					backTo={Routes.ROOT}
					variant="transparent"
				/>
			}
			title="New group"
		>
			<Layout max="md">
				<Card background="white" p="4">
					<FormControl mb="4">
						<FormLabel>Name</FormLabel>
						<Input
							placeholder="Boys' trip to Berlin"
							value={name}
							onChange={(e) => setName(e.target.value)}
						></Input>
					</FormControl>
					<FormControl mb="4">
						<FormLabel
							sx={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							Currency
							<Tooltip label="The currency expenses will be added and calculated in. Support for adding expenses in multiple currencies coming soon!">
								<Box
									ml="2"
									display="inline-flex"
									alignItems="center"
									justifyContent="center"
								>
									<RiQuestionLine />
								</Box>
							</Tooltip>
						</FormLabel>
						<Select
							placeholder="Select currency"
							value={currency}
							onChange={(e) =>
								setCurrency(e.target.value as CurrencyCode)
							}
						>
							{Object.values(CURRENCIES).map((currency) => (
								<option
									value={currency.code}
									key={currency.code}
								>
									{currency.name} ({currency.code})
								</option>
							))}
						</Select>
					</FormControl>
					{createGroup.error && (
						<Text my="4" color="red" textAlign="center">
							Something went wrong!
						</Text>
					)}
					<Button
						colorScheme="green"
						isLoading={createGroup.isLoading}
						disabled={!createGroup.isIdle}
						onClick={handleCreateGroup}
					>
						Create
					</Button>
				</Card>
			</Layout>
		</Page>
	);
};

export default CreateGroup;
