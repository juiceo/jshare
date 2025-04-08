import { useMemo } from 'react';

import { getUserShortName } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Menu, type MenuOption } from '~/components/atoms/Menu';
import { Avatar } from '~/components/Avatar';

export type UserMenuProps = {
    value: string | undefined;
    onChange: (userId: string, profile: DB.Profile) => void;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
} & (
    | {
          type: 'profiles';
          users: DB.Profile[];
      }
    | {
          type: 'participants';
          users: DB.GroupParticipant<{ user: true }>[];
      }
);

export const UserMenu = (props: UserMenuProps) => {
    const { value, onChange, isOpen, onClose, title = 'Select user' } = props;

    const options = useMemo((): MenuOption<string, DB.Profile>[] => {
        switch (props.type) {
            case 'profiles': {
                return props.users.map((user) => ({
                    id: user.id,
                    label: getUserShortName(user),
                    data: user,
                    icon: <Avatar userId={user.id} size="sm" />,
                }));
            }
            case 'participants': {
                return props.users.map((participant) => ({
                    id: participant.user.id,
                    label: getUserShortName(participant.user),
                    data: participant.user,
                    icon: <Avatar userId={participant.user.id} size="sm" />,
                }));
            }
        }
    }, [props.users, props.type]);

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
};
