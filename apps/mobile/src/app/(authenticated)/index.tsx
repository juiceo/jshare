import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useProfile } from '~/wrappers/AuthContext';

export default function HomePage() {
    const router = useRouter();
    const { data: profile } = useProfile();

    return (
        <Screen screenOptions={{ title: 'Home', headerShown: false }}>
            <Screen.Content>
                <Stack row justifyBetween p="md">
                    <Typography variant="h3">JShare</Typography>
                    <Pressable onPress={() => router.push('/profile')}>
                        <Avatar size="sm" source={profile?.avatar} />
                    </Pressable>
                </Stack>
                <Stack flex={1} center>
                    <Typography variant="h3" color="primary" align="center" maxW="60%">
                        Hi there! 👋
                    </Typography>
                    <Typography variant="body1" color="primary" align="center" maxW="60%">
                        Good to see you here. Create a group or join an existing one to get started.
                    </Typography>
                </Stack>
                <Stack column mt="xl" spacing="md">
                    <Button color="secondary" variant="text">
                        Enter invite code
                    </Button>
                    <Button color="primary" variant="contained">
                        Create new group
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
