import { debounce, sortBy, type DebouncedFunc } from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';

import { Document } from '~/lib/store/Document';
import { IndexedMap } from '~/lib/store/IndexedMap';
import type {
    DocumentApi,
    FindManyOpts,
    Query,
    QueryEntry,
    QueryResultsArray,
    ResolverMap,
    UpdateEntry,
} from '~/lib/store/types';

export class DocumentStore<
    TData extends { id: string },
    TResolvers extends ResolverMap<TData>,
    TIndexes extends (keyof TData)[],
> {
    name: string;
    api: DocumentApi<TData>;
    docs: Map<string, Document<TData, TResolvers, TIndexes>> = new Map();
    isLoading: boolean = false;
    flushUpdates: DebouncedFunc<() => Promise<void>>;
    flushQueries: DebouncedFunc<() => Promise<void>>;
    updates: Record<string, UpdateEntry<TData>> = {};
    queries: Record<string, QueryEntry<TData>> = {};
    indexedKeys?: TIndexes;
    index: IndexedMap<TData, TResolvers, TIndexes>;
    resolvers?: TResolvers;

    constructor(args: {
        name: string;
        api: DocumentApi<TData>;
        resolvers?: TResolvers;
        indexedKeys?: TIndexes;
    }) {
        this.index = new IndexedMap(args.indexedKeys || []);
        this.queries = {};
        makeAutoObservable(this);
        this.updates = {};
        this.indexedKeys = args.indexedKeys;
        this.name = args.name;
        this.api = args.api;
        this.resolvers = args.resolvers;

        this.flushQueries = debounce(
            async () => {
                const queriesToRun = runInAction(() => {
                    return Object.entries(this.queries).filter(([key, item]) => {
                        if (item.status === 'pending') {
                            this.queries[key].status = 'running';
                            return true;
                        }
                        return false;
                    });
                });

                if (queriesToRun.length === 0) {
                    return;
                }

                const ids = queriesToRun
                    .map(([key, item]) => {
                        if (item.type === 'findById') {
                            return item.id;
                        }
                        return null;
                    })
                    .filter((id) => id !== null);

                const wheres = queriesToRun
                    .map(([key, item]) => {
                        if (item.type === 'findMany') {
                            return item.query;
                        }
                        return null;
                    })
                    .filter((where) => where !== null);

                const { added, removed } = await Promise.all([
                    this.api.findById(ids).then((res) => {
                        return {
                            added: res,
                            removed: ids.filter((id) => !res.some((r) => r.id === id)),
                        };
                    }),
                    ...wheres.map((where) =>
                        this.api.findWhere(where).then((res) => {
                            const currentResults = this.index.find(where);
                            return {
                                added: res,
                                removed: currentResults
                                    .filter((r) => !res.some((r2) => r2.id === r.id))
                                    .map((r) => r.id),
                            };
                        })
                    ),
                ]).then((res) => {
                    return res.reduce(
                        (acc, curr) => {
                            for (const data of curr.added) {
                                if (!acc.added.some((r) => r.id === data.id)) {
                                    acc.added.push(data);
                                }
                            }
                            for (const id of curr.removed) {
                                if (!acc.removed.includes(id)) {
                                    acc.removed.push(id);
                                }
                            }
                            return acc;
                        },
                        { added: [], removed: [] }
                    );
                });

                runInAction(() => {
                    for (const doc of added) {
                        this.registerItem(doc.id, doc);
                    }

                    for (const id of removed) {
                        this.disposeItem(id);
                    }

                    /**
                     * TODO: Handle errors somehow (mark query state as failed?)
                     */
                    queriesToRun.forEach(([key]) => {
                        this.queries[key].status = 'done';
                        this.queries[key].lastFetched = Date.now();
                    });
                });
            },
            10,
            { maxWait: 100 }
        );

        this.flushUpdates = debounce(
            async () => {
                const updatesToRun = runInAction(() => {
                    return Object.entries(this.updates).filter(([id, data]) => {
                        if (data.status === 'pending') {
                            this.updates[id].status = 'running';
                            return true;
                        }
                        return false;
                    });
                });
                if (updatesToRun.length === 0) return;

                await Promise.all(
                    updatesToRun.map(async ([id, data]) => this.api.update?.(id, data.updates))
                ).then((results) => {
                    return results.filter((r) => r !== undefined);
                });

                /**
                 * TODO: Handle errors somehow (mark update state as failed?)
                 */
            },
            1000,
            { maxWait: 15_000 }
        );
    }

    private getQueryKey(where: string | Query<TData>) {
        return typeof where === 'string' ? where : JSON.stringify(where);
    }

    private async registerFindById(id: string) {
        let shouldFlush = false;
        runInAction(() => {
            if (!this.queries[id]) {
                this.queries[id] = {
                    type: 'findById',
                    id,
                    lastFetched: null,
                    status: 'pending',
                };
                shouldFlush = true;
            } else if (this.queries[id].status !== 'running') {
                const lastFetched = this.queries[id].lastFetched ?? 0;
                if (Date.now() - lastFetched > 15_000) {
                    this.queries[id].status = 'pending';
                }
                shouldFlush = true;
            }
        });

        if (shouldFlush) {
            return this.flushQueries();
        }
    }

    private async registerQuery(query: Query<TData>) {
        let shouldFlush = false;
        runInAction(() => {
            const key = this.getQueryKey(query);
            if (!this.queries[key]) {
                this.queries[key] = {
                    type: 'findMany',
                    query,
                    lastFetched: null,
                    status: 'pending',
                };
                shouldFlush = true;
            } else if (this.queries[key].status !== 'running') {
                const lastFetched = this.queries[key].lastFetched ?? 0;
                if (Date.now() - lastFetched > 15_000) {
                    this.queries[key].status = 'pending';
                }
                shouldFlush = true;
            }
        });

        if (shouldFlush) {
            return this.flushQueries();
        }
    }

    private findByIdComputed = computedFn((id: string) => {
        return this.index.get(id);
    });

    findById(id: string | null | undefined) {
        if (!id) return null;

        this.registerFindById(id).then(() => {});
        return this.findByIdComputed(id);
    }

    private findManyComputed = computedFn((args: string): QueryResultsArray<TData> => {
        const { where, opts } = JSON.parse(args) as {
            where: Query<TData>;
            opts?: FindManyOpts<TData>;
        };

        let docs = this.index.find(where);
        const { orderBy, limit } = opts || {};
        if (orderBy) {
            docs = sortBy(docs, (doc) => doc.data[orderBy.field]);
            if (orderBy.order === 'desc') {
                docs = docs.reverse();
            }
        }
        if (limit) {
            docs = docs.slice(0, limit);
        }

        const queryKey = this.getQueryKey(where);

        return Object.defineProperties([...docs], {
            $queryKey: {
                value: queryKey,
                enumerable: false,
            },
            $loading: {
                get: () => this.queries[queryKey]?.status !== 'done',
                enumerable: false,
            },
        }) as QueryResultsArray<TData>;
    });

    findMany(where: Query<TData>, opts?: FindManyOpts<TData>) {
        this.registerQuery(where).then();
        return this.findManyComputed(JSON.stringify({ where, opts }));
    }

    getQueryState(queryKey: string) {
        return this.queries[queryKey]?.status;
    }

    registerItem(id: string, item: TData) {
        if (this.index.has(id)) {
            this.index.update(id, item);
        } else {
            this.index.add(id, new Document(this, item, this.resolvers));
        }
    }

    disposeItem(id: string) {
        const doc = this.index.delete(id);
        if (doc) {
            doc.dispose();
        }
    }

    create(data: TData) {}

    update(id: string, updates: Partial<TData>) {
        this.updates[id] = {
            id,
            updates: {
                ...this.updates[id]?.updates,
                ...updates,
            },
            status: 'pending',
        };
        this.flushUpdates();
    }

    delete(id: string) {
        this.disposeItem(id);
        /**
         * TODO: Implement server side delete
         */
    }
}
