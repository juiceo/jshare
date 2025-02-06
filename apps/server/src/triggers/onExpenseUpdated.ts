import { v4 as uuidv4 } from 'uuid';

import { DB } from '@jshare/db';

import { db } from '../services/db';

export const onExpenseUpdated = async (updatedExpense: DB.Expense) => {
    if (updatedExpense.archived) {
        await db.message.create({
            data: {
                groupId: updatedExpense.groupId,
                authorType: DB.AuthorType.System,
                text: `@user=${updatedExpense.ownerId} deleted the expense "${updatedExpense.description}"`,
                key: uuidv4(),
            },
        });
    } else {
        await db.message.create({
            data: {
                groupId: updatedExpense.groupId,
                authorType: DB.AuthorType.System,
                text: `@user=${updatedExpense.ownerId} updated the expense "${updatedExpense.description}"`,
                key: uuidv4(),
            },
        });
    }
};
