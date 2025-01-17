import { v4 as uuidv4 } from 'uuid';

import { DB } from '@jshare/db';

import { db } from '../services/db';

export const onExpenseCreated = async (expense: DB.Expense) => {
    await db.message.create({
        data: {
            authorId: expense.ownerId,
            groupId: expense.groupId,
            authorType: DB.AuthorType.User,
            key: uuidv4(),
            attachments: {
                create: {
                    type: DB.MessageAttachmentType.Expense,
                    expenseId: expense.id,
                },
            },
        },
    });
};
