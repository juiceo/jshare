import { Controller, useForm } from 'react-hook-form';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import type { DB } from '@jshare/db';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Screen } from '~/components/Screen';
import { useTRPC } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';

export default screen({ auth: true }, ({ auth }) => {
    const trpc = useTRPC();
    const profile = useSuspenseQuery(
        trpc.z.profile.findUniqueOrThrow.queryOptions({
            where: { id: auth.userId },
        })
    ).data;
    const updateProfile = useMutation(trpc.z.profile.update.mutationOptions());

    const form = useForm<{ firstName: string; lastName: string; currency: DB.CurrencyCode }>({
        defaultValues: {
            firstName: profile.firstName ?? '',
            lastName: profile.lastName ?? '',
            currency: profile.currency ?? 'USD',
        },
    });
    const handleSubmit = (data: any) => {
        console.log('SUBMIT', data);
        updateProfile
            .mutateAsync({
                where: { id: auth.userId },
                data: {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    currency: data.currency,
                },
            })
            .then((res) => {
                console.log('MUTATION RESPONSE', res);
            })
            .catch((err) => {
                console.log('MUTATION ERR', err);
            });
    };

    return (
        <Screen onBlur={form.handleSubmit(handleSubmit)}>
            <Screen.Header title="Profile" />
            <Screen.Content scrollable disableTopInset>
                <Stack p="xl" spacing="md">
                    <Controller
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <TextField
                                label={'First name'}
                                value={field.value}
                                onChange={field.onChange}
                                TextInputProps={{
                                    placeholder: 'John',
                                }}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <TextField
                                label={'Last name'}
                                value={field.value}
                                onChange={field.onChange}
                                TextInputProps={{
                                    placeholder: 'Doe',
                                }}
                            />
                        )}
                    />
                    <Controller
                        control={form.control}
                        name="currency"
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
