import { useState } from 'react';
import { Pressable } from 'react-native';

import type { Profile } from '@jshare/prisma';

import { Avatar } from '~/components/atoms/Avatar';
import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useProfile } from '~/hooks/useProfile';
import { generateIdenticon } from '~/services/identicons';
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

    const [avatar, setAvatar] = useState<string | undefined>(profile?.avatar ?? undefined);
    const [firstName, setFirstName] = useState<string>(profile?.firstName ?? '');
    const [lastName, setLastName] = useState<string>(profile?.lastName ?? '');

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
                        <Pressable
                            onPress={() => {
                                const identicon = generateIdenticon(`${Math.random()}`);
                                setAvatar(identicon);
                                updateProfile({
                                    avatar: identicon,
                                });
                            }}
                        >
                            <Avatar size="lg" source={avatar} mt="xl" />
                        </Pressable>
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
            <Screen.Footer>
                <Button color="error" variant="text" onPress={signOut} mt="3xl">
                    Sign out
                </Button>
            </Screen.Footer>
        </Screen>
    );
};
