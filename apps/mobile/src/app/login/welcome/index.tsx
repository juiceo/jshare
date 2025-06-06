import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Linking, Text } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import { z } from 'zod';

import { PRIVACY_POLICY_URL, TERMS_OF_SERVICE_URL } from '@jshare/common';
import { zDB, type DB } from '@jshare/db';
import { useTheme } from '@jshare/theme';

import { Checkbox } from '~/components/atoms/Checkbox';
import { FormControl } from '~/components/atoms/FormControl';
import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { toast } from '~/state/toast';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string(),
    currency: zDB.enums.CurrencyCodeSchema,
    avatar: zDB.models.ImageSchema.nullable(),
    termsAccepted: z
        .boolean()
        .refine((value) => value === true, 'Please accept the Privacy Policy and Terms of Service'),
});

type Schema = z.infer<typeof schema>;

const WelcomeScreen = screen(
    observer(() => {
        const router = useRouter();
        const { theme } = useTheme();
        const form = useForm<Schema>({
            defaultValues: {
                firstName: '',
                lastName: '',
                currency: 'EUR',
                termsAccepted: false,
                avatar: null,
            },
            resolver: zodResolver(schema),
        });
        const [isLoading, setLoading] = useState<boolean>(false);
        const session = SessionStore.sessionMaybe;

        useEffect(() => {
            if (!session) {
                router.replace('/login');
            }
        }, [session, router]);

        const handleSubmit = async (data: Schema) => {
            const email = session?.user.email;
            if (!email) {
                Alert.alert('Missing email!');
                return;
            }
            setLoading(true);
            try {
                await Store.profiles.create({
                    id: session.user.id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    currency: data.currency,
                    avatarId: data.avatar?.id ?? null,
                    email,
                    showInSearch: true,
                });
                router.dismissAll();
                router.replace('/(authenticated)/(tabs)/groups');
            } catch {
                toast.error('Something went wrong, please try again');
            }
            setLoading(false);
        };

        const openPrivacyPolicy = () => {
            Linking.openURL(PRIVACY_POLICY_URL);
        };

        const openTermsOfService = () => {
            Linking.openURL(TERMS_OF_SERVICE_URL);
        };

        return (
            <Screen>
                <Screen.Header title="Complete your profile" backButton="back" />
                <Screen.Content scrollable>
                    <Stack p="xl" flex={1} spacing="md">
                        <Stack py="3xl" center>
                            <Controller
                                control={form.control}
                                name="avatar"
                                render={({ field }) => (
                                    <AvatarPicker
                                        value={field.value as DB.Image | null}
                                        onChange={field.onChange}
                                    />
                                )}
                            />
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
                            name="termsAccepted"
                            render={({ field, fieldState }) => (
                                <FormControl
                                    focused={false}
                                    error={fieldState.error?.message}
                                    backgroundColor="transparent"
                                >
                                    <Stack row justifyStart spacing="xl" alignCenter>
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
                                                    color: theme.palette.accent.primary,
                                                }}
                                                onPress={openPrivacyPolicy}
                                            >
                                                Privacy Policy
                                            </Text>{' '}
                                            and{' '}
                                            <Text
                                                style={{
                                                    textDecorationLine: 'underline',
                                                    color: theme.palette.accent.primary,
                                                }}
                                                onPress={openTermsOfService}
                                            >
                                                Terms of Service
                                            </Text>
                                        </Typography>
                                    </Stack>
                                </FormControl>
                            )}
                        />
                    </Stack>
                </Screen.Content>
                <Screen.Footer>
                    <Button
                        variant={'contained'}
                        color={'primary'}
                        onPress={form.handleSubmit(handleSubmit)}
                        loading={isLoading}
                    >
                        Continue
                    </Button>
                </Screen.Footer>
            </Screen>
        );
    })
);

export default WelcomeScreen;
