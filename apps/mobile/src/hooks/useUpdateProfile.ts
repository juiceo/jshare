import { useCallback } from 'react';

import { trpc, type TrpcInputs } from '~/services/trpc';

export const useUpdateProfile = () => {
    const trpcUtils = trpc.useUtils();
    const updateProfileMutation = trpc.profiles.update.useMutation();

    const updateProfile = useCallback(
        async (args: TrpcInputs['profiles']['update']) => {
            trpcUtils.profiles.me.setData(undefined, (prev) => {
                if (!prev) return;
                return {
                    ...prev,
                    args,
                };
            });
            return updateProfileMutation.mutateAsync(args, {
                onSuccess: (data) => {
                    trpcUtils.profiles.me.setData(undefined, () => data);
                    trpcUtils.profiles.me.invalidate();
                },
            });
        },
        [updateProfileMutation, trpcUtils.profiles.me]
    );

    return {
        updateProfile,
        updateProfileMutation,
    };
};
