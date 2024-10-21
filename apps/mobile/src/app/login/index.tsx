import { useEffect, useRef, useState } from 'react';
import type { TextInput } from 'react-native';
import { router } from 'expo-router';
import isEmail from 'validator/es/lib/isEmail';

import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { db } from '~/services/instantdb';
import { useAuth } from '~/wrappers/AuthContext';

export default function LoginScreen() {
    const auth = useAuth();
    const inputRef = useRef<TextInput>(null);
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const isValid = isEmail(email);

    const handleContinue = () => {
        if (!isValid || !email) {
            setError(true);
            inputRef.current?.focus();
            return;
        }
        db.auth.sendMagicCode({ email });
        auth.signIn();
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
        <Screen name="Sign in" disableHeader>
            <Screen.Content>
                <Stack flex={1} center>
                    <Typography variant="h1" color="accent.main">
                        Welcome to JShare
                    </Typography>
                </Stack>
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
                        }}
                        inputRef={inputRef}
                        error={error ? 'Please enter a valid email address' : null}
                    />
                    <Button variant="contained" color="primary" onPress={handleContinue}>
                        Continue
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
