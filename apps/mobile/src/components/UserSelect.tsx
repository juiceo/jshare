import { useMemo } from 'react';

import { getUserShortName } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Select, type SelectProps } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Typography } from '~/components/Typography';

export type UserSelectProps = Omit<SelectProps<string, DB.Profile>, 'options'> &
    (
        | {
              type: 'participants';
              users: DB.GroupParticipant<{ user: true }>[];
          }
        | {
              type: 'users';
              users: DB.Profile[];
          }
    );

export const UserSelect = (props: UserSelectProps) => {
    const { type, users, ...rest } = props;

    const options = useMemo(() => {
        switch (type) {
            case 'participants': {
                return users?.map((member) => ({
                    id: member.userId,
                    label: getUserShortName(member.user),
                    data: member.user,
                    icon: <Avatar userId={member.userId} size="sm" />,
                }));
            }
            case 'users': {
                return users.map((user) => ({
                    id: user.userId,
                    label: getUserShortName(user),
                    data: user,
                    icon: <Avatar userId={user.userId} size="sm" />,
                }));
            }
        }
    }, [type, users]);

    return (
        <Select
            {...rest}
            options={options}
            renderValue={(userId, profile) => {
                return (
                    <Stack row alignCenter spacing="md">
                        <Avatar userId={userId} size="sm" />
                        <Typography variant="body1" color="primary">
                            {getUserShortName(profile)}
                        </Typography>
                    </Stack>
                );
            }}
        />
    );
};
