import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useProfile, useSession } from '~/wrappers/AuthContext';

export default function Page() {
    const { isLoading, signOut } = useSession();
    const { data: profile } = useProfile();

    return (
        <Screen screenOptions={{ title: 'Home' }}>
            <Screen.Content>
                <Stack flex={1} center>
                    <Avatar size="md" source={profile?.avatar} />
                    <Typography variant="h1" color="accent.main" align="center">
                        Welcome, {profile?.firstName} {profile?.lastName}!
                    </Typography>
                    <Button color="error" variant="text" onPress={signOut} loading={isLoading}>
                        Log out
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
