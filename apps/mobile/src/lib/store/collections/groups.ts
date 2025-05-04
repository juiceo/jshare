import { DB } from '@jshare/db';

import { GroupParticipantsStore } from '~/lib/store/collections/groupParticipants';
import { ImagesStore } from '~/lib/store/collections/images';
import { DocumentStore } from '~/lib/store/DocumentStore';
import type { Query } from '~/lib/store/types';
import { trpcClient } from '~/lib/trpc';

export const GroupsStore = new DocumentStore({
    name: 'groups',
    api: {
        findById: async (ids: string[]) => {
            return trpcClient.models.groups.findById.query({ ids });
        },
        findWhere: async (queries: Query<DB.Group>[]) => {
            return trpcClient.models.groups.findWhere.query({ queries });
        },
        create: async (input: DB.Group) => {
            return trpcClient.models.groups.create.mutate(input);
        },
        // update: async (id: string, updates: Partial<DB.Profile>) => {
        //     return trpcClient.models.profiles.update.mutate({ id, data: updates });
        // },
    },
    resolvers: {
        participants: (data: DB.Group) => {
            return GroupParticipantsStore.findMany({ groupId: data.id });
        },
        coverImage: (data: DB.Group) => {
            return ImagesStore.findById(data.coverImageId);
        },
    },
    hooks: {
        afterCreate: (data: DB.Group) => {
            GroupParticipantsStore.invalidate({ groupId: data.id });
            console.log('group created');
        },
    },
    staleTime: 30_000, // 30 seconds
});
