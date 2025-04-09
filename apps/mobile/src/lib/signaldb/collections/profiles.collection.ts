import { Collection } from '@signaldb/core';
import maverickReactivityAdapter from '@signaldb/maverickjs';

import { zDB, type DB } from '@jshare/db';

import { createAsyncStorageAdapter } from '~/lib/signaldb/asyncStoragePersistenceAdapter';

export const Profiles = new Collection<DB.Profile, string>({
    persistence: createAsyncStorageAdapter({
        name: 'profile',
        schema: zDB.models.ProfileSchema.required(),
    }),
    reactivity: maverickReactivityAdapter,
});
