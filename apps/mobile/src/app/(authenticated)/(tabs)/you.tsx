import { RectButton } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import { router } from 'expo-router';
import { observer } from 'mobx-react-lite';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { Store } from '~/lib/store/collections';
import { screen } from '~/wrappers/screen';
import { useCurrentUser, useSession } from '~/wrappers/SessionProvider';

export default screen(
    observer(() => {
        const user = useCurrentUser();
        const { signOut } = useSession();

        const profile = Store.profiles.findById(user.id);

        const updateAvatar = (avatarId: string | null) => {
            profile?.update({
                avatarId,
            });
        };

        return (
            <Screen>
                <Screen.Content scrollable>
                    <Stack flex={1} spacing="md" px="xl">
                        <Stack column center p="xl" br="md" spacing="none">
                            <Stack mt="2xl" center>
                                <AvatarPicker
                                    value={profile?.data?.avatarId ?? null}
                                    profile={profile?.data ?? undefined}
                                    onChange={updateAvatar}
                                />
                                <Typography variant="h6" align="center" mt="xl">
                                    {profile?.get('fullName')}
                                </Typography>
                                <Typography variant="body2" color="secondary" align="center">
                                    Joined {dayjs(profile?.data?.createdAt).format('MMM D, YYYY')}
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
                        <Button color="error" variant="ghost" onPress={signOut}>
                            Sign out
                        </Button>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    })
);
