import { Pressable } from 'react-native';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { GroupCard } from '~/components/GroupCard/GroupCard';
import { Icon } from '~/components/Icon';
import { ProfileBadge } from '~/components/ProfileBadge/ProfileBadge';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/',
    },
    ({ router }) => {
        const [groups] = trpc.groups.list.useSuspenseQuery();

        return (
            <Screen>
                <Screen.Content scrollable contentStyle={{ paddingBottom: 100 }}>
                    <Stack column px="xl" pt="3xl">
                        <Stack row justifyBetween>
                            <ProfileBadge onPress={() => router.push('/(authenticated)/profile')} />
                            <Stack row center spacing="xl">
                                <Icon name="Search" />
                                <Icon name="Bell" />
                            </Stack>
                        </Stack>
                        <Stack row height={140} mt="3xl">
                            <Stack column justifyCenter>
                                <Typography variant="overline" mb="md">
                                    Your balance
                                </Typography>
                                <Typography variant="h1">$13,370.86</Typography>
                            </Stack>
                            <Stack
                                bg="error.light"
                                br="2xl"
                                height="100%"
                                width={200}
                                style={{ position: 'relative', right: -50 }}
                            />
                        </Stack>
                        <Stack mt="3xl" p="xl" br="xl">
                            <Stack row alignCenter justifyBetween>
                                <Typography variant="overline">Your groups</Typography>
                                <Button
                                    size="sm"
                                    color="primary"
                                    onPress={() => router.push('/create-group')}
                                >
                                    New group
                                </Button>
                            </Stack>
                        </Stack>
                        <Stack column spacing="xl">
                            {groups?.map((group) => (
                                <Pressable
                                    key={group.id}
                                    onPress={() =>
                                        router.push({
                                            pathname: '/group/[groupId]',
                                            params: { groupId: group.id },
                                        })
                                    }
                                >
                                    <GroupCard group={group} />
                                </Pressable>
                            ))}
                        </Stack>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    }
);
