import { useCallback } from 'react';

import { trpc, type TrpcInputs } from '~/services/trpc';

export const useProfile = () => {
    const trpcUtils = trpc.useUtils();
    const profileQuery = trpc.profiles.get.useQuery();
    const profileMutation = trpc.profiles.update.useMutation();

    const updateProfile = useCallback(
        async (args: TrpcInputs['profiles']['update']) => {
            trpcUtils.profiles.get.setData(undefined, (prev) => {
                if (!prev) return;
                return {
                    ...prev,
                    args,
                };
            });
            return profileMutation.mutateAsync(args, {
                onSuccess: (data) => {
                    trpcUtils.profiles.get.setData(undefined, () => data);
                },
            });
        },
        [profileMutation, trpcUtils.profiles.get]
    );

    return {
        profile: profileQuery.data,
        updateProfile,
        isLoading: profileQuery.isLoading,
        isError: profileQuery.isError,
        isFetched: profileQuery.isFetched,
    };
};
