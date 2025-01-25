import React from 'react';
import { useRouter } from 'expo-router';

import { formatAmount } from '@jshare/common';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { StatusBadge } from '~/components/StatusBadge';
import { Typography } from '~/components/Typography';
import { UserName } from '~/components/UserName';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/summary',
    },
    ({ params }) => {
        const router = useRouter();
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const [groupTotal] = trpc.expenses.getTotalForGroup.useSuspenseQuery({
            groupId: params.groupId,
        });
        const [balances] = trpc.balances.getByParticipantInGroup.useSuspenseQuery({
            groupId: params.groupId,
        });

        return (
            <Screen>
                <Screen.Header title="Summary" subtitle={group.name} blur />
                <Screen.Content scrollable disableHeaderOffset>
                    <Stack column center alignCenter ar="1/1" p="2xl">
                        <Typography variant="overline">Group total:</Typography>
                        <Typography variant="h1">
                            {formatAmount(groupTotal, group.currency)}
                        </Typography>
                    </Stack>
                    <Stack br="2xl">
                        {balances.map((item, index) => {
                            return (
                                <React.Fragment key={item.userId}>
                                    <Stack row p="xl" spacing="xl">
                                        <Avatar userId={item.userId} size="lg" />
                                        <Stack column flex={1}>
                                            <Typography variant="h6">
                                                <UserName userId={item.userId} variant="short" />
                                            </Typography>
                                            <Typography variant="body2" color="hint">
                                                Paid: {formatAmount(item.paid, group.currency)}
                                            </Typography>
                                            <Typography variant="body2" color="hint">
                                                Received:{' '}
                                                {formatAmount(item.received, group.currency)}
                                            </Typography>
                                        </Stack>
                                        <Stack center>
                                            <StatusBadge
                                                amount={item.balance}
                                                currency={group.currency}
                                            />
                                        </Stack>
                                    </Stack>
                                    {index !== balances.length - 1 && (
                                        <Divider horizontal color="background.elevation1" />
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </Stack>
                </Screen.Content>
                <Screen.Footer>
                    <Button
                        color="primary"
                        onPress={() =>
                            router.push({
                                pathname: '/(authenticated)/group/[groupId]/settle',
                                params: { groupId: group.id },
                            })
                        }
                    >
                        Settle up
                    </Button>
                </Screen.Footer>
            </Screen>
        );
    }
);
