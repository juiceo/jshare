import { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { zDB } from '@jshare/db';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    currency: zDB.enums.CurrencyCodeSchema,
});

type Schema = z.infer<typeof schema>;

export default screen({}, ({ router }) => {
    const trpcUtils = trpc.useUtils();
    const [profile] = trpc.profiles.me.useSuspenseQuery();
    const updateProfile = trpc.profiles.update.useMutation();
    const form = useForm<Schema>({
        defaultValues: {
            firstName: profile.firstName,
            lastName: profile.lastName,
            currency: profile.currency,
        },
    });

    const handleSubmit = useCallback(
        async (data: Schema) => {
            trpcUtils.profiles.me.setQueriesData(undefined, {}, (prev) => {
                if (!prev) return prev;
                return {
                    ...prev,
                    ...data,
                };
            });
            await updateProfile.mutateAsync(data);
            trpcUtils.profiles.me.invalidate();
        },
        [trpcUtils.profiles.me, updateProfile]
    );

    return (
        <Screen onBlur={form.handleSubmit(handleSubmit)}>
            <Screen.Header title="Profile" />
            <Screen.Content scrollable disableTopInset>
                <Stack p="xl" spacing="md">
                    <Controller
                        name="firstName"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <TextField
                                label={'First name'}
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                                TextInputProps={{
                                    placeholder: 'John',
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="lastName"
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <TextField
                                label={'Last name'}
                                value={field.value}
                                onChange={field.onChange}
                                error={fieldState.error?.message}
                                TextInputProps={{
                                    placeholder: 'Doe',
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="currency"
                        control={form.control}
                        render={({ field }) => (
                            <Select
                                label="Preferred currency"
                                placeholder="Select currency"
                                options={CURRENCY_OPTIONS}
                                value={field.value}
                                onChange={field.onChange}
                                MenuProps={{
                                    title: 'Select currency',
                                }}
                            />
                        )}
                    />
                </Stack>
            </Screen.Content>
        </Screen>
    );
});
