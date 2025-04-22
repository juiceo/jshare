import { atom, type Atom, type Getter, type PrimitiveAtom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import { debounce, matches, omit } from 'lodash';

import type { CollectionDocument } from '~/lib/collections/CollectionDocument';
import type { DbDocument, DbDocumentStore } from '~/lib/collections/types';
import { jotaiStore } from '~/wrappers/JotaiProvider';

export type CollectionAPI<T extends DbDocument> = {
    find: (queries: Partial<T>[]) => Promise<T[]>;
    update: (id: string, data: Partial<T>) => Promise<T | undefined>;
};

export type DocumentCollectionArgs<
    TDocument extends DbDocument,
    TUpdate extends object,
    TInsert extends object,
    TTransformed extends CollectionDocument<TDocument> = CollectionDocument<TDocument>,
> = {
    name: string;
    store: PrimitiveAtom<DbDocumentStore<TDocument, TUpdate, TInsert>>;
    api: CollectionAPI<TDocument>;
    transformer: (doc: TDocument, getter: Getter) => TTransformed;
    defaults: () => TDocument;
};

type QueryMetadata<TDocument extends DbDocument> = {
    key: string;
    query: Partial<TDocument>;
    status: 'pending' | 'in-progress' | 'finished' | 'error';
    executedAt: Date | null;
};

export class DocumentCollection<
    TDocument extends DbDocument,
    TUpdate extends object,
    TInsert extends object,
    TDocumentTransformed extends CollectionDocument<TDocument> = CollectionDocument<TDocument>,
> {
    name: string;
    store: PrimitiveAtom<DbDocumentStore<TDocument, TUpdate, TInsert>>;
    api: CollectionAPI<TDocument>;
    transformer: ((doc: TDocument, getter: Getter) => TDocumentTransformed) | undefined;

    queries: Record<string, QueryMetadata<TDocument>>;
    staleTime: number;
    flushUpdates: () => void;

    _findByIdAtoms: Record<string, Atom<TDocumentTransformed | undefined>>;
    _findManyAtoms: Record<string, Atom<TDocumentTransformed[]>>;
    _originalDocs: Record<string, TDocument>;
    _docs: PrimitiveAtom<Record<string, TDocument>>;
    _updates: PrimitiveAtom<Record<string, Partial<TDocument>>>;
    _deletes: PrimitiveAtom<Record<string, boolean>>;

    constructor(args: DocumentCollectionArgs<TDocument, TUpdate, TInsert, TDocumentTransformed>) {
        this.name = args.name;
        this.store = args.store;
        this.api = args.api;
        this.transformer = args.transformer;
        this.queries = {};
        this.staleTime = 1000 * 15; // 15 seconds
        this.flushUpdates = debounce(this._flushUpdates.bind(this), 1000, {
            maxWait: 15_000,
        });

        this._findByIdAtoms = {};
        this._findManyAtoms = {};
        this._originalDocs = {};
        this._docs = atom({});
        this._updates = atom({});
        this._deletes = atom({});
    }

    private transform(doc: TDocument, getter: Getter): TDocumentTransformed {
        return this.transformer
            ? this.transformer(doc, getter)
            : (doc as unknown as TDocumentTransformed);
    }

    private async fetchQueryResults(where: Partial<TDocument>) {
        const queryKey = JSON.stringify(where);
        const query = this.queries[queryKey];

        if (query?.status === 'in-progress') {
            console.log('query in progress');
            return;
        }

        if (query?.status === 'finished') {
            const executedTimestamp = query.executedAt?.valueOf() ?? 0;
            if (executedTimestamp + this.staleTime > new Date().valueOf()) {
                console.log('query not stale');
                return;
            }
        }

        this.queries[queryKey] = {
            key: queryKey,
            query: where,
            status: 'pending',
            executedAt: null,
        };

        setTimeout(() => {
            const pendingQueries = Object.values(this.queries).filter(
                (q) => q.status === 'pending'
            );
            if (pendingQueries.length === 0) return;
            for (const query of pendingQueries) {
                this.queries[query.key].status = 'in-progress';
            }
            const queries = pendingQueries.map((q) => q.query);
            console.log('fetchQueryResults', this.name, queries);
            this.api
                .find(queries)
                .then((res) => {
                    for (const query of pendingQueries) {
                        this.queries[query.key].status = 'finished';
                        this.queries[query.key].executedAt = new Date();
                    }
                    this.registerDocuments(res);
                })
                .catch(() => {
                    for (const query of pendingQueries) {
                        this.queries[query.key].status = 'error';
                        this.queries[query.key].executedAt = new Date();
                    }
                    return [];
                });
        }, 1);
    }

    private async _flushUpdates() {
        await Promise.all(
            Object.entries(jotaiStore.get(this._updates)).map(([id, data]) => {
                jotaiStore.set(this._docs, (prev) => {
                    return {
                        ...prev,
                        [id]: {
                            ...prev[id],
                            ...data,
                        },
                    };
                });
                return this.api
                    .update(id, data)
                    .then((res) => {
                        if (!res) return;
                        jotaiStore.set(this._updates, (prev) => omit(prev, id));
                        this.registerDocuments(res);
                    })
                    .catch(() => {
                        jotaiStore.set(this._docs, (prev) => {
                            return {
                                ...prev,
                                [id]: this._originalDocs[id],
                            };
                        });
                    });
            })
        );
    }

    registerDocuments(docs: TDocument | TDocument[]) {
        const docsArray = Array.isArray(docs) ? docs : [docs];
        for (const doc of docsArray) {
            this._originalDocs[doc.id] = doc;
        }
        jotaiStore.set(this._docs, (prev) => {
            const newDocs = { ...prev };
            for (const doc of docsArray) {
                newDocs[doc.id] = doc;
            }
            return newDocs;
        });
    }

    registerUpdate(id: string, data: Partial<TDocument>) {
        jotaiStore.set(this._updates, (prev) => {
            return {
                ...prev,
                [id]: {
                    ...prev[id],
                    ...data,
                },
            };
        });
    }

    registerDelete(id: string) {
        jotaiStore.set(this._deletes, (prev) => {
            prev[id] = true;
            return prev;
        });
    }

    resetDocument(id: string) {
        const original = this._originalDocs[id];

        if (!original) {
            jotaiStore.set(this._docs, (prev) => {
                delete prev[id];
                return prev;
            });
        }

        this.registerDocuments(original);
    }

    invalidateDoc(id: string) {
        const allQueries = Object.values(this.queries).filter((q) => q.query[id]);
        for (const query of allQueries) {
            if (matches(query.query)({ id })) {
                delete this.queries[query.key];
            }
        }
    }

    invalidateQuery(where: Partial<TDocument>) {
        const queryKey = JSON.stringify(where);
        delete this.queries[queryKey];
    }

    invalidateAllQueries() {
        this.queries = {};
    }

    findById(id: string): Atom<TDocumentTransformed | undefined> {
        this.fetchQueryResults({ id } as Partial<TDocument>);

        const docAtom = selectAtom(this._docs, (docs) => docs[id]);
        const updatesAtom = selectAtom(this._updates, (updates) => updates[id]);
        const deletesAtom = selectAtom(this._deletes, (deletes) => deletes[id]);

        if (!this._findByIdAtoms[id]) {
            this._findByIdAtoms[id] = atom((get) => {
                console.log('Evaluate findById', this.name, id);
                const doc = get(docAtom);
                if (!doc) return undefined;
                const isDeleted = get(deletesAtom);
                if (isDeleted) return undefined;
                const updates = get(updatesAtom);

                return this.transform(updates ? { ...doc, ...updates } : doc, get);
            });
        }

        return this._findByIdAtoms[id];
    }

    findMany(where: Partial<TDocument>): Atom<TDocumentTransformed[]> {
        console.log('findMany INIT', this.name);
        const key = JSON.stringify(where);
        this.fetchQueryResults(where);

        if (!this._findManyAtoms[key]) {
            const docsAtom = selectAtom(this._docs, (docs) => Object.values(docs));
            this._findManyAtoms[key] = atom((get) => {
                console.log('Evaluate findMany', this.name, where);
                const docs = get(docsAtom);
                const updates = get(this._updates);
                const deletes = get(this._deletes);

                return docs.reduce((results, doc) => {
                    if (deletes[doc.id]) return results;
                    const docWithUpdates = updates[doc.id] ? { ...doc, ...updates[doc.id] } : doc;
                    if (matches(where)(docWithUpdates)) {
                        results.push(this.transform(docWithUpdates, get));
                    }
                    return results;
                }, [] as TDocumentTransformed[]);
            });
        }

        return this._findManyAtoms[key];
    }

    update(id: string, data: TUpdate): void {
        console.log('update');
        this.registerUpdate(id, data);
        this.flushUpdates();
    }
}
