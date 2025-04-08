import AsyncStorage from '@react-native-async-storage/async-storage';
import { createPersistenceAdapter } from '@signaldb/core';
import SuperJSON from 'superjson';

export const createAsyncStorageAdapter = <T extends { id: I } & Record<string, any>, I>(
    collectionName: string
) => {
    const key = `asyncStorageAdapter:${collectionName}`;

    /**
     * Retrieves items from AsyncStorage and deserializes them.
     *
     * @returns The deserialized items from AsyncStorage.
     */
    async function getItems(): Promise<T[]> {
        const value = await AsyncStorage.getItem(key);
        return SuperJSON.parse<T[]>(value ?? '[]');
    }

    /**
     * Serializes items and saves them to AsyncStorage.
     *
     * @param items The items to save.
     */
    async function saveItems(items: T[]) {
        const value = SuperJSON.stringify(items);
        await AsyncStorage.setItem(key, value);
    }

    return createPersistenceAdapter<T, I>({
        async register() {},
        async load() {
            const items = await getItems();
            return { items };
        },
        async save(items, { added, modified, removed }) {
            const currentItems = await getItems();
            added.forEach((item) => {
                currentItems.push(item);
            });
            modified.forEach((item) => {
                const index = currentItems.findIndex(({ id }) => id === item.id);
                /* istanbul ignore if -- @preserve */
                if (index === -1) throw new Error(`Item with ID ${item.id as string} not found`);
                currentItems[index] = item;
            });
            removed.forEach((item) => {
                const index = currentItems.findIndex(({ id }) => id === item.id);
                /* istanbul ignore if -- @preserve */
                if (index === -1) throw new Error(`Item with ID ${item.id as string} not found`);
                currentItems.splice(index, 1);
            });
            await saveItems(currentItems);
        },
    });
};
