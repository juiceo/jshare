import React, { useState } from 'react';

import {
	Avatar,
	Button,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	IconButton,
	Stack,
	Text,
} from '@chakra-ui/react';
import { User } from '@prisma/client';
import {
	RiCheckboxBlankCircleLine,
	RiCheckboxCircleFill,
	RiLockUnlockLine,
	RiPencilLine,
} from 'react-icons/ri';

import { CurrencyCode, formatAmount } from '@/modules/money';

import MoneyInput from './MoneyInput';

interface Props {
	user: User;
	amount: number;
	currency: CurrencyCode;
	enabled: boolean;
	locked: boolean;
	onToggle: (enabled: boolean) => void;
	onAmountChange: (amount: number) => void;
	onUnlock: () => void;
	total: number;
}

const ExpenseSharesListItem = (props: Props) => {
	const {
		user,
		amount,
		currency,
		enabled,
		onToggle,
		onAmountChange,
		onUnlock,
		locked,
	} = props;
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [editedAmount, setEditedAmount] = useState<number>(amount);

	const handleAmountSave = () => {
		setDrawerOpen(false);
		if (!editedAmount) {
			onToggle(false);
		} else {
			onAmountChange(editedAmount);
		}
	};

	return (
		<>
			<Stack
				direction="row"
				p="4"
				sx={{
					transition: 'opacity 0.2s ease-in-out',
					opacity: enabled ? 1 : 0.3,
				}}
			>
				<Avatar src={user.image ?? ''} />
				<Stack direction="column" flex={1}>
					<Text>{user.name}</Text>
				</Stack>
				<Stack direction="row" alignItems="center">
					<Text>{formatAmount(amount, currency)}</Text>
					<Stack direction="row" spacing={0}>
						<IconButton
							aria-label="Edit"
							variant="ghost"
							colorScheme="green"
							onClick={() => setDrawerOpen(true)}
						>
							<RiPencilLine size={24} />
						</IconButton>
						{locked ? (
							<IconButton
								aria-label="Unlock"
								variant="ghost"
								colorScheme="green"
								onClick={onUnlock}
							>
								<RiLockUnlockLine size={32} />
							</IconButton>
						) : (
							<IconButton
								aria-label="Toggle"
								variant="ghost"
								colorScheme="green"
								onClick={() => onToggle(!enabled)}
							>
								{enabled ? (
									<RiCheckboxCircleFill size={32} />
								) : (
									<RiCheckboxBlankCircleLine size={32} />
								)}
							</IconButton>
						)}
					</Stack>
				</Stack>
			</Stack>
			<Drawer
				placement="bottom"
				isOpen={drawerOpen}
				onClose={() => setDrawerOpen(false)}
				variant="always-on-top"
			>
				<DrawerOverlay />
				<DrawerContent>
					<Stack
						direction="column"
						alignItems="center"
						spacing={2}
						padding="2"
						pt="8"
						width="240px"
						maxWidth="100%"
						margin="0 auto"
					>
						<Avatar src={user.image ?? ''} />
						<Text>{user.name}</Text>
						<MoneyInput
							initialValue={amount}
							onChange={setEditedAmount}
							currency={currency}
						/>
						<Button width="full" onClick={handleAmountSave}>
							Save
						</Button>
					</Stack>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default ExpenseSharesListItem;
