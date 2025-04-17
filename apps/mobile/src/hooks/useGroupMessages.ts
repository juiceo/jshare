import { useCallback, useMemo } from 'react';
import {
    useInfiniteQuery,
    useMutation,
    useQueryClient,
    useSuspenseQuery,
} from '@tanstack/react-query';

import { getRandomKey } from '@jshare/common';
import { DB } from '@jshare/db';

import { useGroupBroadcasts } from '~/hooks/useBroadcast';
import { useTRPC } from '~/lib/trpc';

export const useGroupMessages = (args: { groupId: string; userId: string }) => {
    const { groupId, userId } = args;
    const trpc = useTRPC();
    const queryClient = useQueryClient();
    const profile = useSuspenseQuery(trpc.profiles.me.queryOptions()).data;
    const sendMessageMutation = useMutation(trpc.messages.create.mutationOptions());

    const queryInput = useMemo(() => ({ groupId, limit: 15 }), [groupId]);
    const messagesQuery = useInfiniteQuery(
        trpc.messages.listByGroup.infiniteQueryOptions(queryInput, {
            getNextPageParam: (lastPage) => lastPage.nextCursor,
        })
    );

    const messages = useMemo(() => {
        return messagesQuery.data?.pages.flatMap((page) => page.messages);
    }, [messagesQuery.data?.pages]);

    const invalidateMessages = useCallback(() => {
        queryClient.invalidateQueries({
            queryKey: trpc.messages.listByGroup.queryKey(queryInput),
        });
    }, [queryClient, queryInput, trpc.messages.listByGroup]);

    useGroupBroadcasts({
        groupId,
        onMessage: invalidateMessages,
    });

    const sendMessage = useCallback(
        async (text: string) => {
            if (!profile) return;

            const localMessage: DB.Message<{ author: true; attachments: true }> = {
                id: getRandomKey(),
                key: getRandomKey(),
                text,
                authorType: DB.AuthorType.User,
                authorId: userId,
                groupId,
                createdAt: new Date(),
                updatedAt: new Date(),
                archived: false,
                archivedAt: null,
                attachments: [],
                author: profile,
            };

            queryClient.setQueryData(
                trpc.messages.listByGroup.infiniteQueryKey(queryInput),
                (data) => {
                    if (!data) return data;
                    return {
                        ...data,
                        pages: data.pages.map((page, index) => {
                            if (index === 0) {
                                return {
                                    ...page,
                                    messages: [localMessage, ...page.messages],
                                };
                            }
                            return page;
                        }),
                    };
                }
            );
            await sendMessageMutation.mutateAsync({
                groupId,
                text,
                key: localMessage.key,
            });
            invalidateMessages();
        },
        [
            groupId,
            invalidateMessages,
            profile,
            queryClient,
            queryInput,
            sendMessageMutation,
            trpc.messages.listByGroup,
            userId,
        ]
    );

    return {
        ...messagesQuery,
        data: messages,
        invalidateMessages,
        sendMessage,
    };
};
