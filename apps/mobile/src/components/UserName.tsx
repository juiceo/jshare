import { observer } from 'mobx-react-lite';

import { getUserFullName, getUserShortName } from '@jshare/common';

import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';

export type UserNameProps = {
    userId: string;
    variant: 'short' | 'full';
    prefix?: string;
};

export const UserName = observer((props: UserNameProps) => {
    const { userId } = props;

    const user = SessionStore.user;
    const profile = Store.profiles.findById(userId);

    const userName = (() => {
        if (!profile?.data) return '';
        if (user.id === userId) return 'You';
        switch (props.variant) {
            case 'short':
                return getUserShortName(profile.data);
            case 'full':
                return getUserFullName(profile.data);
        }
    })();

    return [props.prefix, userName].filter(Boolean).join(' ');
});
