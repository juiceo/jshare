import { Images } from '~/lib/signaldb/collections/images.collection';
import { Profiles } from '~/lib/signaldb/collections/profiles.collection';
import { syncManager } from '~/lib/signaldb/SyncManager';

export { Profiles } from './collections/profiles.collection';
export { useModel } from './useModel';

export const initSignalDB = async () => {
    return Promise.all([Profiles.isReady, Images.isReady]).then(async () => {
        syncManager.addCollection(Profiles, {
            name: 'profile',
            model: 'Profile',
        });

        syncManager.addCollection(Images, {
            name: 'image',
            model: 'Image',
        });
        syncManager.startAll();

        console.log('SignalDB initialized');
    });
};
