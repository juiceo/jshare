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
import { SessionStore } from '~/lib/store/SessionStore';
import { screen } from '~/wrappers/screen';

const YouScreen = screen(
    observer(() => {
        const user = SessionStore.user;
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

                        <Stack bg="background.secondary" br="xl">
                            <RectButton onPress={() => router.push('/profile')}>
                                <Stack row alignCenter p="xl" spacing="xl">
                                    <Stack center bg="background.level3" p="md" br="full">
                                        <Icon name="UserPen" size={24} color="brand.primary" />
                                    </Stack>
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
                            <Divider horizontal color="background.primary" />
                            <RectButton onPress={() => router.push('/settings')}>
                                <Stack row alignCenter p="xl" spacing="xl">
                                    <Stack center bg="background.level3" p="md" br="full">
                                        <Icon name="Cog" size={24} color="brand.primary" />
                                    </Stack>
                                    <Typography variant="h5">Account & System</Typography>
                                </Stack>
                            </RectButton>
                            <Divider horizontal color="background.primary" />
                            <RectButton onPress={() => router.push('/updates')}>
                                <Stack row alignCenter p="xl" spacing="xl">
                                    <Stack center bg="background.level3" p="md" br="full">
                                        <Icon
                                            name="CloudDownload"
                                            size={24}
                                            color="brand.primary"
                                        />
                                    </Stack>
                                    <Typography variant="h5">Updates</Typography>
                                </Stack>
                            </RectButton>
                            {__DEV__ && (
                                <>
                                    <Divider horizontal color="background.primary" />
                                    <RectButton onPress={() => router.push('/developer-settings')}>
                                        <Stack row alignCenter p="xl" spacing="xl">
                                            <Stack center bg="background.level3" p="md" br="full">
                                                <Icon name="Code" size={24} color="brand.primary" />
                                            </Stack>
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

export default YouScreen;
