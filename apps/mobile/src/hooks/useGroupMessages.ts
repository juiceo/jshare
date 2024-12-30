import { useCallback, useMemo } from 'react';

import { trpc } from '~/services/trpc';

export const useGroupMessages = (groupId: string) => {
    const utils = trpc.useUtils();
    const sendMessageMutation = trpc.messages.create.useMutation();

    const queryInput = useMemo(() => ({ groupId, limit: 15 }), [groupId]);
    const messagesQuery = trpc.messages.listByGroup.useInfiniteQuery(queryInput, {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        select: (data) => data.pages.flatMap((page) => page.messages),
    });

    const sendMessage = useCallback(
        async (text: string) => {
            await sendMessageMutation.mutateAsync({
                groupId,
                text,
            });
            utils.messages.listByGroup.invalidate();
        },
        [groupId, sendMessageMutation, utils.messages.listByGroup]
    );

    return {
        ...messagesQuery,
        sendMessage,
    };
};
