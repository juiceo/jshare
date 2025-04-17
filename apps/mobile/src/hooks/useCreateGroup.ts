import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useTRPC, type TrpcInputs } from '~/lib/trpc';

export const useCreateGroup = () => {
    const trpc = useTRPC();
    const queryClient = useQueryClient();

    const createGroupMutation = useMutation(trpc.groups.create.mutationOptions());

    const createGroup = useCallback(
        (args: TrpcInputs['groups']['create']) => {
            return createGroupMutation.mutateAsync(args, {
                onSuccess: (data) => {
                    queryClient.setQueryData(trpc.groups.list.queryKey(), (prev) => {
                        return prev ? [...prev, data] : [data];
                    });
                },
            });
        },
        [createGroupMutation, queryClient, trpc.groups.list]
    );

    return { createGroup, ...createGroupMutation };
};
