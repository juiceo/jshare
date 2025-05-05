import { zDB, type DB } from '@jshare/db';

import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const GroupsStore = new DocumentStore({
    name: 'groups',
    schema: zDB.models.GroupSchema.extend({
        participants: zDB.models.GroupParticipantSchema.array().optional(),
        coverImage: zDB.models.ImageSchema.nullable().optional(),
    }).transform((data) => data as DB.Group<{ participants: true; coverImage: true }>),
    api: {
        findById: trpcClient.models.groups.findById.query,
        findMany: trpcClient.models.groups.findMany.query,
        create: trpcClient.models.groups.create.mutate,
    },
    createOptimistic: (data) => {
        return {
            ...data,
            inviteCode: null,
            lastActivity: new Date(),
            coverImageId: data.coverImageId ?? null,
            participants: [],
            coverImage: null,
        };
    },
});
