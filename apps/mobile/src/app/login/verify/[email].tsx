import { useState } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { isDemoUserEmail } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { PinCodeInput } from '~/components/PinCodeInput/PinCodeInput';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useTimer } from '~/hooks/useTimer';
import { SessionStore } from '~/lib/store/SessionStore';
import { supabase } from '~/lib/supabase';
import { trpcClient } from '~/lib/trpc';
import { toast } from '~/state/toast';
import { screen } from '~/wrappers/screen';

export default screen(() => {
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
                const authResult = await SessionStore.signIn(email, value.join(''));

                if (authResult.error) {
                    toast.error(authResult.error.message);
                    return;
                }

                if (!authResult.data.user) {
                    toast.error('Login failed, please try again');
                    return;
                }

                const [profile] = await trpcClient.models.profiles.findById.query({
                    ids: [authResult.data.user.id],
                });

                if (profile) {
                    router.replace('/');
                } else {
                    router.replace('/login/welcome');
                }
            } catch (err) {
                console.log('AUTH ERROR', (err as any).message);
                console.error('AUTH ERROR', err);
                Alert.alert('Something went wrong, please try again');
                setCode([]);
            }
            setLoading(false);
        }
    };

    const handleResend = () => {
        setLastCodeSent(Date.now());
        if (isDemoUserEmail(email)) return;
        supabase.auth.signInWithOtp({
            email,
        });
    };

    return (
        <Screen avoidKeyboard>
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
            <Screen.Footer>
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
});
