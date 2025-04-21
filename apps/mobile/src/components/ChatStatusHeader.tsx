import { Pressable } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { IconButton } from '~/components/IconButton';
import { StatusBadge } from '~/components/StatusBadge';
import { trpc } from '~/lib/trpc';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export type ChatStatusHeaderProps = {
    groupId: string;
    currency: string;
};

export const ChatStatusHeader = (props: ChatStatusHeaderProps) => {
    const { groupId, currency } = props;

    const user = useCurrentUser();
    const userStatus = useQuery(
        trpc.balances.getForParticipantInGroup.queryOptions({
            groupId,
            userId: user.id,
        })
    ).data;
    return (
        <BlurView
            style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
            }}
            intensity={50}
        >
            <Pressable
                onPress={() =>
                    router.push({
                        pathname: '/group/[groupId]/summary',
                        params: { groupId },
                    })
                }
            >
                <Stack row alignCenter justifyBetween p="md">
                    <Box>
                        {userStatus && (
                            <StatusBadge amount={userStatus.balance} currency={currency} />
                        )}
                    </Box>
                    <IconButton
                        icon="ChevronRight"
                        size="sm"
                        color="primary"
                        text="View summary"
                        variant="ghost"
                    />
                </Stack>
            </Pressable>
        </BlurView>
    );
};
