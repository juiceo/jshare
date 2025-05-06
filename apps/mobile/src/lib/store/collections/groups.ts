import { zDB, type DB } from '@jshare/db';

import { Document } from '~/lib/store/Document';
import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

const schema = zDB.models.GroupSchema.extend({
    participants: zDB.models.GroupParticipantSchema.array().optional(),
    coverImage: zDB.models.ImageSchema.nullable().optional(),
}).transform((data) => data as DB.Group<{ participants: true; coverImage: true }>);

export const GroupsStore = new DocumentStore({
    name: 'groups',
    schema,
    api: {
        findById: trpcClient.models.groups.findById.query,
        findMany: trpcClient.models.groups.findMany.query,
        create: trpcClient.models.groups.create.mutate,
        update: trpcClient.models.groups.update.mutate,
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
    functions: {
        createTemporaryParticipant: async (
            args: { firstName: string; lastName: string },
            doc: Document<DocumentStore<typeof schema, any, any, any, any, any>>
        ) => {
            const participant =
                await trpcClient.groupParticipants.createTemporaryParticipant.mutate({
                    firstName: args.firstName,
                    lastName: args.lastName,
                    groupId: doc.id,
                });

            doc.set({ participants: [...doc.data.participants, participant] });
        },
    },
});
