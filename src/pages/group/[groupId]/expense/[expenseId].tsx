import React, { useEffect, useMemo, useState } from 'react';

import { Button, Stack, Text, useToast } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import AppBar from '@/components/AppBar';
import DeleteExpenseAlert from '@/components/DeleteExpenseAlert';
import ExpenseForm, { ExpenseFormValue } from '@/components/ExpenseForm';
import ExpenseSummary from '@/components/ExpenseSummary';
import Layout from '@/components/Layout';
import LoadingPage from '@/components/LoadingPage';
import NotFoundPage from '@/components/NotFoundPage';
import Page from '@/components/Page';
import {
	ExpenseWithSenderAndShares,
	getExpenseName,
	getExpenseSharesFromExpense,
	validateExpenseFormValue,
} from '@/modules/expenses';
import { getAllGroupMembers, isUserInGroup } from '@/modules/groups';
import { GroupWithMembers } from '@/modules/groups/types';
import { Routes } from '@/routing';
import { trpc } from '@/services/trpc';

const EditExpensePage = (props: {
	group: GroupWithMembers;
	expense: ExpenseWithSenderAndShares;
	session: Session;
	onExpenseUpdated: () => void;
}) => {
	const router = useRouter();
	const toast = useToast();
	const { group, expense, session } = props;

	const allMembers = getAllGroupMembers(group);
	const canEditExpense = session.userId === expense.senderId;
	const updateExpense = trpc.expenses.update.useMutation();

	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const initialFormValue: ExpenseFormValue = useMemo(
		() => ({
			payerId: expense.payerId,
			amount: expense.amount,
			title: expense.title,
			image: expense.image ?? undefined,
			shares: getExpenseSharesFromExpense(expense),
		}),
		[expense],
	);
	const [editedExpense, setEditedExpense] = useState<ExpenseFormValue>(initialFormValue);

	useEffect(() => {
		if (!isEditing) {
			setEditedExpense(initialFormValue);
		}
	}, [initialFormValue, isEditing]);

	const handleCancel = () => {
		setIsEditing(false);
	};
	const handleSave = async () => {
		try {
			await updateExpense.mutateAsync({
				expenseId: expense.id,
				...editedExpense,
			});
			setIsEditing(false);
			props.onExpenseUpdated();
		} catch (err) {
			toast({
				title: 'Something went wrong',
				description: 'The expense was not updated. Please try again.',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}
	};

	const validation = isEditing ? validateExpenseFormValue(editedExpense, group.currency) : null;

	return (
		<Page
			appBar={
				<AppBar
					heading={getExpenseName(expense)}
					backTo={Routes.Group(group.id)}
					actions={[
						{
							key: 'delete',
							label: 'Delete expense',
							onClick: () => setIsDeleting(true),
							hidden: !canEditExpense,
						},
					]}
				/>
			}
			footer={
				<Layout max="md" noMargin p="4" bg="theme.pageBackground">
					{validation?.message && (
						<Text color="red.500" mb="2" fontSize="xs" textAlign="center" fontWeight="bold">
							{validation.message}
						</Text>
					)}
					{!isEditing ? (
						<Stack direction="column">
							{!canEditExpense && (
								<Text fontSize="xs" textAlign="center">
									Only the person who created this expense can edit it
								</Text>
							)}
							<Button
								key="edit"
								width="full"
								colorScheme="green"
								onClick={() => setIsEditing(true)}
								disabled={!canEditExpense}
							>
								Edit expense
							</Button>
						</Stack>
					) : (
						<Stack direction="column">
							<Button
								key="save"
								width="full"
								colorScheme="green"
								onClick={handleSave}
								disabled={updateExpense.isLoading || !validation?.valid}
								isLoading={updateExpense.isLoading}
							>
								Save changes
							</Button>
							<Button
								key="cancel"
								width="full"
								variant="ghost"
								onClick={handleCancel}
								disabled={updateExpense.isLoading}
							>
								Cancel
							</Button>
						</Stack>
					)}
				</Layout>
			}
		>
			<>
				<Layout max="md">
					{isEditing ? (
						<ExpenseForm
							value={editedExpense}
							onChange={setEditedExpense}
							currency={expense.currency}
							members={allMembers}
						/>
					) : (
						<ExpenseSummary expense={expense} group={group} />
					)}
				</Layout>
				<DeleteExpenseAlert
					expenseId={expense.id}
					isOpen={isDeleting}
					onClose={() => setIsDeleting(false)}
					onDelete={() => router.back()}
				/>
			</>
		</Page>
	);
};

const EditExpensePageWrapper = () => {
	const router = useRouter();
	const { groupId, expenseId } = router.query as { groupId: string; expenseId: string };

	const session = useSession();
	const group = trpc.groups.getById.useQuery({ groupId });
	const expense = trpc.expenses.getById.useQuery({ expenseId, groupId });

	if (group.isLoading || expense.isLoading) return <LoadingPage />;
	if (group.isError || expense.isError) return <NotFoundPage />;
	if (!group.data || !expense.data || !session.data) return <NotFoundPage />;
	if (!isUserInGroup(session.data.userId, group.data)) return <NotFoundPage />;

	return (
		<EditExpensePage
			group={group.data}
			expense={expense.data}
			onExpenseUpdated={expense.refetch}
			session={session.data}
		/>
	);
};

export default EditExpensePageWrapper;
