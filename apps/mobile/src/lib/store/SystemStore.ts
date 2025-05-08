import { addNetworkStateListener, NetworkState } from 'expo-network';
import { makeAutoObservable } from 'mobx';

import { hotReloadable } from '~/lib/store/util';

export class SystemStoreInstance {
    networkState: NetworkState | null = null;

    constructor() {
        makeAutoObservable(this);

        addNetworkStateListener((state) => {
            console.log(
                `Network state changed - type: ${state.type} - isConnected: ${state.isConnected} - isInternetReachable: ${state.isInternetReachable}`
            );
            this.networkState = state;
        });
    }
}

export const SystemStore = hotReloadable('__systemStore', () => new SystemStoreInstance());
