import maverickReactivityAdapter from '@signaldb/maverickjs';
import { SyncManager } from '@signaldb/sync';

import type { CollectionSyncSettings } from '@jshare/sync';

import { createAsyncStorageAdapter } from '~/lib/signaldb/asyncStoragePersistenceAdapter';
import { trpcUniversal } from '~/lib/trpc';

export const syncManager = new SyncManager<CollectionSyncSettings>({
    reactivity: maverickReactivityAdapter,
    persistenceAdapter: (name) => createAsyncStorageAdapter({ name }),
    pull: async ({ model }, { lastFinishedSyncStart }) => {
        console.log('PULL START', model, lastFinishedSyncStart);
        const changes = await trpcUniversal.sync.pull.query({
            model,
            since: lastFinishedSyncStart,
        });
        console.log('PULL DONE', model, changes);

        return { changes };
    },
    push: async ({ model }, { changes }) => {
        console.log('PUSH START', model);
        await trpcUniversal.sync.push.mutate({
            model,
            changes: changes as any,
        });
        console.log('PUSH DONE', model);
    },
    registerRemoteChange: (collectionOptions, onChange) => {
        // …
    },
    debounceTime: 1000,
    autostart: true,
});
