import { makeAutoObservable } from 'mobx';

import type { DocumentStore } from '~/lib/store/DocumentStore';
import type {
    InferDataType,
    InferFunctions,
    InferResolvers,
    InferUpdateInput,
} from '~/lib/store/types';

export class Document<TStore extends DocumentStore<any, any, any, any, any>> {
    id: string;
    data: InferDataType<TStore>;
    private store: TStore;
    private resolvers?: InferResolvers<TStore>;

    constructor(store: TStore, data: InferDataType<TStore>, resolvers?: InferResolvers<TStore>) {
        this.store = store;
        this.id = data.id;
        this.data = data;
        this.resolvers = resolvers;

        makeAutoObservable(this);
    }

    get snapshot(): InferDataType<TStore> {
        return {
            ...this.data,
        };
    }

    set(data: Partial<InferDataType<TStore>>) {
        this.data = { ...this.data, ...data };
    }

    update(updates: InferUpdateInput<TStore['api']>) {
        this.store.update(this.id, updates);
    }

    get<K extends keyof InferResolvers<TStore>>(key: K): ReturnType<InferResolvers<TStore>[K]> {
        if (!this.resolvers) {
            throw new Error(`No resolvers defined for collection ${this.store.name}`);
        }
        if (!(key in this.resolvers)) {
            throw new Error(
                `Resolver ${key.toString()} not found for collection ${this.store.name}`
            );
        }
        return this.resolvers[key](this.data);
    }

    action<K extends keyof InferFunctions<TStore>>(
        key: K,
        args: Parameters<InferFunctions<TStore>[K]>[0]
    ) {
        if (!this.store.functions) {
            throw new Error(`No functions defined for collection ${this.store.name}`);
        }
        if (!(key in this.store.functions)) {
            throw new Error(
                `Function ${key.toString()} not found for collection ${this.store.name}`
            );
        }

        return this.store.functions[key](args, this);
    }
}
