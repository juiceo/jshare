import { useState } from 'react';

import type { Profile } from '@jshare/prisma';

import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
import { useProfile } from '~/hooks/useProfile';
import { useSession } from '~/wrappers/SessionProvider';

export default function ProfilePage() {
    const { profile, isFetched } = useProfile();
    if (!isFetched) return null;

    return <ProfilePageInner profile={profile ?? null} />;
}

const ProfilePageInner = (props: { profile: Profile | null }) => {
    const { profile } = props;
    const { signOut } = useSession();
    const { updateProfile } = useProfile();

    const [avatarId, setAvatarId] = useState<string | null>(profile?.avatarId ?? null);
    const [firstName, setFirstName] = useState<string>(profile?.firstName ?? '');
    const [lastName, setLastName] = useState<string>(profile?.lastName ?? '');

    return (
        <Screen>
            <Screen.Content scrollable>
                <Header title="Profile" />
                <Stack flex={1} spacing="md" p="xl">
                    <Stack column center p="xl" br="md" spacing="none">
                        <Typography variant="body2">
                            {profile?.firstName} {profile?.lastName}
                        </Typography>
                        <Typography variant="body2" color="secondary">
                            Joined Oct 24, 2024
                        </Typography>
                        <Stack mt="2xl">
                            <AvatarPicker
                                value={avatarId}
                                onChange={(id) => {
                                    setAvatarId(id);
                                    updateProfile({
                                        avatarId: id,
                                    });
                                }}
                            />
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
                <Button color="error" variant="text" onPress={signOut} mt="3xl">
                    Sign out
                </Button>
            </Screen.Footer>
        </Screen>
    );
};
