import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useSession } from '~/wrappers/SessionProvider';

export default function HomePage() {
    const router = useRouter();
    const { session } = useSession();

    const testRequest = async () => {
        const test = await fetch('http://localhost:3000/profiles', {
            headers: new Headers([['Authorization', session?.access_token ?? '']]),
        })
            .then(async (res) => {
                console.log('GOT RES', res.status);
                const data = await res.json();
                console.log('TEST REQUEST SUCCESS', data);
            })
            .catch((err) => {
                console.log('TEST REQUEST ERROR', err);
            });
    };

    return (
        <Screen screenOptions={{ title: 'Home', headerShown: false }}>
            <Screen.Content>
                <Stack row justifyBetween p="md">
                    <Typography variant="h3">JShare</Typography>
                    <Pressable onPress={() => router.push('/profile')}>
                        <Avatar size="sm" source={''} />
                    </Pressable>
                </Stack>
                <Stack flex={1} center>
                    <Typography variant="h3" color="primary" align="center" maxW="60%">
                        Hi there! 👋
                    </Typography>
                    <Typography variant="body1" color="primary" align="center" maxW="60%">
                        Good to see you here. Create a group or join an existing one to get started.
                    </Typography>
                    <Button variant="contained" color="primary" onPress={testRequest}>
                        Test request
                    </Button>
                </Stack>
                <Stack column mt="xl" spacing="md">
                    <Button
                        color="secondary"
                        variant="text"
                        onPress={() => {
                            router.push('/join-group');
                        }}
                    >
                        Enter invite code
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onPress={() => {
                            router.push('/create-group');
                        }}
                    >
                        Create new group
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
