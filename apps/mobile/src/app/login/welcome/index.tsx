import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { zDB, type DB } from '@jshare/db';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { AvatarPicker } from '~/components/AvatarPicker/AvatarPicker';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string(),
    currency: zDB.enums.CurrencyCodeSchema,
});

type Schema = z.infer<typeof schema>;

export default screen(
    {
        route: '/login/welcome',
        auth: true,
    },
    ({ router, auth }) => {
        const form = useForm<Schema>({
            defaultValues: {
                firstName: '',
                lastName: '',
                currency: 'EUR',
            },
            resolver: zodResolver(schema),
        });

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
                currency: 'USD', //TODO: Add input for preferred currency
                email,
            });
            router.dismissAll();
            router.replace('/');
        };

        return (
            <Screen>
                <Screen.Header title="Complete your profile" backButton="back" />
                <Screen.Content scrollable>
                    <Stack p="xl" flex={1} center spacing="md">
                        <Stack py="3xl">
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
