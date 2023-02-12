import React, { useMemo, useState } from 'react';

import {
	Box,
	Button,
	Checkbox,
	List,
	ListItem,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
} from '@chakra-ui/react';
import { User } from '@prisma/client';

import { ById, ByUserId } from '@/modules/common/types';
import { ExpenseSummary } from '@/modules/expenses';
import { CurrencyCode, formatAmount } from '@/modules/money';
import { getPendingPaymentsByUser } from '@/modules/payments/utils';
import { getUserDisplayName } from '@/modules/users';

export interface PaymentModalProps {
	isOpen: boolean;
	onClose: () => void;
	balances: ByUserId<ExpenseSummary>;
	currency: CurrencyCode;
	userId: string;
	usersById: ById<User>;
}

const PaymentModal = (props: PaymentModalProps) => {
	const { isOpen, onClose, balances, userId, usersById, currency } = props;

	const [paidItems, setPaidItems] = useState<string[]>([]);

	const paymentsByUser = useMemo(() => {
		return getPendingPaymentsByUser(balances);
	}, [balances]);

	const ownBalance = balances[userId]?.balance ?? 0;
	const toPay = paymentsByUser.filter((p) => p.from === userId);
	const toReceive = paymentsByUser.filter((p) => p.to === userId);
	return (
		<Modal isOpen={isOpen} onClose={onClose} size="lg">
			<ModalOverlay />
			<ModalContent m="4">
				<ModalHeader>Payments</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Text fontSize="md" fontWeight="bold" mb="4">
						Your balance: {formatAmount(ownBalance, currency)}
					</Text>
					{toPay.length > 0 && (
						<Box mb="4">
							<Text fontSize="md" fontWeight="bold" mb="4">
								You should pay:
							</Text>
							<List spacing={3}>
								{toPay.map((payment) => {
									const to = usersById[payment.to];
									return (
										<ListItem key={payment.id}>
											<Stack direction="row">
												<Text flex="1">
													<Text display="inline" fontWeight="bold" color="red.500">
														{formatAmount(payment.amount, currency)}
													</Text>{' '}
													to {getUserDisplayName(to, 'full')}
												</Text>
												<Checkbox
													isChecked={paidItems.includes(payment.id)}
													onChange={(e) => {
														if (e.target.checked) {
															setPaidItems((prev) => [...prev, payment.id]);
														} else {
															setPaidItems((prev) =>
																prev.filter((id) => id !== payment.id),
															);
														}
													}}
													colorScheme="green"
												>
													Paid
												</Checkbox>
											</Stack>
										</ListItem>
									);
								})}
							</List>
						</Box>
					)}

					{toReceive.length > 0 && (
						<Box mb="4">
							<Text fontSize="md" fontWeight="bold" mb="4">
								You should receive:
							</Text>
							<List spacing={3}>
								{toReceive.map((payment) => {
									const from = usersById[payment.from];
									return (
										<ListItem key={payment.id}>
											<Stack direction="row">
												<Text flex="1">
													<Text display="inline" fontWeight="bold" color="green.500">
														{formatAmount(payment.amount, currency)}
													</Text>{' '}
													from {getUserDisplayName(from, 'full')}
												</Text>
											</Stack>
										</ListItem>
									);
								})}
							</List>
						</Box>
					)}

					{toReceive.length === 0 && toPay.length === 0 && <Text>Nothing for you to pay or receive</Text>}
				</ModalBody>

				<ModalFooter>
					<Button variant="ghost" onClick={onClose}>
						Close
					</Button>
					{toPay.length > 0 && (
						<Button variant="solid" disabled={paidItems.length === 0} colorScheme="green">
							Mark as paid ({paidItems.length})
						</Button>
					)}
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default PaymentModal;
