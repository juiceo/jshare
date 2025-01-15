import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { formatAmount } from '@jshare/common';
import type { Group, GroupParticipant, Image as ImageType } from '@jshare/db/models';

import { Image } from '~/components/atoms/Image';
import { Stack } from '~/components/atoms/Stack';
import { StatusBadge } from '~/components/StatusBadge';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export type GroupCardProps = {
    group: Group & { coverImage: ImageType | null; participants: GroupParticipant[] };
};

export const GroupCard = (props: GroupCardProps) => {
    const { group } = props;
    const user = useCurrentUser();

    const { data: groupTotal } = trpc.expenses.getTotalForGroup.useQuery({ groupId: group.id });
    const { data: userStatus } = trpc.balances.getForParticipantInGroup.useQuery({
        groupId: group.id,
        userId: user.id,
    });

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
                        {userStatus && (
                            <StatusBadge
                                amount={userStatus.balance}
                                currency={group.currency}
                                prefix="You:"
                            />
                        )}
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
