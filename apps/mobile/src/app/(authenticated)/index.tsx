import { Pressable } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { GroupCard } from '~/components/GroupCard/GroupCard';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/',
    },
    ({ router }) => {
        const { theme } = useTheme();
        const [groups] = trpc.groups.list.useSuspenseQuery();

        return (
            <Screen>
                <Screen.Content scrollable contentStyle={{ paddingBottom: 100 }}>
                    <Stack column px="xl" pt="3xl">
                        <Stack mt="3xl" br="xl" mb="xl">
                            <Stack column spacing="md">
                                <Typography variant="h1">Your groups</Typography>
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
                <Screen.Footer>
                    <Stack row center spacing="xl" p="xl">
                        <BorderlessButton
                            onPress={() => router.push('/create-group')}
                            style={{ flex: 1 }}
                        >
                            <Stack column center spacing="md">
                                <Stack center w={24} ar="1/1" br="full" bg="primary.light">
                                    <Icon
                                        name="Plus"
                                        size={16}
                                        color={theme.palette.text.primary}
                                    />
                                </Stack>
                                <Typography variant="buttonSmall" style={{ lineHeight: 0 }}>
                                    Create group
                                </Typography>
                            </Stack>
                        </BorderlessButton>
                        <BorderlessButton
                            onPress={() => router.push('/join-group')}
                            style={{ flex: 1 }}
                        >
                            <Stack column center spacing="md">
                                <Stack center w={24} ar="1/1" br="full" bg="primary.light">
                                    <Icon
                                        name="CaseSensitive"
                                        size={16}
                                        color={theme.palette.text.primary}
                                    />
                                </Stack>
                                <Typography variant="buttonSmall" style={{ lineHeight: 0 }}>
                                    Join with code
                                </Typography>
                            </Stack>
                        </BorderlessButton>
                    </Stack>
                </Screen.Footer>
            </Screen>
        );
    }
);
