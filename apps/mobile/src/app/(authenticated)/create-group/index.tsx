import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { enums, models } from '@jshare/db/zod';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { ImageUploader } from '~/components/ImageUploader/ImageUploader';
import { Screen } from '~/components/Screen';
import { useCreateGroup } from '~/hooks/useCreateGroup';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    currency: enums.CurrencyCodeSchema,
    coverImage: models.ImageSchema.nullable(),
});
type Schema = z.infer<typeof schema>;

export default screen(
    {
        route: '/(authenticated)/create-group',
    },
    ({ router }) => {
        const { createGroup, isPending } = useCreateGroup();
        const [profile] = trpc.profiles.me.useSuspenseQuery();

        const trpcUtils = trpc.useUtils();

        const form = useForm<Schema>({
            resolver: zodResolver(schema),
            defaultValues: {
                name: '',
                currency: profile.currency,
            },
        });

        const handleSubmit = async (data: Schema) => {
            await createGroup(data);
            trpcUtils.groups.invalidate();
            router.dismiss();
        };

        return (
            <Screen>
                <Screen.Header title="Create group" backButton="down" disableInset />
                <Screen.Content scrollable>
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
                                    options={CURRENCY_OPTIONS}
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={error?.message}
                                    MenuProps={{
                                        title: 'Select group currency',
                                    }}
                                    helperText={
                                        'User balances will be shown in this currency, but you can add expenses in any currency'
                                    }
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
