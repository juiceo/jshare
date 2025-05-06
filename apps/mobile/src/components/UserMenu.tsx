import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';

import { getUserShortName } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Menu, type MenuOption } from '~/components/atoms/Menu';
import { Avatar } from '~/components/Avatar';
import { Store } from '~/lib/store/collections';

export type UserMenuProps = {
    value: string | undefined;
    onChange: (userId: string, profile: DB.Profile) => void;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
} & {
    userIds: string[];
};

export const UserMenu = observer((props: UserMenuProps) => {
    const { value, onChange, isOpen, onClose, title = 'Select user' } = props;

    const users = Store.profiles.findByIds(props.userIds);

    const options = useMemo((): MenuOption<string, DB.Profile>[] => {
        return users.map((user) => ({
            id: user.id,
            label: getUserShortName(user.data),
            data: user.data,
            icon: <Avatar userId={user.id} size="sm" />,
        }));
    }, [users]);

    return (
        <Menu
            title={title}
            value={value}
            onChange={(userId, profile) => onChange(userId, profile)}
            isOpen={isOpen}
            onClose={onClose}
            options={options}
        />
    );
});
