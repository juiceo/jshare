import { addNetworkStateListener, NetworkState } from 'expo-network';
import { makeAutoObservable, runInAction } from 'mobx';

import { hotReloadable } from '~/lib/store/util';

export class SystemStoreInstance {
    private networkState: NetworkState | null = null;

    constructor() {
        makeAutoObservable(this);

        addNetworkStateListener((state) => {
            runInAction(() => {
                this.networkState = state;
            });
        });
    }

    get isConnected() {
        return this.networkState?.isInternetReachable ?? false;
    }

    setConnected(connected: boolean) {
        if (this.networkState) {
            this.networkState.isInternetReachable = connected;
        }
    }
}

export const SystemStore = hotReloadable('__systemStore', () => new SystemStoreInstance());
