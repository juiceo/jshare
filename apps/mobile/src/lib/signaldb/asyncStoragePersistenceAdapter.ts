import AsyncStorage from '@react-native-async-storage/async-storage';
import { createPersistenceAdapter } from '@signaldb/core';
import SuperJSON from 'superjson';
import { z } from 'zod';

export const createAsyncStorageAdapter = <TSchema extends z.ZodSchema>(args: {
    name: string;
    schema: TSchema;
}) => {
    const key = `asyncStorageAdapter::${args.name}`;
    type Data = z.infer<TSchema>;
    /**
     * Retrieves items from AsyncStorage and deserializes them.
     *
     * @returns The deserialized items from AsyncStorage.
     */
    async function getItems(): Promise<Data[]> {
        const value = await AsyncStorage.getItem(key);
        console.log('getItems');
        const items = SuperJSON.parse<any[]>(value ?? '[]');
        console.log('parsed items');

        if (!items) return [];

        return items
            .map((item) => {
                const parsed = args.schema.safeParse(item);
                return parsed.success ? parsed.data : null;
            })
            .filter((item) => !!item);
    }

    /**
     * Serializes items and saves them to AsyncStorage.
     *
     * @param items The items to save.
     */
    async function saveItems(items: Data[]) {
        const value = SuperJSON.stringify(items);
        await AsyncStorage.setItem(key, value);
    }

    return createPersistenceAdapter<Data, Data['id']>({
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
