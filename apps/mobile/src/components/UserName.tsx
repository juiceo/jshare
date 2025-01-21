import { getUserFullName, getUserShortName } from '@jshare/common';

import { trpc } from '~/services/trpc';

export type UserNameProps = {
    userId: string;
    variant: 'short' | 'full';
};

export const UserName = (props: UserNameProps) => {
    const { userId } = props;
    const { data: profile } = trpc.profiles.get.useQuery({ id: userId });

    if (!profile) return '';
    switch (props.variant) {
        case 'short':
            return getUserShortName(profile);
        case 'full':
            return getUserFullName(profile);
    }
};
