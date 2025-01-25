import { getUserFullName, getUserShortName } from '@jshare/common';

import { trpc } from '~/services/trpc';
import { useSession } from '~/wrappers/SessionProvider';

export type UserNameProps = {
    userId: string;
    variant: 'short' | 'full';
};

export const UserName = (props: UserNameProps) => {
    const { session } = useSession();
    const { userId } = props;
    const { data: profile } = trpc.profiles.get.useQuery({ id: userId });

    if (!profile) return '';
    if (session?.user.id === userId) return 'You';
    switch (props.variant) {
        case 'short':
            return getUserShortName(profile);
        case 'full':
            return getUserFullName(profile);
    }
};
