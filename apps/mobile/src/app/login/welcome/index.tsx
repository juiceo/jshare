import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Linking, Text } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { PRIVACY_POLICY_URL } from '@jshare/common';
import { zDB, type DB } from '@jshare/db';
import { useTheme } from '@jshare/theme';

import { Checkbox } from '~/components/atoms/Checkbox';
import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string(),
    currency: zDB.enums.CurrencyCodeSchema,
    privacyPolicyAccepted: z.boolean(),
});

type Schema = z.infer<typeof schema>;

export default screen(
    {
        route: '/login/welcome',
        auth: true,
    },
    ({ router, auth }) => {
        const { theme } = useTheme();
        const form = useForm<Schema>({
            defaultValues: {
                firstName: '',
                lastName: '',
                currency: 'EUR',
                privacyPolicyAccepted: false,
            },
            resolver: zodResolver(schema),
        });

        const trpcUtils = trpc.useUtils();
        const createProfile = trpc.profiles.create.useMutation();
        const [image, setImage] = useState<DB.Image | null>(null);

        const handleSubmit = async (data: Schema) => {
            const email = auth.session.user.email;
            if (!email) {
                Alert.alert('Missing email!');
                return;
            }
            await createProfile.mutateAsync({
                firstName: data.firstName,
                lastName: data.lastName,
                avatarId: image?.id,
                currency: data.currency,
                email,
            });
            trpcUtils.profiles.invalidate();
            router.dismissAll();
            router.replace('/(authenticated)/(tabs)/groups');
        };

        const openPrivacyPolicy = () => {
            Linking.openURL(PRIVACY_POLICY_URL);
        };

        const openTermsOfService = () => {};

        return (
            <Screen>
                <Screen.Header title="Complete your profile" backButton="back" />
                <Screen.Content scrollable>
                    <Stack p="xl" flex={1} spacing="md">
                        <Stack py="3xl" center>
                            <AvatarPicker value={image} onChange={setImage} />
                        </Stack>
                        <Controller
                            control={form.control}
                            name="firstName"
                            render={({ field, fieldState }) => (
                                <TextField
                                    label={'First name'}
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={fieldState.error?.message}
                                    placeholder="John"
                                />
                            )}
                        />
                        <Controller
                            control={form.control}
                            name="lastName"
                            render={({ field, fieldState }) => (
                                <TextField
                                    label={'Last name'}
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={fieldState.error?.message}
                                    placeholder="Doe"
                                />
                            )}
                        />
                        <Controller
                            control={form.control}
                            name="currency"
                            render={({ field, fieldState: { error } }) => (
                                <Select
                                    label="Default currency"
                                    placeholder="Select currency"
                                    options={CURRENCY_OPTIONS}
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={error?.message}
                                    MenuProps={{
                                        title: 'Select default currency',
                                    }}
                                />
                            )}
                        />
                        <Controller
                            control={form.control}
                            name="privacyPolicyAccepted"
                            render={({ field }) => (
                                <Stack row justifyStart spacing="xl" alignCenter mt="xl">
                                    <Checkbox
                                        variant="square"
                                        checked={field.value}
                                        onChange={field.onChange}
                                    />
                                    <Typography variant="caption" flex={1}>
                                        I have read and agree to the JShare{' '}
                                        <Text
                                            style={{
                                                textDecorationLine: 'underline',
                                                color: theme.palette.accent.light,
                                            }}
                                            onPress={openPrivacyPolicy}
                                        >
                                            Privacy Policy
                                        </Text>{' '}
                                        and{' '}
                                        <Text
                                            style={{
                                                textDecorationLine: 'underline',
                                                color: theme.palette.accent.light,
                                            }}
                                            onPress={openTermsOfService}
                                        >
                                            Terms of Service
                                        </Text>
                                    </Typography>
                                </Stack>
                            )}
                        />
                    </Stack>
                </Screen.Content>
                <Screen.Footer padding="xl">
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        onPress={form.handleSubmit(handleSubmit)}
                        loading={createProfile.isPending}
                    >
                        Continue
                    </Button>
                </Screen.Footer>
            </Screen>
        );
    }
);
