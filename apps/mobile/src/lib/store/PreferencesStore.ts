import { sortBy, uniq } from 'lodash';
import { makeAutoObservable } from 'mobx';

import type { DB } from '@jshare/db';

import { hotReloadable } from '~/lib/store/util';

export class PreferencesStoreInstance {
    private usedCurrencies: {
        currency: DB.CurrencyCode;
        timestamp: number;
    }[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    get recentCurrencies() {
        return uniq(sortBy(this.usedCurrencies, 'timestamp', 'desc').map((c) => c.currency)).slice(
            0,
            3
        );
    }

    addUsedCurrency(currency: DB.CurrencyCode) {
        this.usedCurrencies.push({
            currency,
            timestamp: Date.now(),
        });
    }

    reset() {
        this.usedCurrencies = [];
    }
}

export const PreferencesStore = hotReloadable(
    '__preferencesStore',
    () => new PreferencesStoreInstance()
);
