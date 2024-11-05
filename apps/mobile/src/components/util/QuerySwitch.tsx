import type { DefinedUseTRPCQueryResult, UseTRPCQueryResult } from '@trpc/react-query/dist/shared';
import { isEmpty } from 'lodash';

export type QuerySwitchProps<TData, TError> = {
    query: UseTRPCQueryResult<TData, TError>;
    children: (
        data: DefinedUseTRPCQueryResult<TData, TError>['data'],
        query: UseTRPCQueryResult<TData, TError>
    ) => JSX.Element;
    loading?: (() => JSX.Element) | JSX.Element;
    error?: ((error: TError) => JSX.Element) | JSX.Element;
    empty?: (() => JSX.Element) | JSX.Element;
};

export const QuerySwitch = <TData, TError>(props: QuerySwitchProps<TData, TError>) => {
    const { query, children } = props;

    if (query.isLoading) {
        return typeof props.loading === 'function' ? props.loading() : props.loading;
    }
    if (query.isError) {
        return typeof props.error === 'function' ? props.error(query.error) : props.error;
    }
    if (!query.data || isEmpty(query.data)) {
        return typeof props.empty === 'function' ? props.empty() : props.empty;
    }

    //@ts-ignore
    return children(query.data, query);
};
