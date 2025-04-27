import { type Getter } from 'jotai';

import type { DocumentCollection } from '~/lib/collections/Collection';
import type { DbDocument } from '~/lib/collections/types';

export class QueryResult<T extends DbDocument, TUpdate extends object> {
    data: T | null;
    getter: Getter;
    collection: DocumentCollection<T, TUpdate, any>;
    query: Partial<T> | null;

    constructor(
        data: T | null,
        getter: Getter,
        collection: DocumentCollection<T, TUpdate, any>,
        query: Partial<T> | null
    ) {
        this.data = data;
        this.getter = getter;
        this.collection = collection;
        this.query = query;
    }

    update(updates: TUpdate) {
        if (!this.data) return;
        this.collection.update(this.data.id, updates);
    }

    refetch() {
        if (!this.query) return;
        this.collection.registerQuery(this.query);
    }
}

export class QueryResultMany<T extends DbDocument> {
    data: T[];
    getter: Getter;
    collection: DocumentCollection<T, any, any>;
    query: Partial<T> | null;

    constructor(
        data: T[],
        getter: Getter,
        collection: DocumentCollection<T, any, any>,
        query: Partial<T> | null
    ) {
        this.data = data;
        this.getter = getter;
        this.collection = collection;
        this.query = query;
    }

    refetch() {
        if (!this.query) return;
        return this.collection.registerQuery(this.query);
    }
}
