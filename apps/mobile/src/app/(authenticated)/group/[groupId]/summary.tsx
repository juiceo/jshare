import { formatAmount, getUserFullName } from '@jshare/common';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { Avatar } from '~/components/Avatar';
import { Screen } from '~/components/Screen';
import { StatusBadge } from '~/components/StatusBadge';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/summary',
    },
    ({ params }) => {
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        const { data: groupTotal } = trpc.expenses.getTotalForGroup.useQuery({
            groupId: params.groupId,
        });
        const [statusByUser] = trpc.expenses.getStatusByUserInGroup.useSuspenseQuery({
            groupId: params.groupId,
        });

        return (
            <Screen>
                <Screen.Header title="Summary" subtitle={group.name} blur />
                <Screen.Content scrollable disableTopInset disableHeaderOffset>
                    <Stack column justifyEnd alignCenter ar="1/1" p="2xl">
                        <Typography variant="overline">Group total:</Typography>
                        <Typography variant="h1">
                            {groupTotal ? formatAmount(groupTotal, group.currency) : ''}
                        </Typography>
                    </Stack>
                    <Stack mt="2xl" br="2xl">
                        {statusByUser.map((item, index) => {
                            return (
                                <>
                                    <Stack row key={item.userId} p="xl" spacing="xl">
                                        <Avatar userId={item.userId} size="lg" />
                                        <Stack column flex={1}>
                                            <Typography variant="h6">
                                                {getUserFullName(item.profile)}
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
                                    {index !== statusByUser.length - 1 && (
                                        <Divider horizontal color="background.elevation1" />
                                    )}
                                </>
                            );
                        })}
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    }
);
