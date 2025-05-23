import { useState } from 'react';
import { Controller, FormProvider, useForm, useWatch } from 'react-hook-form';
import { RectButton } from 'react-native-gesture-handler';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import { z } from 'zod';

import { formatAmount, getCurrencyDetails, getUserShortName } from '@jshare/common';
import { zDB } from '@jshare/db';

import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Avatar } from '~/components/Avatar';
import { Button } from '~/components/Button';
import { CURRENCY_OPTIONS } from '~/components/CurrencyMenu';
import { Icon } from '~/components/Icon';
import { IconButton } from '~/components/IconButton';
import { InfoSheet } from '~/components/InfoSheet';
import { MoneyInput } from '~/components/MoneyInput';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { UserMenu } from '~/components/UserMenu';
import { useCurrencyConversion } from '~/hooks/useExchangeRates';
import { Store } from '~/lib/store/collections';
import { SessionStore } from '~/lib/store/SessionStore';
import { useGroupContext } from '~/wrappers/GroupContext';
import { screen } from '~/wrappers/screen';

const schema = z.object({
    payer: zDB.models.ProfileScalarSchema.passthrough(),
    recipient: zDB.models.ProfileScalarSchema.passthrough().nullable(),
    amount: z.number().min(1, 'Please enter an amount'),
    currency: zDB.enums.CurrencyCodeSchema,
    description: z.string().max(100, 'Description can be at most 100 characters').optional(),
});

type Schema = z.infer<typeof schema>;

