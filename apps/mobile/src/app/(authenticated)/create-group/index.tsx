import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { z } from 'zod';

import { Button } from '~/components/atoms/Button';
import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Header } from '~/components/Header/Header';
import { ImageUploader } from '~/components/ImageUploader/ImageUploader';
import { ModalHeader } from '~/components/ModalHeader/ModalHeader';
import { Screen } from '~/components/Screen';
import { trpc } from '~/services/trpc';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    currency: z.enum(['USD', 'EUR']),
    image: z.string().optional(),
});
type Schema = z.infer<typeof schema>;

export default function CreateGroupPage() {
    const router = useRouter();

    const trpcUtils = trpc.useUtils();
    const createGroupMutation = trpc.groups.create.useMutation();

    const form = useForm<Schema>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            currency: 'USD',
        },
    });

    const handleSubmit = async (data: Schema) => {
        await createGroupMutation.mutateAsync(data);
        trpcUtils.groups.invalidate();
        router.dismiss();
    };

    return (
        <Screen disableTopInset>
            <Screen.Content scrollable>
                <Header title="Create group" backButtonStyle="close" />
                <Stack column spacing="md" p="xl">
                    <Controller
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <ImageUploader
                                value={field.value}
                                onChange={field.onChange}
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
                    >
                        Create group
                    </Button>
                </Stack>
            </Screen.Footer>
        </Screen>
    );
}
