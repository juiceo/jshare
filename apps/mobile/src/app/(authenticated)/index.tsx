import { Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { GroupCard } from '~/components/GroupCard/GroupCard';
import { Screen } from '~/components/Screen';
import { EmptyState } from '~/components/util/EmptyState';
import { LoadingState } from '~/components/util/LoadingState';
import { QuerySwitch } from '~/components/util/QuerySwitch';
import { trpc } from '~/services/trpc';

export default function HomePage() {
    const router = useRouter();
    const profile = trpc.profiles.get.useQuery();
    const groupsQuery = trpc.groups.listParticipating.useQuery();

    return (
        <Screen screenOptions={{ title: 'Home', headerShown: false }} disableBottomInset>
            <Screen.Content padding="none">
                <Stack row justifyBetween p="md">
                    <Typography variant="h3">Your groups</Typography>
                    <Pressable onPress={() => router.push('/profile')}>
                        <Avatar size="sm" source={profile.data?.avatar} />
                    </Pressable>
                </Stack>
                <Stack flex={1}>
                    <QuerySwitch
                        query={groupsQuery}
                        loading={<LoadingState message="Loading groups..." />}
                        error={
                            <Stack flex={1}>
                                <EmptyState
                                    title="Oops!"
                                    message="Something went wrong while loading your groups..."
                                />
                                <Button color="secondary" onPress={groupsQuery.refetch}>
                                    Retry
                                </Button>
                            </Stack>
                        }
                        empty={
                            <Stack flex={1}>
                                <EmptyState
                                    title="Hi there! 👋"
                                    message="Good to see you here. Create a group or join an existing one to get started."
                                />
                            </Stack>
                        }
                    >
                        {(groups) => (
                            <Stack flex={1}>
                                <ScrollView
                                    style={{ flex: 1 }}
                                    contentContainerStyle={{ paddingVertical: 20 }}
                                >
                                    <Stack column spacing="md">
                                        {groups.map((g) => (
                                            <GroupCard key={g.id} group={g} />
                                        ))}
                                    </Stack>
                                </ScrollView>
                            </Stack>
                        )}
                    </QuerySwitch>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
