import { DB } from '@jshare/db';

import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const GroupsStore = new DocumentStore({
    name: 'groups',
    api: {
        findById: async (ids: string[]) => {
            return trpcClient.models.groups.findById.query(ids);
        },
        findWhere: async (where: Partial<DB.Group>) => {
            return trpcClient.models.groups.findWhere.query(where);
        },
        create: async (input: DB.Group) => {
            return trpcClient.models.groups.create.mutate(input);
        },
        // update: async (id: string, updates: Partial<DB.Profile>) => {
        //     return trpcClient.models.profiles.update.mutate({ id, data: updates });
        // },
    },
    resolvers: {},
});
