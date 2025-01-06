import { trpc } from '~/services/trpc';

export const useGroup = (id: string) => {
    return trpc.groups.get.useSuspenseQuery({ id });
};
