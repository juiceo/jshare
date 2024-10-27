import { useCallback } from 'react';
import { Pressable } from 'react-native';

import type { Profile } from '@jshare/db';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useFormField } from '~/hooks/useFormField';
import { generateIdenticon } from '~/services/identicons';
import { useSession } from '~/wrappers/SessionProvider';

export default function ProfilePage() {
    const { signOut } = useSession();

    const avatar = useFormField<string | undefined>('');
    const firstName = useFormField<string>('', (value) => {
        if (!value) return 'First name is required';
        return { value };
    });
    const lastName = useFormField<string>('');

    const handleSaveProfile = useCallback((value: Partial<Profile>) => {
        /**
         * TODO: Implement
         */
    }, []);

    return (
        <Screen screenOptions={{ title: 'Profile' }}>
            <Screen.Content scrollable>
                <Stack flex={1} spacing="md">
                    <Stack column center p="xl" br="md" spacing="none">
                        <Typography variant="body2">Firstname Lastname</Typography>
                        <Typography variant="body2" color="secondary">
                            Joined Oct 24, 2024
                        </Typography>
                        <Pressable
                            onPress={() => {
                                const identicon = generateIdenticon(`${Math.random()}`);
                                avatar.setValue(identicon);
                                handleSaveProfile({ avatar: identicon });
                            }}
                        >
                            <Avatar size="lg" source={avatar.value} mt="xl" />
                        </Pressable>
                    </Stack>
                    <TextField
                        label={'First name'}
                        value={firstName.value}
                        onChange={firstName.setValue}
                        error={firstName.error}
                        TextInputProps={{
                            placeholder: 'John',
                            onBlur: () => {
                                const validation = firstName.validate();
                                if (validation.ok) {
                                    handleSaveProfile({ firstName: firstName.value });
                                }
                            },
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={lastName.value}
                        onChange={lastName.setValue}
                        TextInputProps={{
                            placeholder: 'Doe',
                            onBlur: () => handleSaveProfile({ lastName: lastName.value }),
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
