import { DB } from '@jshare/db';

import { GroupsStore } from '~/lib/store/collections/groups';
import { ProfilesStore } from '~/lib/store/collections/profiles';
import { DocumentStore } from '~/lib/store/DocumentStore';
import type { Query } from '~/lib/store/types';
import { trpcClient } from '~/lib/trpc';

export const MessagesStore = new DocumentStore({
    name: 'messages',
    api: {
        findById: async (ids: string[]) => {
            return trpcClient.models.messages.findById.query({ ids });
        },
        findWhere: async (queries: Query<DB.Message>[]) => {
            return trpcClient.models.messages.findWhere.query({ queries });
        },
        create: async (input: DB.Message) => {
            return trpcClient.models.messages.create.mutate(input);
        },
    },
    resolvers: {
        author: (message: DB.Message) => {
            return ProfilesStore.findById(message.authorId);
        },
        group: (message: DB.Message) => {
            return GroupsStore.findById(message.groupId);
        },
    },
    staleTime: 60_000, // 30 seconds
});
