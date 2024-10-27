import { useRouter } from 'expo-router';

import { CurrencyCode } from '@jshare/common';

import { Button } from '~/components/atoms/Button';
import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { ModalHeader } from '~/components/ModalHeader/ModalHeader';
import { Screen } from '~/components/Screen';
import { useFormField } from '~/hooks/useFormField';

export default function CreateGroupPage() {
    const router = useRouter();
    const name = useFormField<string>('', (value) => {
        if (!value) return 'Please enter a name';
        return { value };
    });
    const currency = useFormField<CurrencyCode | undefined, CurrencyCode>('USD', (value) => {
        if (!value) return 'Please enter a currency';
        return { value };
    });

    const handleCreate = async () => {
        const validatedName = name.validate();
        const validatedCurrency = currency.validate();

        if (!validatedName.ok) return;
        if (!validatedCurrency.ok) return;

        /**
         * TODO: Create group here
         */

        router.dismiss();
    };

    return (
        <Screen screenOptions={{ title: 'Create group' }}>
            <Screen.Content scrollable>
                <Stack column spacing="md">
                    <ModalHeader title="New group" />
                    <Stack height={200} bg="background.elevation1" center br="md">
                        <Typography variant="body2">Add image</Typography>
                    </Stack>
                    <TextField
                        label="Group name"
                        placeholder="Boys' trip to Berlin"
                        value={name.value}
                        onChange={name.setValue}
                        error={name.error}
                    />
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
                        value={currency.value}
                        onChange={currency.setValue}
                        error={currency.error}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Stack column spacing="md">
                    <Button
                        color="primary"
                        variant="contained"
                        onPress={() => {
                            handleCreate();
                        }}
                    >
                        Create group
                    </Button>
                </Stack>
            </Screen.Footer>
        </Screen>
    );
}
