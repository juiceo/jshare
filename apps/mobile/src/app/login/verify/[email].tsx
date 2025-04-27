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
import { Profiles } from '~/lib/collections/profiles.collection';
import { supabase } from '~/lib/supabase';
import { trpcClient } from '~/lib/trpc';
import { setAccessToken } from '~/state/auth';
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
                let authResult;

                if (isDemoUserEmail(email)) {
                    await trpcClient.auth.createDemoUser.mutate({ email });
                    authResult = await supabase.auth.signInWithPassword({
                        email,
                        password: value.join(''),
                    });
                } else {
                    authResult = await supabase.auth.verifyOtp({
                        email,
                        token: value.join(''),
                        type: 'email',
                    });
                }

                if (authResult.error) {
                    Alert.alert(authResult.error.message);
                    return;
                }

                const accessToken = authResult.data.session?.access_token;
                const userId = authResult.data.user?.id;

                if (!accessToken || !userId) {
                    Alert.alert('Invalid code, please try again');
                    return;
                }

                setAccessToken(accessToken);
                const profile = await Profiles.fetchById(userId);

                if (profile) {
                    router.replace('/');
                } else {
                    router.replace('/login/welcome');
                }
            } catch (err) {
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
