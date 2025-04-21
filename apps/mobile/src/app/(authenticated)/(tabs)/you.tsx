import { RectButton } from 'react-native-gesture-handler';
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { router } from 'expo-router';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useDb } from '~/lib/collections/hooks';
import { Profiles } from '~/lib/collections/profiles.collection';
import { trpc } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        auth: true,
    },
    ({ auth }) => {
        const profile = useDb(() => Profiles.findById(auth.userId), [auth.userId]);

        const updateProfile = useMutation(trpc.z.profile.update.mutationOptions());

        const updateAvatar = (avatarId: string | null) => {
            updateProfile.mutateAsync({
                where: { id: auth.userId },
                data: {
                    avatarId,
                },
            });
        };

        const testUpdate = () => {
            Profiles.update(auth.userId, {
                avatarId: null,
            });
        };

        return (
            <Screen>
                <Screen.Content scrollable>
                    <Stack flex={1} spacing="md" px="xl">
                        <Stack column center p="xl" br="md" spacing="none">
                            <Stack mt="2xl" center>
                                <AvatarPicker
                                    value={profile?.data.avatarId ?? null}
                                    profile={profile?.data}
                                    onChange={updateAvatar}
                                />
                                <Typography variant="h6" align="center" mt="xl">
                                    {profile?.data.firstName} {profile?.data.lastName}
                                </Typography>
                                <Typography variant="body2" color="secondary" align="center">
                                    Joined {dayjs(profile?.data.createdAt).format('MMM D, YYYY')}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack bg="background.elevation1" br="xl">
                            <RectButton onPress={() => router.push('/profile')}>
                                <Stack row alignCenter p="xl" spacing="xl">
                                    <Icon
                                        name="UserPen"
                                        size={32}
                                        color={(t) => t.palette.text.secondary}
                                    />
                                    <Typography variant="h5">Profile</Typography>
                                </Stack>
                            </RectButton>
                            <Divider horizontal />
                            <RectButton onPress={() => router.push('/settings')}>
                                <Stack row alignCenter p="xl" spacing="xl">
                                    <Icon
                                        name="Cog"
                                        size={32}
                                        color={(t) => t.palette.text.secondary}
                                    />
                                    <Typography variant="h5">Settings</Typography>
                                </Stack>
                            </RectButton>
                        </Stack>
                        <Button onPress={testUpdate}>Test update</Button>
                        <Button color="error" variant="ghost" onPress={auth.signOut}>
                            Sign out
                        </Button>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    }
);
