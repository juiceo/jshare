import { v4 as uuidv4 } from 'uuid';

import { DB } from '@jshare/db';

import { db } from '../services/db';

export const onGroupParticipantCreated = async (participant: DB.GroupParticipant) => {
    switch (participant.inviteType) {
        case DB.InviteType.Code: {
            await db.message.create({
                data: {
                    groupId: participant.groupId,
                    authorType: DB.AuthorType.System,
                    text: `@user=${participant.userId} joined the group via invite code`,
                    key: uuidv4(),
                },
            });
            break;
        }
        case DB.InviteType.Invite: {
            const text = participant.invitedById
                ? `@user=${participant.userId} was added to the group by @user=${participant.invitedById}`
                : `@user=${participant.userId} was added to the group`;

            await db.message.create({
                data: {
                    groupId: participant.groupId,
                    authorType: DB.AuthorType.System,
                    text,
                    key: uuidv4(),
                },
            });
        }
    }
};
