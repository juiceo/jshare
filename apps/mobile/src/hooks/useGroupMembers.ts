import { trpc } from '~/services/trpc';

export const useGroupMembers = (groupId: string) => {
    const membersQuery = trpc.groupParticipants.list.useQuery({ groupId });

    return membersQuery;
};
