import { Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';

import type { DB } from '@jshare/types';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { IconButton } from '~/components/IconButton';
import { StatusBadge } from '~/components/StatusBadge';
import { trpc } from '~/services/trpc';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export type ChatStatusHeaderProps = {
    groupId: string;
    currency: DB.Currency;
};

export const ChatStatusHeader = (props: ChatStatusHeaderProps) => {
    const { groupId, currency } = props;
    const user = useCurrentUser();
    const { data: userStatus } = trpc.expenses.getStatusForUserInGroup.useQuery({
        groupId,
        userId: user.id,
    });
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
                <Stack row justifyBetween p="md">
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
