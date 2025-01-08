import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { formatAmount } from '@jshare/common';
import { DB } from '@jshare/types';

import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';

export type GroupCardProps = {
    group: DB.Group<{ coverImage: true; participants: true }>;
};

export const GroupCard = (props: GroupCardProps) => {
    const { group } = props;

    const { data: groupTotal } = trpc.expenses.getGroupTotal.useQuery({ groupId: group.id });

    console.log('COVER IMAGE', group.coverImage);

    return (
        <Stack
            br="xl"
            bg="background.elevation1"
            column
            alignStretch
            style={{ overflow: 'hidden' }}
        >
            <Stack style={{ position: 'relative' }}>
                <Image
                    height={140}
                    width={Dimensions.get('window').width}
                    image={group.coverImage}
                    fit="cover"
                    quality={80}
                />
                <LinearGradient
                    colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, paddingBottom: 50 }}
                >
                    <Stack p="xl" row justifyBetween alignCenter>
                        <Typography variant="caption">2 days ago</Typography>
                        <Stack
                            bg="background.elevation1"
                            row
                            center
                            spacing="sm"
                            br="xl"
                            px="lg"
                            py="sm"
                        >
                            <Icon
                                name="ArrowDownRight"
                                size={16}
                                color={(theme) => theme.palette.error.light}
                            />
                            <Typography variant="caption" color="error.light">
                                You owe: 100$
                            </Typography>
                        </Stack>
                    </Stack>
                </LinearGradient>
            </Stack>
            <Stack column p="xl" br="2xl" style={{ position: 'relative' }}>
                <Typography variant="h4">{group.name}</Typography>
                <Typography variant="caption" color="secondary">
                    {/**
                     * TODO: Should pluralize based on number of members
                     */}
                    {formatAmount(groupTotal ?? 0, group.currency)} | {group.participants.length}{' '}
                    members
                </Typography>
            </Stack>
        </Stack>
    );
};
