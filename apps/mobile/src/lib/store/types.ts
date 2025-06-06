import { z } from 'zod';

import type { Document } from '~/lib/store/Document';
import type { DocumentStore } from '~/lib/store/DocumentStore';

export type Query<T extends { id: string }> = Partial<T>;

export type DocumentApi<
    TData extends { id: string },
    TCreateInput extends object,
    TUpdateInput extends object,
> = {
    sync?: (args: { lastSync: number }) => Promise<SyncResult<TData>>;
    findById?: (args: { ids: string[] }) => Promise<TData[]>;
    findMany?: (args: { queries: Query<TData>[] }) => Promise<TData[][]>;
    update?: (args: { id: string; data: TUpdateInput }) => Promise<TData>;
    create?: (args: { id: string; data: TCreateInput }) => Promise<TData>;
    delete?: (args: { id: string }) => Promise<void>;
};

export type SyncResult<TData extends { id: string }> = {
    created: TData[];
    updated: TData[];
    removed: string[];
    timestamp: number;
};

export type InferCreateInput<TApi extends DocumentApi<any, any, any>> =
    TApi extends DocumentApi<any, infer C, any> ? C : never;

export type InferUpdateInput<TApi extends DocumentApi<any, any, any>> =
    TApi extends DocumentApi<any, any, infer U> ? U : never;

export type InferResolvers<TStore extends DocumentStore<any, any, any, any, any>> =
    TStore extends DocumentStore<any, any, infer R, any, any, any> ? R : never;

export type InferFunctions<TStore extends DocumentStore<any, any, any, any, any>> =
    TStore extends DocumentStore<any, any, any, infer F, any, any> ? F : never;

export type InferIndexedKeys<TStore extends DocumentStore<any, any, any, any, any>> =
    TStore extends DocumentStore<any, any, any, any, infer I, any> ? I : never;

export type InferDataType<TStore extends DocumentStore<any, any, any, any, any>> =
    TStore extends DocumentStore<infer S, any, any, any, any, any> ? z.infer<S> : never;

export type DocumentStoreHooks<T extends { id: string }> = {
    afterCreate?: (doc: T) => void;
    afterUpdate?: (doc: T) => void;
};

export type DocumentResolver<TData extends { id: string }, TResult> = (data: TData) => TResult;

export type DocumentResolvers<TData extends { id: string }> = {
    [key: string]: DocumentResolver<TData, any>;
};

export type DocumentOfType<TData extends { id: string }> = Document<
    DocumentStore<any, any, any, any, any, TData>
>;

export type DocumentFunction<TData extends { id: string }, TArgs extends object, TResult> = (
    args: TArgs,
    doc: DocumentOfType<TData>
) => TResult;

export type DocumentFunctions<TData extends { id: string }> = {
    [key: string]: DocumentFunction<TData, any, any>;
};

export type FindManyOpts<TData extends { id: string }> = {
    limit?: number;
    orderBy?: {
        field: keyof TData;
        order: 'asc' | 'desc';
    };
};

export type UpdateEntry<TApi extends DocumentApi<any, any, any>> = {
    id: string;
    updates: InferUpdateInput<TApi>;
    status: 'pending' | 'running' | 'done';
};

export type CreateEntry<TApi extends DocumentApi<any, any, any>> = {
    id: string;
    data: InferCreateInput<TApi>;
    status: 'pending' | 'running' | 'done' | 'failed';
};

export type DeleteEntry<TData extends { id: string }> = {
    id: string;
    data: TData;
    status: 'pending' | 'running' | 'done' | 'failed';
};

export type QueryEntry<TData extends { id: string }> =
    | {
          type: 'findMany';
          query: Query<TData>;
          lastFetched: number | null;
          status: 'pending' | 'running' | 'done';
      }
    | {
          type: 'findById';
          id: string;
          lastFetched: number | null;
          status: 'pending' | 'running' | 'done';
      };

export interface QueryResultsArray<TStore extends DocumentStore<any, any, any, any, any, any>>
    extends Array<Document<TStore>> {
    readonly $queryKey: string;
    readonly $loading?: boolean;
}
