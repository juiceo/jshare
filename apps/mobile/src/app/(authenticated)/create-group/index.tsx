import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import shortid from 'shortid';
import { z } from 'zod';

import { DB, zDB } from '@jshare/db';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { ImageUploader } from '~/components/ImageUploader/ImageUploader';
import { Screen } from '~/components/Screen';
import { trpc } from '~/lib/trpc';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    currency: zDB.enums.CurrencyCodeSchema,
});
type Schema = z.infer<typeof schema>;

export default screen(
    {
        auth: true,
    },
    ({ router, auth }) => {
        const profile = useSuspenseQuery(
            trpc.z.profile.findUniqueOrThrow.queryOptions({
                where: {
                    id: auth.userId,
                },
            })
        ).data;
        const createGroup = useMutation(trpc.z.group.create.mutationOptions());
        const [image, setImage] = useState<DB.Image | null>(null);

        const form = useForm<Schema>({
            resolver: zodResolver(schema),
            defaultValues: {
                name: '',
                currency: profile.currency,
            },
        });

        const handleSubmit = async (data: Schema) => {
            const group = await createGroup.mutateAsync({
                data: {
                    name: data.name,
                    currency: data.currency,
                    inviteCode: shortid.generate(),
                    coverImage: image?.id
                        ? {
                              connect: {
                                  id: image.id,
                              },
                          }
                        : undefined,
                    participants: {
                        create: {
                            userId: auth.userId,
                            role: DB.Role.Owner,
                        },
                    },
                },
            });
            if (!group) return;
            router.dismiss();
            router.push({
                pathname: '/(authenticated)/group/[groupId]',
                params: { groupId: group.id },
            });
        };

        return (
            <Screen>
                <Screen.Header title="Create group" backButton="down" disableInset />
                <Screen.Content scrollable disableTopInset>
                    <Stack column spacing="md" p="xl">
                        <ImageUploader
                            value={image}
                            onChange={setImage}
                            aspectRatio={[16, 9]}
                            placeholder="Add a cover image"
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
                            loading={createGroup.isPending}
                        >
                            Create group
                        </Button>
                    </Stack>
                </Screen.Footer>
            </Screen>
        );
    }
);
