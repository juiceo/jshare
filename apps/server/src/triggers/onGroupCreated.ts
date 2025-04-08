import { v4 as uuidv4 } from 'uuid';

import { DB } from '@jshare/db';

import { db } from '../services/db';

export const onGroupCreated = async (group: DB.Group) => {
    const createdBy = await db.groupParticipant.findFirst({
        where: {
            groupId: group.id,
            role: DB.Role.Owner,
        },
        include: {
            user: true,
        },
    });
    if (!createdBy) return;
    await db.message.create({
        data: {
            groupId: group.id,
            authorType: DB.AuthorType.System,
            text: `@user=${createdBy.user.id} created the group "${group.name}"`,
            key: uuidv4(),
        },
    });
};
