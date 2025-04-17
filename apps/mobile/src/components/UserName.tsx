import { useQuery } from '@tanstack/react-query';

import { getUserFullName, getUserShortName } from '@jshare/common';

import { useTRPC } from '~/lib/trpc';
import { useSession } from '~/wrappers/SessionProvider';

export type UserNameProps = {
    userId: string;
    variant: 'short' | 'full';
    prefix?: string;
};

export const UserName = (props: UserNameProps) => {
    const { userId } = props;
    const trpc = useTRPC();
    const { session } = useSession();
    const profile = useQuery(trpc.profiles.get.queryOptions({ id: userId })).data;

    const userName = (() => {
        if (!profile) return '';
        if (session?.user.id === userId) return 'You';
        switch (props.variant) {
            case 'short':
                return getUserShortName(profile);
            case 'full':
                return getUserFullName(profile);
        }
    })();

    return [props.prefix, userName].filter(Boolean).join(' ');
};
