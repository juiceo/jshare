import { useState } from 'react';
import dayjs from 'dayjs';
import * as Updates from 'expo-updates';

import type { DB } from '@jshare/db';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useUpdateProfile } from '~/hooks/useUpdateProfile';
import { trpc } from '~/services/trpc';
import { toast } from '~/state/toast';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/(tabs)/profile',
        auth: true,
    },
    ({ auth }) => {
        const [profile] = trpc.profiles.me.useSuspenseQuery();
        const { updateProfile } = useUpdateProfile();
        const updates = Updates.useUpdates();

        const [firstName, setFirstName] = useState<string>(profile.firstName);
        const [lastName, setLastName] = useState<string>(profile.lastName);
        const [currency, setCurrency] = useState<DB.CurrencyCode>(profile.currency);

        const checkForUpdates = () => {
            Updates.checkForUpdateAsync().then((result) => {
                if (result.isAvailable) {
                    Updates.fetchUpdateAsync();
                    Updates.reloadAsync();
                } else {
                    toast.info('Your app version is up to date!');
                }
            });
        };

        return (
            <Screen>
                <Screen.Content scrollable>
                    <Stack flex={1} spacing="md" px="xl">
                        <Stack column center p="xl" br="md" spacing="none">
                            <Stack mt="2xl" center>
                                <AvatarPicker
                                    value={profile.avatar}
                                    profile={profile}
                                    onChange={(image) => {
                                        updateProfile({
                                            avatarId: image?.id ?? null,
                                        });
                                    }}
                                />
                                <Typography variant="h6" align="center" mt="xl">
                                    {profile?.firstName} {profile?.lastName}
                                </Typography>
                                <Typography variant="body2" color="secondary" align="center">
                                    Joined {dayjs(profile.createdAt).format('MMM D, YYYY')}
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

                        <Select
                            label="Preferred currency"
                            placeholder="Select currency"
                            options={CURRENCY_OPTIONS}
                            value={currency}
                            onChange={(value) => {
                                if (!value) return;
                                setCurrency(value);
                                updateProfile({
                                    currency: value,
                                });
                            }}
                            MenuProps={{
                                title: 'Select currency',
                            }}
                        />
                        <Typography variant="caption" align="center">
                            App version {JSON.stringify(updates.currentlyRunning.updateId)} (
                            {dayjs(updates.currentlyRunning.createdAt).format('DD/MM/YYYY HH:mm')})
                            ({JSON.stringify(updates.currentlyRunning.updateId)})
                        </Typography>
                        <Typography variant="caption" align="center">
                            Init error: {JSON.stringify(updates.initializationError?.message)}
                        </Typography>
                        <Typography variant="caption" align="center">
                            Check error: {JSON.stringify(updates.checkError?.message)}
                        </Typography>
                        <Typography variant="caption" align="center">
                            Download error: {JSON.stringify(updates.downloadError?.message)}
                        </Typography>
                        <Typography variant="caption" align="center">
                            Downloaded update: {JSON.stringify(updates.downloadedUpdate)}
                        </Typography>
                        <Button
                            color="secondary"
                            variant="contained"
                            onPress={checkForUpdates}
                            loading={updates.isChecking || updates.isDownloading}
                        >
                            {updates.isChecking
                                ? 'Checking for updates...'
                                : updates.isDownloading
                                  ? 'Downloading update...'
                                  : 'Check for updates'}
                        </Button>
                        <Button color="error" variant="ghost" onPress={auth.signOut}>
                            Sign out
                        </Button>
                    </Stack>
                </Screen.Content>
            </Screen>
        );
    }
);
