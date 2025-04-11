import { Collection } from '@signaldb/core';
import maverickReactivityAdapter from '@signaldb/maverickjs';

import { type DB } from '@jshare/db';

import { createAsyncStorageAdapter } from '~/lib/signaldb/asyncStoragePersistenceAdapter';

export const Images = new Collection<DB.Image, string>({
    reactivity: maverickReactivityAdapter,
    persistence: createAsyncStorageAdapter({ name: 'Images' }),
});
