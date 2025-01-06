import { useState } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';
import { router } from 'expo-router';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { Header } from '~/components/Header/Header';
import { PinCodeInput } from '~/components/PinCodeInput/PinCodeInput';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useTimer } from '~/hooks/useTimer';
import { supabase } from '~/services/supabase';
import { trpcUniversal } from '~/services/trpc';
import { setAccessToken } from '~/state/auth';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/login/verify/[email]',
    },
    ({ params }) => {
        const { email } = params;
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
                    const authResult = await supabase.auth.verifyOtp({
                        email,
                        token: value.join(''),
                        type: 'email',
                    });
                    const accessToken = authResult.data.session?.access_token;

                    if (!accessToken) {
                        Alert.alert('Invalid code, please try again');
                    } else {
                        setAccessToken(accessToken);
                        const profile = await trpcUniversal.profiles.get.query().catch(() => null);

                        if (profile) {
                            router.replace('/');
                        } else {
                            router.replace('/login/welcome');
                        }
                    }
                } catch {
                    Alert.alert('Invalid code, please try again');
                    setCode([]);
                }
                setLoading(false);
            }
        };

        const handleResend = () => {
            setLastCodeSent(Date.now());
            supabase.auth.signInWithOtp({
                email,
            });
        };

        return (
            <Screen>
                <Screen.Header title="Verify email" />
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
                <Screen.Footer sticky>
                    <Stack spacing="md">
                        {timer.isDone ? (
                            <Button variant="ghost" color={'secondary'} onPress={handleResend}>
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
);
