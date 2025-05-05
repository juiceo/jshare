import { z } from 'zod';

import type { Document } from '~/lib/store/Document';
import type { DocumentStore } from '~/lib/store/DocumentStore';

export type Query<T extends { id: string }> = Partial<T>;

export type DocumentApi<
    TData extends { id: string },
    TCreateInput extends object,
    TUpdateInput extends object,
> = {
    findById: (args: { ids: string[] }) => Promise<TData[]>;
    findMany?: (args: { queries: Query<TData>[] }) => Promise<TData[][]>;
    update?: (args: { id: string; data: TUpdateInput }) => Promise<TData>;
    create?: (args: { data: TCreateInput }) => Promise<TData>;
};

export type InferCreateInput<TApi extends DocumentApi<any, any, any>> =
    TApi extends DocumentApi<any, infer C, any> ? C : never;

export type InferUpdateInput<TApi extends DocumentApi<any, any, any>> =
    TApi extends DocumentApi<any, any, infer U> ? U : never;

export type InferResolvers<TStore extends DocumentStore<any, any, any, any, any>> =
    TStore extends DocumentStore<any, any, infer R, any, any> ? R : never;

export type InferIndexedKeys<TStore extends DocumentStore<any, any, any, any, any>> =
    TStore extends DocumentStore<any, any, any, infer I, any> ? I : never;

export type InferDataType<TStore extends DocumentStore<any, any, any, any, any>> =
    TStore extends DocumentStore<infer S, any, any, any, any> ? z.infer<S> : never;

export type DocumentStoreHooks<T extends { id: string }> = {
    afterCreate?: (doc: T) => void;
    afterUpdate?: (doc: T) => void;
};

export type Resolver<TData extends { id: string }, TResult> = (data: TData) => TResult;

export type ResolverMap<TData extends { id: string }> = {
    [key: string]: Resolver<TData, any>;
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

export interface QueryResultsArray<TStore extends DocumentStore<any, any, any, any, any>>
    extends Array<Document<TStore>> {
    readonly $queryKey: string;
    readonly $loading?: boolean;
}
