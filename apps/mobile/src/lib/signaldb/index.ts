import { Profiles } from '~/lib/signaldb/collections/profiles.collection';
import { syncManager } from '~/lib/signaldb/SyncManager';

export { Profiles } from './collections/profiles.collection';
export { syncManager } from './SyncManager';
export { useLocalDB } from './useLocalDB';

export const initSignalDB = async () => {
    return Promise.all([Profiles.isReady, syncManager.isReady]).then(async () => {
        syncManager.addCollection(Profiles, {
            name: 'profile',
            model: 'Profile',
        });

        await syncManager
            .syncAll()
            .then(() => {
                console.log('Sync started');
            })
            .catch((error) => {
                console.error('Failed to start sync', error);
            });
        console.log('SignalDB initialized');
    });
};
