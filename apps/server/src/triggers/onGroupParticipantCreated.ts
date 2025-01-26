import { v4 as uuidv4 } from 'uuid';

import { DB } from '@jshare/db';

import { db } from '../services/db';

export const onGroupParticipantCreated = async (participant: DB.GroupParticipant) => {
    await db.message.create({
        data: {
            groupId: participant.groupId,
            authorType: DB.AuthorType.System,
            text: `@user=${participant.userId} joined the group via invite code`,
            key: uuidv4(),
        },
    });
};
