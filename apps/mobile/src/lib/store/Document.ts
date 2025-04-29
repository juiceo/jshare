import { makeAutoObservable } from 'mobx';

import type { DocumentStore } from '~/lib/store/DocumentStore';
import type { ResolverMap } from '~/lib/store/types';

export class Document<
    T extends { id: string },
    TResolvers extends ResolverMap<T>,
    TIndexes extends (keyof T)[],
> {
    id: string;
    data: T;
    private store: DocumentStore<T, TResolvers, TIndexes>;
    private resolvers?: TResolvers;

    constructor(store: DocumentStore<T, TResolvers, TIndexes>, data: T, resolvers?: TResolvers) {
        this.store = store;
        this.id = data.id;
        this.data = data;
        this.resolvers = resolvers;

        makeAutoObservable(this);
    }

    get snapshot() {
        return {
            ...this.data,
        };
    }

    update(updates: Partial<T>) {
        this.data = { ...this.data, ...updates };
        this.store.update(this.id, updates);
    }

    get<K extends keyof TResolvers>(key: K): ReturnType<TResolvers[K]> {
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

    dispose() {
        /**
         * TODO: Cleanup
         */
    }
}
