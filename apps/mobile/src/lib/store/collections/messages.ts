import { DB, zDB } from '@jshare/db';

import { GroupsStore } from '~/lib/store/collections/groups';
import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { SessionStore } from '~/lib/store/SessionStore';
import { hotReloadable } from '~/lib/store/util';
import { trpcClient } from '~/lib/trpc';

const schema = zDB.models.MessageSchema.extend({
    attachments: zDB.models.MessageAttachmentSchema.array().optional(),
}) as Zod.ZodSchema<DB.Message<{ attachments: true }>>;

export const MessagesStore = hotReloadable(
    '__messagesStore',
    () =>
        new DocumentStore({
            name: 'messages',
            schema,
            mode: 'sync',
            api: {
                sync: trpcClient.models.messages.sync.query,
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
                    authorId: SessionStore.user.id,
                    text: data.text ?? '',
                };
            },
        })
);
