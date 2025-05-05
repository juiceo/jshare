import { getUserFullName } from '@jshare/common';
import { zDB, type DB } from '@jshare/db';

import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const ProfilesStore = new DocumentStore({
    name: 'profiles',
    schema: zDB.models.ProfileSchema.extend({
        avatar: zDB.models.ImageSchema.nullable().optional(),
    }).transform((data) => data as DB.Profile<{ avatar: true }>),
    api: {
        findById: trpcClient.models.profiles.findById.query,
        update: trpcClient.models.profiles.update.mutate,
        create: trpcClient.models.profiles.create.mutate,
    },
    resolvers: {
        fullName: (data) => {
            return getUserFullName(data);
        },
    },
});
