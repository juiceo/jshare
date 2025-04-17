import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useTRPC, type TrpcInputs } from '~/lib/trpc';

export const useUpdateProfile = () => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const updateProfileMutation = useMutation(trpc.profiles.update.mutationOptions());

    const updateProfile = useCallback(
        async (args: TrpcInputs['profiles']['update']) => {
            queryClient.setQueryData(trpc.profiles.me.queryKey(), (prev) => {
                if (!prev) return;
                return {
                    ...prev,
                    args,
                };
            });
            return updateProfileMutation.mutateAsync(args, {
                onSuccess: (data) => {
                    queryClient.setQueryData(trpc.profiles.me.queryKey(), () => data);
                    queryClient.invalidateQueries({ queryKey: trpc.profiles.me.queryKey() });
                },
            });
        },
        [queryClient, trpc.profiles.me, updateProfileMutation]
    );

    return {
        updateProfile,
        updateProfileMutation,
    };
};
