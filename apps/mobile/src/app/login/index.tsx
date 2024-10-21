import { useEffect, useRef, useState } from 'react';
import type { TextInput } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { router } from 'expo-router';
import parsePhoneNumber from 'libphonenumber-js';

import { Button } from '../../components/Button';
import { Screen } from '../../components/Screen';
import { Stack } from '../../components/Stack';
import { TextField } from '../../components/TextField';
import { Typography } from '../../components/Typography';
import { useAuth } from '../../wrappers/AuthContext';

export default function Page() {
    const auth = useAuth();
    const inputRef = useRef<TextInput>(null);
    const [phone, setPhone] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const parsed = parsePhoneNumber(phone);
    const isValid = parsed?.isValid ?? false;
    const countryCode = parsed?.country;

    const handleContinue = () => {
        if (!isValid || !parsed) {
            setError(true);
            inputRef.current?.focus();
            return;
        }
        auth.signIn();
        router.push({
            pathname: '/login/verify/[phoneNumber]',
            params: { phoneNumber: parsed.formatInternational() },
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
                        label="Phone number"
                        value={phone}
                        onChange={setPhone}
                        TextInputProps={{
                            placeholder: '+1 123 456 7890',
                            keyboardType: 'phone-pad',
                            autoComplete: 'tel',
                        }}
                        inputRef={inputRef}
                        endAdornment={
                            countryCode ? <CountryFlag isoCode={countryCode} size={16} /> : null
                        }
                        error={
                            error
                                ? 'Please enter a valid phone number, including country code and other details'
                                : null
                        }
                    />
                    <Button variant="contained" color="primary" onPress={handleContinue}>
                        Continue
                    </Button>
                </Stack>
            </Screen.Content>
        </Screen>
    );
}
