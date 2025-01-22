import { v4 as uuidv4 } from 'uuid';

import { DB } from '@jshare/db';

import { db } from '../services/db';

export const onExpenseUpdated = async (updatedExpense: DB.Expense) => {
    await db.message.create({
        data: {
            groupId: updatedExpense.groupId,
            authorType: DB.AuthorType.System,
            text: `@user=${updatedExpense.ownerId} updated the expense "${updatedExpense.description}"`,
            key: uuidv4(),
        },
    });
};
