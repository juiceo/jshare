import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useProfile, useSession } from '~/wrappers/AuthContext';

export default function ProfilePage() {
    const { signOut } = useSession();
    const { data: profile } = useProfile();

    return (
        <Screen screenOptions={{ title: 'Profile' }}>
            <Screen.Content scrollable>
                <Stack flex={1} spacing="md">
                    <Stack column center p="xl" br="md" spacing="none">
                        <Typography variant="body2">
                            {profile?.firstName} {profile?.lastName}
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            Joined Oct 24, 2024
                        </Typography>
                        <Avatar size="lg" source={profile?.avatar} mt="xl" />
                    </Stack>
                    <TextField
                        label={'First name'}
                        TextInputProps={{
                            placeholder: 'John',
                        }}
                        value={profile?.firstName ?? ''}
                        onChange={function (value: string): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={profile?.lastName ?? ''}
                        TextInputProps={{
                            placeholder: 'Doe',
                        }}
                        onChange={function (value: string): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                </Stack>
                <Button color="error" variant="text" onPress={signOut} mt="3xl">
                    Sign out
                </Button>
            </Screen.Content>
            <Screen.Footer padding="md">
                <Button color="primary" variant="contained">
                    Save changes
                </Button>
            </Screen.Footer>
        </Screen>
    );
}
