import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import shortid from 'shortid';
import { z } from 'zod';

import { zDB, type DB } from '@jshare/db';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { ImageUploader } from '~/components/ImageUploader/ImageUploader';
import { Screen } from '~/components/Screen';
import { Store } from '~/lib/store/collections';
import { screen } from '~/wrappers/screen';
import { useCurrentUser } from '~/wrappers/SessionProvider';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    currency: zDB.enums.CurrencyCodeSchema,
    coverImage: z
        .object({ id: z.string() })
        .passthrough()
        .transform((d) => d as DB.Image)
        .nullable(),
});
type Schema = z.infer<typeof schema>;

export default screen(
    observer(() => {
        const user = useCurrentUser();
        const router = useRouter();
        const profile = Store.profiles.findById(user.id);

        const form = useForm<Schema>({
            resolver: zodResolver(schema),
            defaultValues: {
                name: '',
                currency: profile?.data?.currency ?? 'USD',
            },
        });

        const handleSubmit = async (data: Schema) => {
            console.log('SUBMITTING', data);
            const group = await Store.groups.create({
                name: data.name,
                currency: data.currency,
                coverImageId: data.coverImage?.id ?? null,
                inviteCode: shortid.generate(),
                lastActivity: new Date(),
            });
            if (group && data.coverImage) {
                group.set({ coverImage: data.coverImage });
            }
            router.dismiss();
        };

        return (
            <Screen>
                <Screen.Header title="Create group" backButton="down" disableInset />
                <Screen.Content scrollable disableTopInset>
                    <Stack column spacing="md" p="xl">
                        <Controller
                            control={form.control}
                            name="coverImage"
                            render={({ field }) => (
                                <ImageUploader
                                    value={field.value as DB.Image | null}
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
                <Screen.Footer>
                    <Stack column spacing="md">
                        <Button
                            color="primary"
                            variant="contained"
                            onPress={form.handleSubmit(handleSubmit)}
                            loading={false}
                        >
                            Create group
                        </Button>
                    </Stack>
                </Screen.Footer>
            </Screen>
        );
    })
);
