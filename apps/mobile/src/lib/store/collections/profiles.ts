import { getUserFullName } from '@jshare/common';
import { zDB, type DB } from '@jshare/db';

import { DocumentStore } from '~/lib/store/DocumentStore';
import { hotReloadable } from '~/lib/store/util';
import { trpcClient } from '~/lib/trpc';

const schema = zDB.models.ProfileSchema.extend({
    avatar: zDB.models.ImageSchema.nullable().optional(),
}) as Zod.ZodSchema<DB.Profile<{ avatar: true }>>;

export const ProfilesStore = hotReloadable(
    '__profilesStore',
    () =>
        new DocumentStore({
            name: 'profiles',
            schema,
            mode: 'on-demand',
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
            updateOptimistic: (data, updates) => {
                return {
                    ...data,
                    ...updates,
                };
            },
        })
);
