export const CreateMessage = 'create_message';
export const CreateMessageInGroup = (groupId: string) =>
	`${CreateMessage}_${groupId}`;
export const CreateExpense = 'create_expense';
export const CreateExpenseInGroup = (groupId: string) =>
	`${CreateExpense}_${groupId}`;
