import { useCallback, useMemo } from 'react';

import { MessageMock, type DB } from '@jshare/types';

import { useGroupBroadcasts } from '~/hooks/useBroadcast';
import { useProfile } from '~/hooks/useProfile';
import { trpc } from '~/services/trpc';
import { useAuthenticatedSession } from '~/wrappers/AuthenticatedContextProvider';

export const useGroupMessages = (groupId: string) => {
    const { session } = useAuthenticatedSession();
    const { profile } = useProfile();
    const utils = trpc.useUtils();
    const sendMessageMutation = trpc.messages.create.useMutation();

    const queryInput = useMemo(() => ({ groupId, limit: 15 }), [groupId]);
    const messagesQuery = trpc.messages.listByGroup.useInfiniteQuery(queryInput, {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        select: (data) => data.pages.flatMap((page) => page.messages),
    });

    const invalidateMessages = useCallback(() => {
        utils.messages.listByGroup.invalidate();
    }, [utils.messages.listByGroup]);

    useGroupBroadcasts({ groupId, onMessage: invalidateMessages });

    const sendMessage = useCallback(
        async (text: string) => {
            if (!profile) return;
            const localMessage = MessageMock.build({
                text,
                authorId: session.user.id,
                groupId,
            });
            const localMessageWithAuthor: DB.Message<{ author: true }> = {
                ...localMessage,
                author: profile,
            };
            utils.messages.listByGroup.setInfiniteData(queryInput, (data) => {
                if (!data) return data;
                return {
                    ...data,
                    pages: data.pages.map((page, index) => {
                        if (index === 0) {
                            return {
                                ...page,
                                messages: [localMessageWithAuthor, ...page.messages],
                            };
                        }
                        return page;
                    }),
                };
            });
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
            queryInput,
            sendMessageMutation,
            session.user.id,
            utils.messages.listByGroup,
        ]
    );

    return {
        ...messagesQuery,
        invalidateMessages,
        sendMessage,
    };
};
