import { useState } from 'react';
import { router } from 'expo-router';

import { Button } from '../../components/Button';
import { Screen } from '../../components/Screen';
import { Stack } from '../../components/Stack';
import { TextField } from '../../components/TextField';
import { Typography } from '../../components/Typography';
import { useAuth } from '../../wrappers/AuthContext';

export default function Page() {
    const auth = useAuth();
    const [phone, setPhone] = useState<string>('');

    const handleContinue = () => {
        auth.signIn();
        router.push({
            pathname: '/login/verify/[phoneNumber]',
            params: { phoneNumber: phone },
        });
    };
    return (
        <Screen name="Sign in" disableHeader>
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Welcome to JShare
                    </Typography>
                </Stack>
                <Stack spacing="md">
                    <TextField
                        label="Phone number"
                        value={phone}
                        onChange={setPhone}
                        TextInputProps={{
                            placeholder: '+1 123 456 7890',
                            keyboardType: 'phone-pad',
                            autoComplete: 'tel',
                        }}
                    />
                    <Button variant="contained" color="primary" onPress={handleContinue}>
                        Continue
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
