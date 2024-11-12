import { trpc } from '~/services/trpc';

export const useGroup = (id: string) => {
    const groupQuery = trpc.groups.get.useQuery({ id });

    return groupQuery;
};
