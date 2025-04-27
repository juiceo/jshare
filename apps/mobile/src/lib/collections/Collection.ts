import { InteractionManager } from 'react-native';
import { castDraft, produce } from 'immer';
import { atom, type Atom, type PrimitiveAtom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import { debounce, get, isEqual, matches, pick } from 'lodash';

import { QueryResult, QueryResultMany } from '~/lib/collections/QueryResult';
import type { DbDocument } from '~/lib/collections/types';
import { hydrateCollectionState, persistCollectionState } from '~/lib/collections/util';
import { jotaiStore } from '~/wrappers/JotaiProvider';

/**
 * TODOs:
 *
 * - Ability to insert documents
 * - Cache buster key support (use zod schemas for hydration?)
 * - Ability to delete documents
 * - Remove documents from local cache if no longer found in database
 * - Loading state for documents
 *
 */

export type CollectionAPI<T extends DbDocument, TUpdate extends object, TInsert extends object> = {
    find: (queries: Partial<T>[]) => Promise<T[]>;
    update: (id: string, data: TUpdate) => Promise<T>;
    create: (data: TInsert) => Promise<T>;
};

export type DocumentCollectionArgs<
    TDocument extends DbDocument,
    TUpdate extends object,
    TInsert extends object,
> = {
    name: string;
    api: CollectionAPI<TDocument, TUpdate, TInsert>;
    defaults: () => TDocument;
};

export type QueryMetadata<TDocument extends DbDocument> = {
    key: string;
    query: Partial<TDocument>;
    status: 'pending' | 'in-progress' | 'finished' | 'error';
    executedAt: Date | null;
};

export type CollectionState<
    TDocument extends DbDocument,
    TUpdate extends object,
    TInsert extends object,
> = {
    originalDocs: Record<string, TDocument>;
    docs: Record<string, TDocument>;
    updates: Record<string, TUpdate>;
    deletes: Record<string, boolean>;
    inserts: Record<string, { doc: TDocument; data: TInsert }>;
};

export class DocumentCollection<
    TDocument extends DbDocument,
    TUpdate extends object,
    TInsert extends object,
> {
    name: string;
    api: CollectionAPI<TDocument, TUpdate, TInsert>;
    queries: PrimitiveAtom<Record<string, QueryMetadata<TDocument>>>;
    staleTime: number;
    flushUpdatesDebounced: () => void;
    flushInsertsDebounced: () => void;
    persistState: () => void;
    defaults: () => TDocument;

    pendingUpdates: string[];
    pendingInserts: string[];

    findOneQueryResults: Record<string, Atom<QueryResult<TDocument, TUpdate>>>;
    findManyQueryResults: Record<string, Atom<any>>;

    __state: PrimitiveAtom<CollectionState<TDocument, TUpdate, TInsert>>;
    state: PrimitiveAtom<CollectionState<TDocument, TUpdate, TInsert>>;
    ready: Promise<void>;

    constructor(args: DocumentCollectionArgs<TDocument, TUpdate, TInsert>) {
        this.name = args.name;
        this.api = args.api;
        this.queries = atom({});
        this.defaults = args.defaults;
        this.staleTime = 15_000; // 15 seconds
        this.flushUpdatesDebounced = debounce(this.flushUpdates.bind(this), 1000, {
            maxWait: 15_000,
        });

        this.flushInsertsDebounced = debounce(this.flushInserts.bind(this), 1000, {
            maxWait: 15_000,
        });

        this.pendingUpdates = [];
        this.pendingInserts = [];
        this.findOneQueryResults = {};
        this.findManyQueryResults = {};

        this.__state = atom({
            originalDocs: {},
            docs: {},
            updates: {},
            deletes: {},
            inserts: {},
        });

        this.state = atom(
            (get) => {
                return get(this.__state);
            },
            (get, set, update) => {
                jotaiStore.set(this.__state, update);
                this.persistState();
            }
        );

        this.persistState = debounce(this._persistState.bind(this), 1000, {
            maxWait: 15_000,
        });

        this.ready = this.hydrateState();
    }

    private async hydrateState() {
        const hydratedState = await hydrateCollectionState(this.name);
        if (!hydratedState) return;
        jotaiStore.set(this.state, hydratedState);
    }

    private async _persistState() {
        InteractionManager.runAfterInteractions(async () => {
            await persistCollectionState(this.name, jotaiStore.get(this.state));
        });
    }

    registerQuery(where: Partial<TDocument>): string {
        console.timeLog('registerQuery');
        const queryKey = JSON.stringify(where);
        const query = jotaiStore.get(this.queries)[queryKey];

        if (query?.status === 'in-progress') {
            return queryKey;
        }

        if (query?.status === 'finished') {
            const executedTimestamp = query.executedAt?.valueOf() ?? 0;
            if (executedTimestamp + this.staleTime > new Date().valueOf()) {
                return queryKey;
            }
        }

        jotaiStore.set(this.queries, (prev) => {
            return produce(prev, (draft) => {
                draft[queryKey] = {
                    key: queryKey,
                    query: castDraft(where),
                    status: 'pending',
                    executedAt: null,
                };
            });
        });

        setTimeout(() => {
            const queries = jotaiStore.get(this.queries);
            const pendingQueries = Object.values(queries).filter((q) => q.status === 'pending');
            if (pendingQueries.length === 0) return;
            jotaiStore.set(this.queries, (prev) => {
                return produce(prev, (draft) => {
                    for (const query of pendingQueries) {
                        draft[query.key].status = 'in-progress';
                    }
                });
            });
            this.fetchQueries(pendingQueries.map((q) => q.query));
        }, 1);

        return queryKey;
    }

    fetchQueries(queries: Partial<TDocument>[]): Promise<TDocument[]> {
        console.log(`fetchQueries::${this.name}`, queries);
        return this.api
            .find(queries)
            .then((res) => {
                console.log('FETCH SUCCESS');
                jotaiStore.set(this.queries, (prev) => {
                    return produce(prev, (draft) => {
                        for (const query of queries) {
                            const queryKey = JSON.stringify(query);
                            if (draft[queryKey]) {
                                draft[queryKey].status = 'finished';
                                draft[queryKey].executedAt = new Date();
                            }
                        }
                    });
                });
                this.registerDocuments(res);
                return res;
            })
            .catch(() => {
                console.log('FETCH ERROR');
                jotaiStore.set(this.queries, (prev) => {
                    return produce(prev, (draft) => {
                        for (const query of queries) {
                            const queryKey = JSON.stringify(query);
                            if (draft[queryKey]) {
                                draft[queryKey].status = 'error';
                                draft[queryKey].executedAt = new Date();
                            }
                        }
                    });
                });
                return [];
            });
    }

    fetchQuery(query: Partial<TDocument>): Promise<TDocument[]> {
        return this.fetchQueries([query]);
    }

    fetchById(id: string): Promise<TDocument | null> {
        return this.fetchQueries([{ id } as Partial<TDocument>]).then((res) => res[0] ?? null);
    }

    private async flushInserts() {
        console.log(`flushInserts::${this.name}`);
        const insertsToFlush = Object.entries(jotaiStore.get(this.state).inserts).filter(([id]) => {
            if (this.pendingInserts.includes(id)) return false;
            this.pendingInserts.push(id);
            return true;
        });

        await Promise.all(
            insertsToFlush.map(([id, { data }]) => {
                return this.api
                    .create(data)
                    .then((res) => {
                        if (!res) {
                            throw new Error('No response from create');
                        }
                        console.log('insert success');
                        this.pendingInserts = this.pendingInserts.filter((_id) => _id !== id);
                        jotaiStore.set(this.state, (prev) => {
                            return produce(prev, (draft) => {
                                delete draft.inserts[id];
                                draft.docs[res.id] = castDraft(res);
                                draft.originalDocs[res.id] = castDraft(res);
                            });
                        });
                    })
                    .catch(() => {
                        /**
                         * TODO: Figure out if insert should be retried or not based on error.
                         * Maybe max. N attempts and then remove
                         */
                        this.pendingInserts = this.pendingInserts.filter((_id) => _id !== id);
                    });
            })
        );
    }

    private async flushUpdates() {
        console.log(`flushUpdates::${this.name}`);
        const updatesToFlush = Object.entries(jotaiStore.get(this.state).updates).filter(([id]) => {
            if (this.pendingUpdates.includes(id)) return false;
            this.pendingUpdates.push(id);
            return true;
        });

        await Promise.all(
            updatesToFlush.map(([id, data]) => {
                console.log('RUN UPDATE', data);
                return this.api
                    .update(id, data)
                    .then((res) => {
                        if (!res) {
                            throw new Error('No response from update');
                        }
                        this.pendingUpdates = this.pendingUpdates.filter((_id) => _id !== id);
                        jotaiStore.set(this.state, (prev) => {
                            return produce(prev, (draft) => {
                                if (
                                    isEqual(
                                        draft.updates[id],
                                        pick(res, Object.keys(draft.updates[id]))
                                    )
                                ) {
                                    delete draft.updates[id];
                                }
                                draft.docs[id] = castDraft(res);
                                draft.originalDocs[id] = castDraft(res);
                            });
                        });
                    })
                    .catch(() => {
                        /**
                         * TODO: Figure out if update should be retried or not based on error.
                         * Maybe max. N attempts and then remove
                         */
                        this.pendingUpdates = this.pendingUpdates.filter((_id) => _id !== id);
                    });
            })
        );
    }

    registerDocuments(docs: TDocument | TDocument[]) {
        const docsArray = Array.isArray(docs) ? docs : [docs];
        jotaiStore.set(this.state, (prev) => {
            return produce(prev, (draft) => {
                for (const doc of docsArray) {
                    draft.originalDocs[doc.id] = castDraft(doc);
                    draft.docs[doc.id] = castDraft(doc);
                }
            });
        });
    }

    registerUpdate(id: string, data: TUpdate) {
        jotaiStore.set(this.state, (prev) => {
            return produce(prev, (draft) => {
                draft.updates[id] = {
                    ...draft.updates[id],
                    ...data,
                };
            });
        });
    }

    registerInsert(data: TInsert) {
        const doc: TDocument = {
            ...this.defaults(),
            ...data,
        };

        jotaiStore.set(this.state, (prev) => {
            return produce(prev, (draft) => {
                draft.inserts[doc.id] = castDraft({ doc, data });
            });
        });
    }

    registerDelete(id: string) {
        jotaiStore.set(this.state, (prev) => {
            return produce(prev, (draft) => {
                draft.deletes[id] = true;
            });
        });
    }

    resetDocument(id: string) {
        const original = jotaiStore.get(this.state).originalDocs[id];

        if (!original) {
            jotaiStore.set(this.state, (prev) => {
                return produce(prev, (draft) => {
                    delete draft.docs[id];
                });
            });
        }

        this.registerDocuments(original);
    }

    invalidateDoc(id: string) {
        const allQueries = Object.values(this.queries).filter((q) => q.query[id]);
        jotaiStore.set(this.queries, (prev) => {
            return produce(prev, (draft) => {
                for (const query of allQueries) {
                    if (matches(query.query)({ id })) {
                        delete draft[query.key];
                    }
                }
            });
        });
    }

    invalidateQuery(where: Partial<TDocument>) {
        const queryKey = JSON.stringify(where);
        jotaiStore.set(this.queries, (prev) => {
            return produce(prev, (draft) => {
                delete draft[queryKey];
            });
        });
    }

    invalidateAllQueries() {
        jotaiStore.set(this.queries, {});
    }

    findById(
        id: string | null | undefined,
        opts?: { noFetch: true }
    ): Atom<QueryResult<TDocument, TUpdate>> {
        console.log('findById');
        if (!id) {
            return atom((get) => {
                return new QueryResult(null, get, this, null);
            });
        }

        const query = { id } as Partial<TDocument>;
        const queryKey = JSON.stringify(query);
        if (!opts?.noFetch) {
            this.registerQuery(query);
        }

        if (!this.findOneQueryResults[queryKey]) {
            const docAtom = selectAtom(this.state, (state) => state.docs[id]);
            const updatesAtom = selectAtom(this.state, (state) => state.updates[id]);
            const deletesAtom = selectAtom(this.state, (state) => state.deletes[id]);

            this.findOneQueryResults[queryKey] = atom((get) => {
                console.log(`findOne::${this.name}`, id);
                const doc = get(docAtom);
                const isDeleted = get(deletesAtom);
                const updates = get(updatesAtom);
                const data = updates ? { ...doc, ...updates } : doc;
                return new QueryResult(isDeleted ? null : data, get, this, query);
            });
        }

        return this.findOneQueryResults[queryKey];
    }

    findMany(
        query: Partial<TDocument> | null | undefined,
        opts?: { noFetch: true }
    ): Atom<QueryResultMany<TDocument>> {
        if (!query) {
            return atom((get) => {
                return new QueryResultMany([], get, this, null);
            });
        }

        const queryKey = JSON.stringify(query);

        if (!opts?.noFetch) {
            this.registerQuery(query);
        }

        if (!this.findManyQueryResults[queryKey]) {
            const docsAtom = selectAtom(this.state, (state) => Object.values(state.docs));
            const updatesAtom = selectAtom(this.state, (state) => state.updates);
            const deletesAtom = selectAtom(this.state, (state) => state.deletes);

            this.findManyQueryResults[queryKey] = atom((get) => {
                console.log(`findMany::${this.name}`, query);
                const docs = get(docsAtom);
                const updates = get(updatesAtom);
                const deletes = get(deletesAtom);

                const data = docs.reduce((results, doc) => {
                    if (deletes[doc.id]) return results;
                    const docWithUpdates = updates[doc.id] ? { ...doc, ...updates[doc.id] } : doc;
                    if (matches(query)(docWithUpdates)) {
                        results.push(docWithUpdates);
                    }
                    return results;
                }, [] as TDocument[]);

                return new QueryResultMany(data, get, this, query);
            });
        }

        return this.findManyQueryResults[queryKey];
    }

    async update(id: string, data: TUpdate, opts?: { immediate: boolean }): Promise<void> {
        console.log(`update::${this.name}`);
        this.registerUpdate(id, data);
        if (opts?.immediate) {
            await this.flushUpdates();
        } else {
            await this.flushUpdatesDebounced();
        }
    }

    async create(data: TInsert, opts?: { immediate: boolean }): Promise<void> {
        this.registerInsert(data);
        if (opts?.immediate) {
            await this.flushInserts();
        } else {
            await this.flushInsertsDebounced();
        }
    }
}
