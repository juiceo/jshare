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
        <Screen screenOptions={{ title: 'Home', headerShown: false }}>
            <Screen.Content>
                <Stack row justifyBetween p="md">
                    <Typography variant="h3">JShare</Typography>
                    <Avatar size="sm" source={profile?.avatar} />
                </Stack>
                <Stack flex={1} center>
                    <Typography variant="h3" color="primary" align="center" maxW="60%">
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
