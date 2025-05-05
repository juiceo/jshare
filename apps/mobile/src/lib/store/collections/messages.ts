import { DB, zDB } from '@jshare/db';

import { GroupsStore } from '~/lib/store/collections/groups';
import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';
import { getUserId } from '~/state/auth';

export const MessagesStore = new DocumentStore({
    name: 'messages',
    schema: zDB.models.MessageSchema.extend({
        attachments: zDB.models.MessageAttachmentSchema.array().optional(),
    }).transform((data) => data as DB.Message<{ attachments: true }>),
    api: {
        findById: trpcClient.models.messages.findById.query,
        findMany: trpcClient.models.messages.findMany.query,
        create: trpcClient.models.messages.create.mutate,
    },
    resolvers: {
        author: (message) => {
            return ProfilesStore.findById(message.authorId);
        },
        group: (message) => {
            return GroupsStore.findById(message.groupId);
        },
    },
    createOptimistic: (data) => {
        return {
            ...data,
            attachments: [],
            authorType: DB.AuthorType.User,
            authorId: getUserId(),
            text: data.text ?? '',
        };
    },
});
