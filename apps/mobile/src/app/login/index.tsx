import { useEffect, useRef, useState } from 'react';
import { Dimensions, type TextInput } from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import { router } from 'expo-router';
import isEmail from 'validator/es/lib/isEmail';

import { isDemoUserEmail } from '@jshare/common';

import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Button } from '~/components/Button';
import { Screen } from '~/components/Screen';
import { supabase } from '~/services/supabase';
import { screen } from '~/wrappers/screen';

const screenW = Dimensions.get('screen').width;

export default screen({}, () => {
    const inputRef = useRef<TextInput>(null);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const isValid = isEmail(email);

    const handleContinue = async () => {
        if (!isValid || !email) {
            setError(true);
            inputRef.current?.focus();
            return;
        }
        if (!isDemoUserEmail(email)) {
            supabase.auth.signInWithOtp({
                email,
            });
        }
        router.push({
            pathname: '/login/verify/[email]',
            params: { email },
        });
    };

    useEffect(() => {
        if (error && isValid) {
            setError(false);
        }
    }, [error, isValid]);

    return (
        <Screen avoidKeyboard>
            <Screen.Content>
                <Stack flex={1} center p="xl">
                    <ExpoImage
                        source={require('../../../assets/logomark_accent.png')}
                        style={{
                            width: screenW * 0.5,
                            aspectRatio: '16/9',
                        }}
                        contentFit="contain"
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer padding="xl">
                <Stack spacing="md">
                    <TextField
                        label="Email address"
                        value={email}
                        onChange={setEmail}
                        TextInputProps={{
                            placeholder: 'me@example.com',
                            keyboardType: 'email-address',
                            autoComplete: 'email',
                            autoCapitalize: 'none',
                            autoCorrect: false,
                        }}
                        inputRef={inputRef}
                        error={error ? 'Please enter a valid email address' : null}
                    />
                    <Button variant="contained" color="primary" onPress={handleContinue}>
                        Continue
                    </Button>
                </Stack>
            </Screen.Footer>
        </Screen>
    );
});
