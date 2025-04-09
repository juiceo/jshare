import maverickReactivityAdapter from '@signaldb/maverickjs';
import { SyncManager } from '@signaldb/sync';
import { z } from 'zod';

import type { CollectionSyncSettings } from '@jshare/sync';

import { createAsyncStorageAdapter } from '~/lib/signaldb/asyncStoragePersistenceAdapter';
import { trpcUniversal } from '~/lib/trpc';

// const SYNC_MANAGER_API_BASE_PATH = '/api/sync';
export const syncManager = new SyncManager<CollectionSyncSettings>({
    reactivity: maverickReactivityAdapter,
    persistenceAdapter: (name) => createAsyncStorageAdapter({ name, schema: z.any() }),
    pull: async ({ model }, { lastFinishedSyncStart }) => {
        console.log('PULL', model, lastFinishedSyncStart);
        const changes = await trpcUniversal.sync.pull.query({
            model,
            since: lastFinishedSyncStart,
        });

        return { changes };
    },
    push: async ({ model }, { changes }) => {
        console.log('PUSH', model, changes);
        await trpcUniversal.sync.push.mutate({
            model,
            changes: changes as any,
        });
    },
    registerRemoteChange: (collectionOptions, onChange) => {
        // …
    },
    debounceTime: 1000,
});