const CreatePaymentScreen = screen(
    observer(() => {
        const user = SessionStore.user;
        const router = useRouter();
        const { group, groupId, groupMemberIds } = useGroupContext();
        const [showInfo, setShowInfo] = useState<boolean>(false);

        const profile = Store.profiles.findById(user.id);
        const { convert } = useCurrencyConversion();
        const form = useForm<Schema>({
            defaultValues: {
                payer: profile?.data,
                recipient: null,
                amount: 0,
                currency: group.data.currency,
                description: '',
            },
            resolver: zodResolver(schema.passthrough()),
            mode: 'onSubmit',
        });

        const [menu, setMenu] = useState<'currency' | 'payer' | 'recipient' | null>(null);
        const amount = useWatch({ control: form.control, name: 'amount' });
        const currency = useWatch({ control: form.control, name: 'currency' });

        const handleSubmit = async (data: Schema) => {
            if (!data.recipient) {
                form.setError('recipient', { message: 'Please select a recipient' });
                return;
            }
            if (data.payer.id === data.recipient?.id) {
                form.setError('recipient', {
                    message: 'Payer and recipient cannot be the same person',
                });
                return;
            }

            Store.payments.create({
                groupId,
                payerId: data.payer.id,
                recipientId: data.recipient.id,
                amount: data.amount,
                currency: data.currency,
            });

            router.back();
        };

        return (
            <>
                <FormProvider {...form}>
                    <Screen>
                        <Screen.Header
                            title="New payment"
                            backButton="down"
                            right={
                                <IconButton
                                    icon="CircleHelp"
                                    variant="ghost"
                                    onPress={() => setShowInfo(true)}
                                />
                            }
                        />
                        <Screen.Content scrollable contentStyle={{ paddingBottom: 64 }}>
                            <Stack column px="xl">
                                <Stack center py="3xl">
                                    <Controller
                                        control={form.control}
                                        name="amount"
                                        render={({ field }) => (
                                            <MoneyInput
                                                value={field.value}
                                                onChange={field.onChange}
                                                autoFocus
                                            />
                                        )}
                                    />
                                    <Typography variant="caption">
                                        {getCurrencyDetails(currency).name_plural}
                                    </Typography>
                                    {currency !== group.data.currency && (
                                        <Typography variant="caption" color="tertiary">
                                            {`= ${formatAmount(
                                                convert({
                                                    amount,
                                                    from: currency,
                                                    to: group.data.currency,
                                                }),
                                                group.data.currency
                                            )}`}
                                        </Typography>
                                    )}
                                    <ErrorMessage
                                        errors={form.formState.errors}
                                        name={'amount'}
                                        render={({ message }) => (
                                            <Typography
                                                variant="caption"
                                                color="error.light"
                                                align="center"
                                            >
                                                {message}
                                            </Typography>
                                        )}
                                    />
                                </Stack>
                                <Stack column spacing="md" br="xl">
                                    <Stack column bg="background.secondary" br="xl">
                                        <Stack row p="xl">
                                            <Controller
                                                control={form.control}
                                                name="payer"
                                                render={({ field }) => (
                                                    <>
                                                        <RectButton
                                                            style={{ flex: 1 }}
                                                            onPress={() => setMenu('payer')}
                                                        >
                                                            <Stack
                                                                flex={1}
                                                                center
                                                                spacing="md"
                                                                p="xl"
                                                                br="xl"
                                                            >
                                                                <Typography variant="h6">
                                                                    From
                                                                </Typography>
                                                                <Avatar
                                                                    size="lg"
                                                                    userId={field.value.id}
                                                                />
                                                                <Typography
                                                                    variant="caption"
                                                                    color="tertiary"
                                                                >
                                                                    {getUserShortName(field.value)}
                                                                </Typography>
                                                            </Stack>
                                                        </RectButton>
                                                        <UserMenu
                                                            title="Select payer"
                                                            value={field.value?.id}
                                                            onChange={(userId, profile) => {
                                                                field.onChange(profile);
                                                            }}
                                                            isOpen={menu === 'payer'}
                                                            onClose={() => setMenu(null)}
                                                            userIds={groupMemberIds}
                                                        />
                                                    </>
                                                )}
                                            />
                                            <Stack center p="xl">
                                                <Icon name="ArrowRight" size={32} />
                                            </Stack>
                                            <Controller
                                                control={form.control}
                                                name="recipient"
                                                render={({ field }) => (
                                                    <>
                                                        <RectButton
                                                            style={{ flex: 1 }}
                                                            onPress={() => setMenu('recipient')}
                                                        >
                                                            <Stack
                                                                flex={1}
                                                                center
                                                                spacing="md"
                                                                p="xl"
                                                                br="xl"
                                                            >
                                                                <Typography variant="h6">
                                                                    To
                                                                </Typography>
                                                                <Avatar
                                                                    size="lg"
                                                                    userId={field.value?.id}
                                                                />
                                                                <Typography
                                                                    variant="caption"
                                                                    color="tertiary"
                                                                >
                                                                    {field.value
                                                                        ? getUserShortName(
                                                                              field.value
                                                                          )
                                                                        : 'Select person'}
                                                                </Typography>
                                                            </Stack>
                                                        </RectButton>
                                                        <UserMenu
                                                            title="Select recipient"
                                                            value={field.value?.id}
                                                            onChange={(userId, profile) => {
                                                                field.onChange(profile);
                                                            }}
                                                            isOpen={menu === 'recipient'}
                                                            onClose={() => setMenu(null)}
                                                            userIds={groupMemberIds}
                                                        />
                                                    </>
                                                )}
                                            />
                                        </Stack>
                                        <ErrorMessage
                                            errors={form.formState.errors}
                                            name={'recipient'}
                                            render={({ message }) => (
                                                <Stack center p="xl">
                                                    <Typography
                                                        variant="caption"
                                                        color="error.light"
                                                    >
                                                        {message}
                                                    </Typography>
                                                </Stack>
                                            )}
                                        />
                                    </Stack>

                                    <Controller
                                        control={form.control}
                                        name="description"
                                        render={({ field, fieldState }) => (
                                            <TextField
                                                label="Description"
                                                placeholder="Write a brief description"
                                                value={field.value ?? ''}
                                                onChange={field.onChange}
                                                error={fieldState.error?.message}
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="currency"
                                        control={form.control}
                                        render={({ field, fieldState: { error } }) => {
                                            return (
                                                <Select
                                                    label="Currency"
                                                    placeholder="Select currency"
                                                    options={CURRENCY_OPTIONS}
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    error={error?.message}
                                                    MenuProps={{
                                                        title: 'Select currency',
                                                    }}
                                                />
                                            );
                                        }}
                                    />
                                </Stack>
                            </Stack>
                        </Screen.Content>
                        <Screen.Footer>
                            <Stack column>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onPress={form.handleSubmit(handleSubmit)}
                                    loading={form.formState.isSubmitting}
                                >
                                    Create payment
                                </Button>
                            </Stack>
                        </Screen.Footer>
                    </Screen>
                </FormProvider>
                <InfoSheet
                    isOpen={showInfo}
                    onClose={() => setShowInfo(false)}
                    title="Payments"
                    description="Payments are a way to mark that money has been transferred between two members of the group. This transaction will be taken into account when calculating the balance of each member."
                />
            </>
        );
    })
);

export default CreatePaymentScreen;
