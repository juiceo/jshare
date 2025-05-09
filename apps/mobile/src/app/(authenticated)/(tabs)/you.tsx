import { RectButton } from 'react-native-gesture-handler';
import dayjs from 'dayjs';
import { router } from 'expo-router';
import { observer } from 'mobx-react-lite';

import type { DB } from '@jshare/db';

import { Divider } from '~/components/atoms/Divider';
import { Stack } from '~/components/atoms/Stack';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Icon } from '~/components/Icon';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { Store } from '~/lib/store/collections';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export default screen(
    observer(() => {
        const user = useCurrentUser();

        const profile = Store.profiles.findById(user.id);

        const updateAvatar = (avatar: DB.Image | null) => {
            profile?.set({ avatar });
            profile?.update({
                avatarId: avatar?.id,
            });
        };

        return (
            <Screen>
                <Screen.Content scrollable>
                    <Stack flex={1} spacing="md" px="xl">
                        <Stack column center p="xl" br="md" spacing="none">
                            <Stack mt="2xl" center>
                                <AvatarPicker
                                    value={profile?.data?.avatar ?? null}
                                    onChange={updateAvatar}
                                    fallback={{
                                        type: 'ui-avatar',
                                        name: profile?.get('fullName') ?? '',
                                    }}
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
                                        color={(t) => t.palette.text.primary}
                                    />
                                    <Typography variant="h5">Profile</Typography>
                                </Stack>
                            </RectButton>
                            {/* <Divider horizontal /> */}
                            {/* <RectButton onPress={() => router.push('/preferences')}>
                                <Stack row alignCenter p="xl" spacing="xl">
                                    <Icon
                                        name="Settings2"
                                        size={32}
                                        color={(t) => t.palette.text.primary}
                                    />
                                    <Typography variant="h5">Preferences</Typography>
                                </Stack>
                            </RectButton> */}
                            <Divider horizontal />
                            <RectButton onPress={() => router.push('/settings')}>
                                <Stack row alignCenter p="xl" spacing="xl">
                                    <Icon
                                        name="Cog"
                                        size={32}
                                        color={(t) => t.palette.text.primary}
                                    />
                                    <Typography variant="h5">Account & System</Typography>
                                </Stack>
                            </RectButton>
                            <Divider horizontal />
                            <RectButton onPress={() => router.push('/updates')}>
                                <Stack row alignCenter p="xl" spacing="xl">
                                    <Icon
                                        name="CloudDownload"
                                        size={32}
                                        color={(t) => t.palette.text.primary}
                                    />
                                    <Typography variant="h5">Updates</Typography>
                                </Stack>
                            </RectButton>
                            {__DEV__ && (
                                <>
                                    <Divider horizontal />
                                    <RectButton onPress={() => router.push('/developer-settings')}>
                                        <Stack row alignCenter p="xl" spacing="xl">
                                            <Icon
                                                name="Code"
                                                size={32}
                                                color={(t) => t.palette.text.primary}
                                            />
                                            <Typography variant="h5">Developer settings</Typography>
                                        </Stack>
                                    </RectButton>
                                </>
                            )}
                        </Stack>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    })
);
