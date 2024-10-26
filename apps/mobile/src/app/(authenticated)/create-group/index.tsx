import { Alert } from 'react-native';
import { useRouter } from 'expo-router';

import { Button } from '~/components/atoms/Button';
import { Select } from '~/components/atoms/Select';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { ModalHeader } from '~/components/ModalHeader/ModalHeader';
import { Screen } from '~/components/Screen';
import { useFormField, validateAll } from '~/hooks/useFormField';

export default function CreateGroupPage() {
    const router = useRouter();
    const name = useFormField<string>('', (value) => {
        if (!value) return 'Name is required';
    });
    const currency = useFormField<'EUR' | 'USD' | undefined>(undefined, (value) => {
        if (!value) return 'Currency is required';
    });

    const handleCreate = () => {
        const validation = validateAll([name, currency]);

        if (!validation.ok) {
            return;
        }

        Alert.alert('All good! Creating group.');
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
