import EventEmitter from 'events';

export const CreateMessage = 'create_message';
export const CreateMessageInGroup = (groupId: string) => `${CreateMessage}_${groupId}`;
export const CreateExpense = 'create_expense';
export const CreateExpenseInGroup = (groupId: string) => `${CreateExpense}_${groupId}`;

export const EditExpense = 'edit_expense';
export const EditExpenseInGroup = (groupId: string) => `${EditExpense}_${groupId}`;

const ee = new EventEmitter();

export const emit = ee.emit;
export const on = ee.on;
export const off = ee.off;
