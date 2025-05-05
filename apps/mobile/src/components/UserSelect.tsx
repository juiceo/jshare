import { useMemo } from 'react';

import { getUserShortName } from '@jshare/common';
import type { DB } from '@jshare/db';

import { Select, type SelectProps } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Typography } from '~/components/Typography';
import { Store } from '~/lib/store/collections';

export type UserSelectProps = Omit<SelectProps<string, DB.Profile>, 'options'> & {
    userIds: string[];
};

export const UserSelect = (props: UserSelectProps) => {
    const { userIds, ...rest } = props;

    const users = Store.profiles.findByIds(userIds);

    const options = useMemo(() => {
        return users?.map((user) => ({
            id: user.id,
            label: getUserShortName(user.data),
            data: user.data,
            icon: <Avatar userId={user.id} size="sm" />,
        }));
    }, [users]);

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
