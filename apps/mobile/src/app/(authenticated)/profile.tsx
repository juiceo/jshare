import { useCallback, useState } from 'react';

import type { Profile } from '@jshare/db';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { db } from '~/services/instantdb';
import { useAuth } from '~/wrappers/AuthContext';
import { useAuthenticatedContext } from '~/wrappers/AuthenticatedContext';

export default function ProfilePage() {
    const { signOut } = useAuth();
    const { profile } = useAuthenticatedContext();

    const [firstName, setFirstName] = useState<string>(profile.firstName);
    const [lastName, setLastName] = useState<string>(profile.lastName);

    const handleSaveProfile = useCallback(
        (value: Partial<Profile>) => {
            return db.transact([db.tx.profiles[profile.id].merge(value)]);
        },
        [profile.id]
    );

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
                        value={firstName}
                        onChange={setFirstName}
                        TextInputProps={{
                            placeholder: 'John',
                            onBlur: () => handleSaveProfile({ firstName }),
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={lastName}
                        onChange={setLastName}
                        TextInputProps={{
                            placeholder: 'Doe',
                            onBlur: () => handleSaveProfile({ lastName }),
                        }}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Button color="error" variant="text" onPress={signOut} mt="3xl">
                    Sign out
                </Button>
            </Screen.Footer>
        </Screen>
    );
}
