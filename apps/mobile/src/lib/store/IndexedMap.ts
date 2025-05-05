import { isEqual } from 'lodash';
import { action, makeObservable, observable } from 'mobx';

import { Document } from '~/lib/store/Document';
import type { DocumentStore } from '~/lib/store/DocumentStore';
import type { InferDataType, InferIndexedKeys } from '~/lib/store/types';

export class IndexedMap<TStore extends DocumentStore<any, any, any, any, any>> {
    updatedAt: number = Date.now();
    private items = new Map<string, Document<TStore>>();
    private indexes: Map<keyof InferDataType<TStore>, Map<any, Set<Document<TStore>>>> = new Map();
    private readonly indexedKeys: (keyof InferIndexedKeys<TStore>)[];

    constructor(indexedKeys: InferIndexedKeys<TStore>) {
        makeObservable<this, 'items'>(this, {
            items: observable,
            add: action,
            update: action,
            delete: action,
            updatedAt: observable,
        });
        this.indexedKeys = indexedKeys;
    }

    get(id: string): Document<TStore> | undefined {
        return this.items.get(id);
    }

    getAll(): Document<TStore>[] {
        return Array.from(this.items.values());
    }

    has(id: string): boolean {
        return this.items.has(id);
    }

    values(): IterableIterator<Document<TStore>> {
        return this.items.values();
    }

    keys(): IterableIterator<string> {
        return this.items.keys();
    }

    clear() {
        this.items.clear();
        this.indexes.clear();
    }

    find(query: Partial<InferDataType<TStore>>): Document<TStore>[] {
        const queryKeys = Object.keys(query) as (keyof InferDataType<TStore>)[];
        if (queryKeys.length === 0) return Array.from(this.items.values());

        // Separate indexed and unindexed query parts
        const indexed: [keyof InferDataType<TStore>, any][] = [];
        const unindexed: [keyof InferDataType<TStore>, any][] = [];

        for (const key of queryKeys) {
            if (this.indexes.has(key)) {
                indexed.push([key, query[key]]);
            } else {
                unindexed.push([key, query[key]]);
            }
        }

        let candidateSet: Set<Document<TStore>> | null = null;

        for (const [key, val] of indexed) {
            const keyIndex = this.indexes.get(key);
            const docsForKey = keyIndex?.get(val);

            if (!docsForKey) {
                return []; // No matches for this indexed condition
            }

            if (!candidateSet) {
                candidateSet = new Set(docsForKey);
            } else {
                candidateSet = new Set(
                    [...candidateSet].filter((doc: Document<TStore>) => {
                        return docsForKey.has(doc);
                    })
                );
                if (candidateSet.size === 0) return [];
            }
        }

        let result: Document<TStore>[];

        if (candidateSet) {
            result = [...candidateSet];
        } else {
            result = Array.from(this.items.values());
        }

        if (unindexed.length > 0) {
            result = result.filter((doc) => {
                return unindexed.every(([key, val]) => doc.data[key] === val);
            });
        }

        return result;
    }

    add(id: string, doc: Document<TStore>): void {
        if (!doc) return;
        this.updatedAt = Date.now();
        const existing = this.items.get(id);
        if (existing) {
            if (isEqual(existing.data, doc.data)) return;
            this.unindex(existing);
        }

        this.items.set(id, doc);
        this.index(doc);
    }

    init(docs: Document<TStore>[]) {
        for (const doc of docs) {
            this.add(doc.id, doc);
        }
    }

    delete(id: string): Document<TStore> | null {
        this.updatedAt = Date.now();
        const existing = this.items.get(id);
        if (!existing) return null;

        this.unindex(existing);
        this.items.delete(id);
        return existing;
    }

    update(id: string, data: InferDataType<TStore>) {
        this.updatedAt = Date.now();
        const doc = this.items.get(id);
        if (!doc) return;
        if (isEqual(doc.data, data)) return;
        this.unindex(doc);
        doc.data = data;
        this.index(doc);
    }

    private index(doc: Document<TStore>) {
        for (const key of this.indexedKeys) {
            const val = doc.data[key];
            if (val == null) continue;

            let keyIndex = this.indexes.get(key);
            if (!keyIndex) {
                keyIndex = new Map();
                this.indexes.set(key, keyIndex);
            }

            let docSet = keyIndex.get(val);
            if (!docSet) {
                docSet = new Set();
                keyIndex.set(val, docSet);
            }

            docSet.add(doc);
        }
    }

    private unindex(doc: Document<TStore>) {
        for (const key of this.indexedKeys) {
            const val = doc.data[key];
            if (val == null) continue;

            const keyIndex = this.indexes.get(key);
            const docSet = keyIndex?.get(val);
            docSet?.delete(doc);

            if (docSet && docSet.size === 0) {
                keyIndex?.delete(val);
            }

            if (keyIndex && keyIndex.size === 0) {
                this.indexes.delete(key);
            }
        }
    }
}
