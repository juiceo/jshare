import { Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { observer } from 'mobx-react-lite';

import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { IconButton } from '~/components/IconButton';
import { StatusBadge } from '~/components/StatusBadge';
import { useUserBalance } from '~/hooks/useUserBalance';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { useGroupContext } from '~/wrappers/GroupContext';

export const ChatStatusHeader = observer(() => {
    const { group } = useGroupContext();
    const user = SessionStore.user;

    const expenses = Store.expenses.findMany({ groupId: group.id });
    const payments = Store.payments.findMany({ groupId: group.id });

    const balance = useUserBalance({
        userId: user.id,
        currency: group.data.currency,
        expenses,
        payments,
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
                        params: { groupId: group.id },
                    })
                }
            >
                <Stack row alignCenter justifyBetween p="md">
                    <Box>
                        <StatusBadge amount={balance.balance} currency={group.data.currency} />
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
});
