import { useState } from 'react';

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
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/profile',
        auth: true,
    },
    ({ auth }) => {
        const [profile] = trpc.profiles.me.useSuspenseQuery();
        const { updateProfile } = useUpdateProfile();

        const [firstName, setFirstName] = useState<string>(profile.firstName);
        const [lastName, setLastName] = useState<string>(profile.lastName);
        const [currency, setCurrency] = useState<DB.CurrencyCode>(profile.currency);

        return (
            <Screen>
                <Screen.Header title="Profile" />
                <Screen.Content scrollable>
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
                    </Stack>
                </Screen.Content>
                <Screen.Footer padding="xl">
                    <Button color="error" variant="ghost" onPress={auth.signOut}>
                        Sign out
                    </Button>
                </Screen.Footer>
            </Screen>
        );
    }
);
