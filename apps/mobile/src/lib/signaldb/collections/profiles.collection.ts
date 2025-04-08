import { Collection } from '@signaldb/core';

import type { DB } from '@jshare/db';

import { createAsyncStorageAdapter } from '~/lib/signaldb/asyncStoragePersistenceAdapter';

const profiles = new Collection<DB.Profile, string>({
    persistence: createAsyncStorageAdapter('profiles'),
});

export default profiles;
