import AsyncStorage from '@react-native-async-storage/async-storage';
import SuperJSON from 'superjson';

import type { CollectionState } from '~/lib/collections/Collection';

/**
 * Bump CACHE_VERSION when stored data should be cleared
 */
const CACHE_VERSION = 1;
type PersistedDataWithVersion<T> = {
    version: number;
    data: T;
};

export const getCollectionPersistKey = (name: string) => {
    return `Collection::${name}`;
};

export const hydrateCollectionState = async <T extends CollectionState<any, any, any>>(
    name: string
): Promise<T | null> => {
    const key = getCollectionPersistKey(name);
    const data = await AsyncStorage.getItem(key);
    if (!data) return null;
    try {
        const parsed = SuperJSON.parse<PersistedDataWithVersion<T>>(data);
        if (parsed.version !== CACHE_VERSION) {
            await AsyncStorage.removeItem(key);
            return null;
        }
        return parsed.data;
    } catch {
        return null;
    }
};

export const persistCollectionState = async <T extends CollectionState<any, any, any>>(
    name: string,
    state: T
): Promise<void> => {
    const key = getCollectionPersistKey(name);
    await AsyncStorage.setItem(key, SuperJSON.stringify({ version: CACHE_VERSION, data: state }));
};
