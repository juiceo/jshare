import { useCallback, useMemo } from 'react';
import { uniqueId } from 'lodash';

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
            const key = uniqueId();
            // utils.messages.listByGroup.setInfiniteData(queryInput, (data) => {
            //     if (!data) return data;
            //     return {
            //         ...data,
            //         pages: [],
            //     };
            // });
            await sendMessageMutation.mutateAsync({
                groupId,
                text,
                key,
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
