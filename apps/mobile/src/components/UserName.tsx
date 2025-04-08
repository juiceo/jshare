import { getUserFullName, getUserShortName } from '@jshare/common';

import { trpc } from '~/lib/trpc';
import { useSession } from '~/wrappers/SessionProvider';

export type UserNameProps = {
    userId: string;
    variant: 'short' | 'full';
    prefix?: string;
};

export const UserName = (props: UserNameProps) => {
    const { session } = useSession();
    const { userId } = props;
    const { data: profile } = trpc.profiles.get.useQuery({ id: userId });

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
