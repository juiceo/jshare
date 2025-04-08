import { useCallback } from 'react';

import { trpc, type TrpcInputs } from '~/lib/trpc';

export const useCreateGroup = () => {
    const trpcUtils = trpc.useUtils();
    const createGroupMutation = trpc.groups.create.useMutation();

    const createGroup = useCallback(
        (args: TrpcInputs['groups']['create']) => {
            return createGroupMutation.mutateAsync(args, {
                onSuccess: (data) => {
                    trpcUtils.groups.list.setData(undefined, (prev) => {
                        return prev ? [...prev, data] : [data];
                    });
                },
            });
        },
        [createGroupMutation, trpcUtils.groups.list]
    );

    return { createGroup, ...createGroupMutation };
};
