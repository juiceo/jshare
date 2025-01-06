import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { z } from 'zod';

import { Currency, zCurrency, zDbImage } from '@jshare/types';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { Header } from '~/components/Header/Header';
import { ImageUploader } from '~/components/ImageUploader/ImageUploader';
import { Screen } from '~/components/Screen';
import { useCreateGroup } from '~/hooks/useCreateGroup';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    currency: zCurrency,
    coverImage: zDbImage.optional(),
});
type Schema = z.infer<typeof schema>;

export default screen(
    {
        route: '/(authenticated)/create-group',
    },
    () => {
        const router = useRouter();
        const { createGroup, isPending } = useCreateGroup();

        const trpcUtils = trpc.useUtils();

        const form = useForm<Schema>({
            resolver: zodResolver(schema),
            defaultValues: {
                name: '',
                currency: Currency.USD,
            },
        });

        const handleSubmit = async (data: Schema) => {
            await createGroup(data);
            trpcUtils.groups.invalidate();
            router.dismiss();
        };

        return (
            <Screen disableTopInset>
                <Screen.Content scrollable>
                    <Header title="Create group" backButtonStyle="down" />
                    <Stack column spacing="md" p="xl">
                        <Controller
                            control={form.control}
                            name="coverImage"
                            render={({ field }) => (
                                <ImageUploader
                                    value={field.value}
                                    onChange={field.onChange}
                                    aspectRatio={[16, 9]}
                                    placeholder="Add a cover image"
                                />
                            )}
                        />
                        <Controller
                            control={form.control}
                            name="name"
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    label="Group name"
                                    placeholder="Boys' trip to Berlin"
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={error?.message}
                                />
                            )}
                        />
                        <Controller
                            control={form.control}
                            name="currency"
                            render={({ field, fieldState: { error } }) => (
                                <Select
                                    label="Currency"
                                    placeholder="Select currency"
                                    options={[
                                        {
                                            id: 'USD',
                                            label: 'United States Dollar',
                                        },
                                        {
                                            id: 'EUR',
                                            label: 'Euro',
                                        },
                                    ]}
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={error?.message}
                                />
                            )}
                        />
                    </Stack>
                </Screen.Content>
                <Screen.Footer padding="xl">
                    <Stack column spacing="md">
                        <Button
                            color="primary"
                            variant="contained"
                            onPress={form.handleSubmit(handleSubmit)}
                            loading={isPending}
                        >
                            Create group
                        </Button>
                    </Stack>
                </Screen.Footer>
            </Screen>
        );
    }
);
