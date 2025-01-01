import { useState } from 'react';

import type { DB } from '@jshare/types';

import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useProfile } from '~/hooks/useProfile';
import { useSession } from '~/wrappers/SessionProvider';

export default function ProfilePage() {
    const { profile, isFetched } = useProfile();
    if (!isFetched) return null;
    if (!profile) return null;

    return <ProfilePageInner profile={profile} />;
}

const ProfilePageInner = (props: { profile: DB.Profile<{ avatar: true }> }) => {
    const { profile } = props;
    const { signOut } = useSession();
    const { updateProfile } = useProfile();

    const [firstName, setFirstName] = useState<string>(profile.firstName);
    const [lastName, setLastName] = useState<string>(profile.lastName);

    return (
        <Screen>
            <Screen.Content scrollable>
                <Header title="Profile" />
                <Stack flex={1} spacing="md" px="xl">
                    <Stack column center p="xl" br="md" spacing="none">
                        <Stack mt="2xl">
                            <AvatarPicker
                                value={profile.avatar}
                                onChange={(image) => {
                                    updateProfile({
                                        avatarId: image?.id ?? null,
                                    });
                                }}
                            />
                            <Typography variant="body2" align="center" mt="xl">
                                {profile?.firstName} {profile?.lastName}
                            </Typography>
                            <Typography variant="body2" color="secondary" align="center">
                                Joined Oct 24, 2024
                            </Typography>
                        </Stack>
                    </Stack>
                    <TextField
                        label={'First name'}
                        value={firstName}
                        onChange={setFirstName}
                        error={firstName.length === 0 ? 'First name is required' : null}
                        TextInputProps={{
                            placeholder: 'John',
                            onBlur: () => {
                                if (firstName) {
                                    updateProfile({
                                        firstName,
                                    });
                                }
                            },
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={lastName}
                        onChange={setLastName}
                        TextInputProps={{
                            placeholder: 'Doe',
                            onBlur: () => {
                                updateProfile({
                                    lastName,
                                });
                            },
                        }}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer padding="xl">
                <Button color="error" variant="ghost" onPress={signOut} mt="3xl">
                    Sign out
                </Button>
            </Screen.Footer>
        </Screen>
    );
};
