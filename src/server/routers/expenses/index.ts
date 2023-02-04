import { createExpense, onCreateExpenseInGroup } from '@/server/routers/expenses/create';
import { deleteExpense } from '@/server/routers/expenses/delete';
import { getById } from '@/server/routers/expenses/get';
import { listByGroupId } from '@/server/routers/expenses/list';
import { onUpdateExpenseInGroup, updateExpense } from '@/server/routers/expenses/update';
import * as trpc from '@/server/trpc';

export const expenseRouter = trpc.router({
	create: createExpense,
	update: updateExpense,
	delete: deleteExpense,
	onCreateExpenseInGroup,
	onUpdateExpenseInGroup,
	listByGroupId,
	getById,
});
