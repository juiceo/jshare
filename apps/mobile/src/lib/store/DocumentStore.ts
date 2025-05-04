import { InteractionManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { debounce, sortBy, type DebouncedFunc } from 'lodash';
import { makeAutoObservable, reaction, runInAction } from 'mobx';
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
import { createData, type CreateInput } from '~/lib/store/util';
import { getUserId } from '~/state/auth';

export class DocumentStore<
    TData extends { id: string },
    TResolvers extends ResolverMap<TData>,
    TIndexes extends (keyof TData)[],
> {
    isReady: Promise<void>;
    name: string;
    api: DocumentApi<TData>;
    flushUpdates: DebouncedFunc<() => Promise<void>>;
    flushQueries: DebouncedFunc<() => Promise<void>>;
    updates: Record<string, UpdateEntry<TData>> = {};
    queries: Record<string, QueryEntry<TData>> = {};
    indexedKeys?: TIndexes;
    index: IndexedMap<TData, TResolvers, TIndexes>;
    resolvers?: TResolvers;
    staleTime: number;
    constructor(args: {
        name: string;
        api: DocumentApi<TData>;
        resolvers?: TResolvers;
        indexedKeys?: TIndexes;
        staleTime?: number;
    }) {
        this.index = new IndexedMap(args.indexedKeys || []);
        makeAutoObservable(this, {
            findById: false,
            findMany: false,
        });
        this.indexedKeys = args.indexedKeys;
        this.name = args.name;
        this.api = args.api;
        this.resolvers = args.resolvers;
        this.staleTime = args.staleTime ?? 60_000;

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

                let wheres = queriesToRun
                    .map(([key, item]) => {
                        if (item.type === 'findMany') {
                            return item.query;
                        }
                        return null;
                    })
                    .filter((where) => where !== null);

                if (!this.api.findWhere) {
                    if (wheres.length > 0) {
                        console.warn(
                            `findMany is not supported for collection ${this.name}, ignoring...`
                        );
                        wheres = [];
                    }
                }

                const { added, removed } = await Promise.all([
                    this.api.findById(ids).then((res) => {
                        return {
                            added: res,
                            removed: ids.filter((id) => !res.some((r) => r.id === id)),
                        };
                    }),
                    ...wheres.map((where) =>
                        this.api.findWhere!(where).then((res) => {
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
                            if (!curr) return acc;
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
                        this.registerItem(doc);
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

        this.isReady = this.hydrate();

        reaction(
            () => this.index.updatedAt,
            () => {
                this.persist();
            },
            {
                delay: 2500,
            }
        );
    }

    private async hydrate() {
        const items = await AsyncStorage.getItem(`DocumentStore::${this.name}`);
        const parsedItems = items ? JSON.parse(items) : [];
        const docs = parsedItems.map((item: TData) => new Document(this, item, this.resolvers));
        runInAction(() => {
            this.index.init(docs);
        });
    }

    private async persist() {
        InteractionManager.runAfterInteractions(async () => {
            const items = this.index.getAll().map((doc) => doc.snapshot);
            await AsyncStorage.setItem(`DocumentStore::${this.name}`, JSON.stringify(items));
        });
    }

    private getQueryKey(where: string | Query<TData>) {
        return typeof where === 'string' ? where : JSON.stringify(where);
    }

    getQueryState = computedFn((queryKey: string | undefined) => {
        if (!queryKey) return null;
        return this.queries[queryKey]?.status;
    });

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
                if (Date.now() - lastFetched > this.staleTime) {
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
                if (Date.now() - lastFetched > this.staleTime) {
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

        this.registerFindById(id);
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

    registerItem(item: TData) {
        if (this.index.has(item.id)) {
            this.index.update(item.id, item);
        } else {
            this.index.add(item.id, new Document(this, item, this.resolvers));
        }
    }

    disposeItem(id: string) {
        const doc = this.index.delete(id);
        if (doc) {
            doc.dispose();
        }
    }

    async create(input: CreateInput<TData>) {
        const userId = getUserId();
        if (!userId) return;

        const data = createData(input);

        this.registerItem(data);

        await this.api.create?.(data).then((res) => {
            if (res) {
                runInAction(() => {
                    this.registerItem(res);
                });
            } else {
                runInAction(() => {
                    this.disposeItem(data.id);
                });
            }
        });

        return this.index.get(data.id);
    }

    update(id: string, updates: Partial<TData>) {
        const doc = this.index.get(id);
        if (!doc) return;

        this.updates[id] = {
            id,
            updates: {
                ...this.updates[id]?.updates,
                ...updates,
            },
            status: 'pending',
        };
        this.index.update(id, {
            ...doc.snapshot,
            ...updates,
        });

        this.flushUpdates();
    }

    delete(id: string) {
        this.disposeItem(id);
        /**
         * TODO: Implement server side delete
         */
    }

    reset() {
        this.index.clear();
        this.persist();
    }
}
