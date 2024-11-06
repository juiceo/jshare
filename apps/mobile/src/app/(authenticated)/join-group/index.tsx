import { useRouter } from 'expo-router';

import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { ModalHeader } from '~/components/ModalHeader/ModalHeader';
import { Screen } from '~/components/Screen';

export default function JoinGroupPage() {
    const router = useRouter();

    return (
        <Screen disableTopInset>
            <Screen.Content>
                <ModalHeader title="Join group" />
                <Stack column spacing="md" justifyEnd flex={1}>
                    <TextField
                        label="Invite code"
                        TextInputProps={{
                            placeholder: 'Enter your invite code',
                        }}
                        value={''}
                        onChange={function (value: string): void {
                            throw new Error('Function not implemented.');
                        }}
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        onPress={() => {
                            router.replace('/profile');
                        }}
                    >
                        Join group
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
