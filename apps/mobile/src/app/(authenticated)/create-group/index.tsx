import { useState } from 'react';
import { useRouter } from 'expo-router';

import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { ModalHeader } from '~/components/ModalHeader/ModalHeader';
import { Screen } from '~/components/Screen';

export default function CreateGroupPage() {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [currency, setCurrency] = useState<string>('');

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
                        TextInputProps={{
                            placeholder: "Boys' trip to Berlin",
                        }}
                        value={name}
                        onChange={setName}
                    />
                    <TextField
                        label="Currency"
                        TextInputProps={{
                            placeholder: 'USD',
                        }}
                        value={currency}
                        onChange={setCurrency}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Stack column spacing="md">
                    <Button color="secondary" variant="text">
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onPress={() => {
                            router.replace('/profile');
                        }}
                    >
                        Create group
                    </Button>
                </Stack>
            </Screen.Footer>
        </Screen>
    );
}
