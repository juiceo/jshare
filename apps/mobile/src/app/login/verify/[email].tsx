import { useState } from 'react';
import { Keyboard } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { PinCodeInput } from '~/components/PinCodeInput/PinCodeInput';
import { Screen } from '~/components/Screen';

export default function VerifyLogin() {
    const { email } = useLocalSearchParams<{ email: string }>();
    const [code, setCode] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const handleChange = (value: number[], done: boolean) => {
        setCode(value);
        if (done) {
            Keyboard.dismiss();
            setLoading(true);
        }
    };
    return (
        <Screen name="Verify" backButtonLabel="Back">
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="body1" align="center">
                        Please enter the 6-digit code sent to
                    </Typography>
                    <Typography variant="body1" color="accent.main" align="center">
                        {email}
                    </Typography>
                    <Stack mt="xl">
                        <PinCodeInput digits={6} value={code} onChange={handleChange} />
                    </Stack>
                </Stack>
                <Button
                    color="primary"
                    variant="contained"
                    disabled={code.length !== 6}
                    loading={loading}
                >
                    Continue
                </Button>
            </Screen.Content>
        </Screen>
    );
}
