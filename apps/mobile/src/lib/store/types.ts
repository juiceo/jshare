import type { Document } from '~/lib/store/Document';

export type Query<T extends { id: string }> = Partial<T>;

export type DocumentApi<T extends { id: string }> = {
    findById: (ids: string[]) => Promise<T[]>;
    findWhere: (where: Query<T>) => Promise<T[]>;
    update?: (id: string, updates: Partial<T>) => Promise<T>;
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

export type UpdateEntry<TData extends { id: string }> = {
    id: string;
    updates: Partial<TData>;
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

export interface QueryResultsArray<T extends { id: string }> extends Array<Document<T, any, any>> {
    readonly $queryKey: string;
    readonly $loading?: boolean;
}
