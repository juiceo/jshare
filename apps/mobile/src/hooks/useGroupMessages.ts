import { trpc } from '~/services/trpc';

export const useGroupMessages = (groupId: string) => {
    const messagesQuery = trpc.messages.listByGroup.useQuery({ groupId });

    return messagesQuery;
};
