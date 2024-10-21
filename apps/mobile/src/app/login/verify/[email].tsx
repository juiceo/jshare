import { useState } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/atoms/Typography';
import { PinCodeInput } from '~/components/PinCodeInput/PinCodeInput';
import { Screen } from '~/components/Screen';
import { useTimer } from '~/hooks/useTimer';
import { db } from '~/services/instantdb';

export default function VerifyLogin() {
    const { email } = useLocalSearchParams<{ email: string }>();
    const [code, setCode] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [lastCodeSent, setLastCodeSent] = useState<number>(Date.now());
    const timer = useTimer({ to: lastCodeSent + 60_000 });

    const handleChange = async (value: number[], done: boolean) => {
        setCode(value);
        if (done) {
            Keyboard.dismiss();
            setLoading(true);
            try {
                await db.auth.signInWithMagicCode({ email, code: value.join('') });
                router.push('/');
            } catch {
                Alert.alert('Invalid code, please try again');
                setCode([]);
            }
            setLoading(false);
        }
    };

    const handleResend = () => {
        setLastCodeSent(Date.now());
        db.auth.sendMagicCode({ email });
    };

    return (
        <Screen name="Verify email" backButtonLabel="Back">
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="body1" align="center">
                        Please enter the 6-digit code sent to
                    </Typography>
                    <Typography variant="body1" color="accent.main" align="center">
                        {email}
                    </Typography>
                    <Stack mt="xl" center spacing="md">
                        <PinCodeInput
                            digits={6}
                            value={code}
                            onChange={handleChange}
                            disabled={loading}
                        />
                        {loading && <ActivityIndicator />}
                    </Stack>
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Stack spacing="md">
                    {timer.isDone ? (
                        <Button variant={'text'} color={'secondary'} onPress={handleResend}>
                            Get new code
                        </Button>
                    ) : (
                        <Typography align="center" variant="caption">
                            You can request a new code in {timer.seconds}s
                        </Typography>
                    )}
                </Stack>
            </Screen.Footer>
        </Screen>
    );
}
