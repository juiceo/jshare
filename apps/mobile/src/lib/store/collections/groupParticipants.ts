import { DB } from '@jshare/db';

import { DocumentStore } from '~/lib/store/DocumentStore';
import type { Query } from '~/lib/store/types';
import { trpcClient } from '~/lib/trpc';

export const GroupParticipantsStore = new DocumentStore({
    name: 'groupParticipants',
    api: {
        findById: async (ids: string[]) => {
            return trpcClient.models.groupParticipants.findById.query({ ids });
        },
        findWhere: async (queries: Query<DB.GroupParticipant>[]) => {
            return trpcClient.models.groupParticipants.findWhere.query({ queries });
        },
        create: async (input: DB.GroupParticipant) => {
            return trpcClient.models.groupParticipants.create.mutate(input);
        },
    },
    resolvers: {},
    staleTime: 30_000, // 30 seconds
});
