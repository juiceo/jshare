/******************************************************************************
* This file was generated by ZenStack CLI.
******************************************************************************/

/* eslint-disable */
// @ts-nocheck

import type { Prisma } from '../../../../../../packages/db/src/generated/models';
import type { TRPCClientErrorLike, TRPCRequestOptions } from '@trpc/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
import type { UseTRPCSuspenseQueryOptions, UseTRPCSuspenseQueryResult, UseTRPCSuspenseInfiniteQueryOptions, UseTRPCSuspenseInfiniteQueryResult } from '@trpc/react-query/shared';

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    aggregate: {

        useQuery: <T extends Prisma.ExpenseAggregateArgs, TData = Prisma.GetExpenseAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.ExpenseAggregateArgs>,
            opts?: UseTRPCQueryOptions<Prisma.GetExpenseAggregateType<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExpenseAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ExpenseAggregateArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.GetExpenseAggregateType<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.GetExpenseAggregateType<T>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.ExpenseAggregateArgs, TData = Prisma.GetExpenseAggregateType<T>>(
            input: Prisma.Subset<T, Prisma.ExpenseAggregateArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.GetExpenseAggregateType<T>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.ExpenseAggregateArgs>(
            input: Omit<Prisma.Subset<T, Prisma.ExpenseAggregateArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.GetExpenseAggregateType<T>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.GetExpenseAggregateType<T>, TRPCClientErrorLike<AppRouter>, T>;

    };
    createMany: {

        useMutation: <T extends Prisma.ExpenseCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExpenseCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExpenseCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExpenseCreateManyArgs>(variables?: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ExpenseCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExpenseCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExpenseGetPayload<T>,
            Context
        >) =>
            Omit<UseTRPCMutationResult<Prisma.ExpenseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExpenseCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExpenseCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExpenseGetPayload<T>, Context>) => Promise<Prisma.ExpenseGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ExpenseDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExpenseDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExpenseDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExpenseDeleteManyArgs>(variables?: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ExpenseDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExpenseDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExpenseGetPayload<T>,
            Context
        >) =>
            Omit<UseTRPCMutationResult<Prisma.ExpenseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExpenseDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExpenseDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExpenseGetPayload<T>, Context>) => Promise<Prisma.ExpenseGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ExpenseFindFirstArgs, TData = Prisma.ExpenseGetPayload<T> | null>(
            input?: Prisma.SelectSubset<T, Prisma.ExpenseFindFirstArgs>,
            opts?: UseTRPCQueryOptions<Prisma.ExpenseGetPayload<T> | null, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExpenseFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.ExpenseGetPayload<T> | null, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExpenseGetPayload<T> | null,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.ExpenseFindFirstArgs, TData = Prisma.ExpenseGetPayload<T> | null>(
            input?: Prisma.SelectSubset<T, Prisma.ExpenseFindFirstArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.ExpenseGetPayload<T> | null, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.ExpenseFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.ExpenseGetPayload<T> | null, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.ExpenseGetPayload<T> | null, TRPCClientErrorLike<AppRouter>, T>;

    };
    findFirstOrThrow: {

        useQuery: <T extends Prisma.ExpenseFindFirstOrThrowArgs, TData = Prisma.ExpenseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ExpenseFindFirstOrThrowArgs>,
            opts?: UseTRPCQueryOptions<Prisma.ExpenseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExpenseFindFirstOrThrowArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.ExpenseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExpenseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.ExpenseFindFirstOrThrowArgs, TData = Prisma.ExpenseGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ExpenseFindFirstOrThrowArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.ExpenseGetPayload<T>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.ExpenseFindFirstOrThrowArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindFirstOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.ExpenseGetPayload<T>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.ExpenseGetPayload<T>, TRPCClientErrorLike<AppRouter>, T>;

    };
    findMany: {

        useQuery: <T extends Prisma.ExpenseFindManyArgs, TData = Array<Prisma.ExpenseGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ExpenseFindManyArgs>,
            opts?: UseTRPCQueryOptions<Array<Prisma.ExpenseGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExpenseFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Array<Prisma.ExpenseGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ExpenseGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.ExpenseFindManyArgs, TData = Array<Prisma.ExpenseGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ExpenseFindManyArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Array<Prisma.ExpenseGetPayload<T>>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.ExpenseFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindManyArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Array<Prisma.ExpenseGetPayload<T>>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Array<Prisma.ExpenseGetPayload<T>>, TRPCClientErrorLike<AppRouter>, T>;

    };
    findUnique: {

        useQuery: <T extends Prisma.ExpenseFindUniqueArgs, TData = Prisma.ExpenseGetPayload<T> | null>(
            input: Prisma.SelectSubset<T, Prisma.ExpenseFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<Prisma.ExpenseGetPayload<T> | null, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExpenseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.ExpenseGetPayload<T> | null, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExpenseGetPayload<T> | null,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.ExpenseFindUniqueArgs, TData = Prisma.ExpenseGetPayload<T> | null>(
            input: Prisma.SelectSubset<T, Prisma.ExpenseFindUniqueArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.ExpenseGetPayload<T> | null, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.ExpenseFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.ExpenseGetPayload<T> | null, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.ExpenseGetPayload<T> | null, TRPCClientErrorLike<AppRouter>, T>;

    };
    findUniqueOrThrow: {

        useQuery: <T extends Prisma.ExpenseFindUniqueOrThrowArgs, TData = Prisma.ExpenseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ExpenseFindUniqueOrThrowArgs>,
            opts?: UseTRPCQueryOptions<Prisma.ExpenseGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ExpenseFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, Prisma.ExpenseGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ExpenseGetPayload<T>,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.ExpenseFindUniqueOrThrowArgs, TData = Prisma.ExpenseGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ExpenseFindUniqueOrThrowArgs>,
            opts?: UseTRPCSuspenseQueryOptions<Prisma.ExpenseGetPayload<T>, TData, Error>
        ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.ExpenseFindUniqueOrThrowArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ExpenseFindUniqueOrThrowArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, Prisma.ExpenseGetPayload<T>, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<Prisma.ExpenseGetPayload<T>, TRPCClientErrorLike<AppRouter>, T>;

    };
    groupBy: {

        useQuery: <T extends Prisma.ExpenseGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ExpenseGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ExpenseGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetExpenseGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.ExpenseGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCQueryOptions<{} extends InputErrors ? Prisma.GetExpenseGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ExpenseGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ExpenseGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ExpenseGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ExpenseGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, {} extends InputErrors ? Prisma.GetExpenseGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCInfiniteQueryResult<
            {} extends InputErrors ? Prisma.GetExpenseGroupByPayload<T> : InputErrors,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.ExpenseGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ExpenseGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ExpenseGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            , TData = {} extends InputErrors ? Prisma.GetExpenseGroupByPayload<T> : InputErrors>(
                input: Prisma.SubsetIntersection<T, Prisma.ExpenseGroupByArgs, OrderByArg> & InputErrors,
                opts?: UseTRPCSuspenseQueryOptions<{} extends InputErrors ? Prisma.GetExpenseGroupByPayload<T> : InputErrors, TData, Error>
            ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.ExpenseGroupByArgs,
            HasSelectOrTake extends Prisma.Or<
                Prisma.Extends<'skip', Prisma.Keys<T>>,
                Prisma.Extends<'take', Prisma.Keys<T>>
            >,
            OrderByArg extends Prisma.True extends HasSelectOrTake
            ? { orderBy: Prisma.ExpenseGroupByArgs['orderBy'] }
            : { orderBy?: Prisma.ExpenseGroupByArgs['orderBy'] },
            OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
            ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
            ByValid extends Prisma.Has<ByFields, OrderFields>,
            HavingFields extends Prisma.GetHavingFields<T['having']>,
            HavingValid extends Prisma.Has<ByFields, HavingFields>,
            ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
            InputErrors extends ByEmpty extends Prisma.True
            ? `Error: "by" must not be empty.`
            : HavingValid extends Prisma.False
            ? {
                [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    'Field ',
                    P,
                    ` in "having" needs to be provided in "by"`,
                ]
            }[HavingFields]
            : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
            : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        >(
            input: Omit<Prisma.SubsetIntersection<T, Prisma.ExpenseGroupByArgs, OrderByArg> & InputErrors, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, {} extends InputErrors ? Prisma.GetExpenseGroupByPayload<T> : InputErrors, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<{} extends InputErrors ? Prisma.GetExpenseGroupByPayload<T> : InputErrors, TRPCClientErrorLike<AppRouter>, T>;

    };
    updateMany: {

        useMutation: <T extends Prisma.ExpenseUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExpenseUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExpenseUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExpenseUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ExpenseUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExpenseUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExpenseGetPayload<T>,
            Context
        >) =>
            Omit<UseTRPCMutationResult<Prisma.ExpenseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExpenseUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExpenseUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExpenseGetPayload<T>, Context>) => Promise<Prisma.ExpenseGetPayload<T>>
            };

    };
    upsert: {

        useMutation: <T extends Prisma.ExpenseUpsertArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ExpenseUpsertArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ExpenseGetPayload<T>,
            Context
        >) =>
            Omit<UseTRPCMutationResult<Prisma.ExpenseGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ExpenseUpsertArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ExpenseUpsertArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ExpenseGetPayload<T>, Context>) => Promise<Prisma.ExpenseGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ExpenseCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ExpenseCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ExpenseCountArgs>,
                opts?: UseTRPCQueryOptions<'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ExpenseCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ExpenseCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ExpenseCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ExpenseCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ExpenseCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>,
            T
        >;
        useSuspenseQuery: <T extends Prisma.ExpenseCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ExpenseCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ExpenseCountArgs>,
                opts?: UseTRPCSuspenseQueryOptions<'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ExpenseCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCSuspenseQueryResult<TData, TRPCClientErrorLike<AppRouter>>;
        useSuspenseInfiniteQuery: <T extends Prisma.ExpenseCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ExpenseCountArgs>, 'cursor'>,
            opts?: UseTRPCSuspenseInfiniteQueryOptions<T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ExpenseCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCSuspenseInfiniteQueryResult<'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ExpenseCountAggregateOutputType>
            : number, TRPCClientErrorLike<AppRouter>, T>;

    };
}
