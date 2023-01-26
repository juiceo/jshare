import React, { useRef, useState } from 'react';

import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react';

import { trpc } from '@/services/trpc';

interface DeleteExpenseAlertProps {
	isOpen: boolean;
	expenseId: string;
	onClose: () => void;
	onDelete?: () => void;
}

const DeleteExpenseAlert = (props: DeleteExpenseAlertProps) => {
	const { expenseId, isOpen, onClose, onDelete } = props;

	const deleteExpense = trpc.expenses.delete.useMutation();
	const cancelRef = useRef<HTMLButtonElement>(null);

	const handleDelete = async () => {
		await deleteExpense.mutateAsync(expenseId);
		onClose();
		onDelete?.();
	};
	return (
		<AlertDialog
			isOpen={isOpen}
			leastDestructiveRef={cancelRef}
			onClose={onClose}
		>
			<AlertDialogOverlay>
				<AlertDialogContent>
					<AlertDialogHeader fontSize="lg" fontWeight="bold">
						Delete Expense?
					</AlertDialogHeader>

					<AlertDialogBody>
						{'Are you sure? This expense will be gone forever'}
					</AlertDialogBody>

					<AlertDialogFooter>
						<Button
							ref={cancelRef}
							onClick={onClose}
							disabled={deleteExpense.isLoading}
						>
							Cancel
						</Button>
						<Button
							colorScheme="red"
							ml={3}
							onClick={handleDelete}
							isLoading={deleteExpense.isLoading}
							disabled={deleteExpense.isLoading}
						>
							Delete
						</Button>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialogOverlay>
		</AlertDialog>
	);
};

export default DeleteExpenseAlert;
