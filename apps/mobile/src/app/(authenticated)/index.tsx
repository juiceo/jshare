import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useSession } from '~/wrappers/AuthContext';

export default function Page() {
    const { user, isLoading, signOut } = useSession();

    return (
        <Screen screenOptions={{ title: 'Home' }}>
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Welcome to JShare
                    </Typography>
                    <Typography variant="body1">You are now logged in as {user.email}</Typography>
                    <Button color="error" variant="text" onPress={signOut} loading={isLoading}>
                        Log out
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
