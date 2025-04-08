import { Collection } from '@signaldb/core';

import type { DB } from '@jshare/db';

import { createAsyncStorageAdapter } from '~/lib/signaldb/asyncStoragePersistenceAdapter';

const profiles = new Collection<DB.Profile & { id: string }, string>({
    persistence: createAsyncStorageAdapter('profiles'),
    transform: (item) => ({
        ...item,
        id: item.userId,
    }),
});

export default profiles;
