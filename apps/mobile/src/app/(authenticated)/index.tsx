import { Button } from '../../components/Button';
import { Screen } from '../../components/Screen';
import { Stack } from '../../components/Stack';
import { Typography } from '../../components/Typography';
import { useSession } from '../../wrappers/AuthContext';

export default function Page() {
    const { userId, signOut } = useSession();
    return (
        <Screen name="Home">
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Welcome to JShare
                    </Typography>
                    <Typography variant="body1">You are now logged in as {userId}</Typography>
                    <Button color="error" variant="text" onPress={signOut}>
                        Log out
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
