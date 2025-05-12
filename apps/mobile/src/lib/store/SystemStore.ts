import { addNetworkStateListener, NetworkState } from 'expo-network';
import { makeAutoObservable, runInAction } from 'mobx';

import { hotReloadable } from '~/lib/store/util';

type PendingDeepLink = {
    type: 'invite';
    code: string;
};

export class SystemStoreInstance {
    private networkState: NetworkState | null = null;
    private _pendingDeepLink: PendingDeepLink | null = null;

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

    get pendingDeepLink() {
        return this._pendingDeepLink;
    }

    setPendingDeepLink(deepLink: PendingDeepLink | null) {
        this._pendingDeepLink = deepLink;
    }
}

export const SystemStore = hotReloadable('__systemStore', () => new SystemStoreInstance());
