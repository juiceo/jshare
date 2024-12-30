import { trpc } from '~/services/trpc';

export const useGroupMessages = (groupId: string) => {
    const messagesQuery = trpc.messages.listByGroup.useInfiniteQuery(
        { groupId, limit: 15 },
        {
            getNextPageParam: (lastPage) => lastPage.nextCursor,
            select: (data) => data.pages.flatMap((page) => page.messages),
        }
    );

    return messagesQuery;
};
