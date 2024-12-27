import { skipToken } from '@tanstack/react-query';

import { trpc } from '~/services/trpc';

export const useProfileById = (id: string | null | undefined) => {
    const profileQuery = trpc.profiles.getById.useQuery(id ? { id } : skipToken);

    return {
        profile: profileQuery.data,
        isLoading: profileQuery.isLoading,
        isError: profileQuery.isError,
        isFetched: profileQuery.isFetched,
    };
};
