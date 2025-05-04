import { DB } from '@jshare/db';

import { ImagesStore } from '~/lib/store/collections/images';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const ProfilesStore = new DocumentStore({
    name: 'profiles',
    api: {
        findById: async (ids: string[]) => {
            return trpcClient.models.profiles.findById.query({ ids });
        },
        update: async (id: string, data: Partial<DB.Profile>) => {
            return trpcClient.models.profiles.update.mutate({ id, data });
        },
        create: async (input: DB.Profile) => {
            return trpcClient.models.profiles.create.mutate(input);
        },
    },
    resolvers: {
        fullName: (data: DB.Profile) => {
            return `${data.firstName} ${data.lastName}`;
        },
        avatar: (data: DB.Profile) => {
            return data.avatarId ? ImagesStore.findById(data.avatarId) : undefined;
        },
    },
    hooks: {
        afterUpdate: (data: DB.Profile) => {
            console.log('PROFILE UPDATED', data.id);
        },
    },
    staleTime: 120_000, // 2 minutes
});
