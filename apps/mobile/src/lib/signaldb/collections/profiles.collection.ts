import { Collection } from '@signaldb/core';
import maverickReactivityAdapter from '@signaldb/maverickjs';

import { type DB } from '@jshare/db';

import { createAsyncStorageAdapter } from '~/lib/signaldb/asyncStoragePersistenceAdapter';

export const Profiles = new Collection<DB.Profile, string>({
    reactivity: maverickReactivityAdapter,
    persistence: createAsyncStorageAdapter({ name: 'Profiles' }),
});
