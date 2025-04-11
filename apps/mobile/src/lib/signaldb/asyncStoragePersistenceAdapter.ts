import AsyncStorage from '@react-native-async-storage/async-storage';
import { createPersistenceAdapter } from '@signaldb/core';

export const createAsyncStorageAdapter = (args: { name: string }) => {
    const key = `asyncStorageAdapter::${args.name}`;
    /**
     * Retrieves items from AsyncStorage and deserializes them.
     *
     * @returns The deserialized items from AsyncStorage.
     */
    async function getItems(): Promise<any[]> {
        const value = await AsyncStorage.getItem(key);
        const items = JSON.parse(value ?? '[]');
        return items ?? [];
    }

    /**
     * Serializes items and saves them to AsyncStorage.
     *
     * @param items The items to save.
     */
    async function saveItems(items: any[]) {
        const value = JSON.stringify(items);
        await AsyncStorage.setItem(key, value);
    }

    return createPersistenceAdapter<any, string>({
        async register() {},
        async load() {
            console.log('START LOAD', args.name);
            const items = await getItems();
            console.log('LOAD DONE', args.name, items.length);
            return { items };
        },
        async save(_, changes) {
            console.log('START SAVE', args.name, changes);
            let items = await getItems();
            for (const addition of changes.added) {
                items.push(addition);
            }
            for (const modification of changes.modified) {
                items = items.map((item) => {
                    if (item.id === modification.id) {
                        return modification;
                    }
                    return item;
                });
            }
            for (const removal of changes.removed) {
                items = items.filter((item) => {
                    if (item.id === removal.id) {
                        return false;
                    }
                    return true;
                });
            }
            await saveItems(items);
        },
    });
};
