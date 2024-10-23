import { useState } from 'react';
import { Alert } from 'react-native';
import { id } from '@instantdb/react-native';
import { Redirect, router } from 'expo-router';

import { Button } from '~/components/atoms/Button';
import { Stack } from '~/components/atoms/Stack';
import { TextField } from '~/components/atoms/TextField';
import { Typography } from '~/components/atoms/Typography';
import { Screen } from '~/components/Screen';
import { useIdenticon } from '~/hooks/useIdenticon';
import { db } from '~/services/instantdb';
import { useAuth } from '~/wrappers/AuthContext';

export default function LoginWelcomePage() {
    const auth = useAuth();

    const identicon = useIdenticon(auth.user?.id ?? null);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');

    const handleContinue = async () => {
        const profileId = id();
        const userId = auth.user!.id;

        await db
            .transact([
                db.tx.profiles[profileId]
                    .update({
                        userId,
                        firstName,
                        lastName,
                    })
                    .link({
                        user: userId,
                    }),
            ])
            .catch((err) => {
                Alert.alert(
                    'Something went wrong - please try again',
                    `Error: ${JSON.stringify(err)}`
                );
            });

        router.dismissAll();
        router.replace('/');
    };

    if (!auth.user) {
        return <Redirect href={{ pathname: '/login' }} />;
    }

    return (
        <Screen
            screenOptions={{
                title: 'Complete your profile',
                headerShown: false,
            }}
        >
            <Screen.Content>
                <Stack flex={1} center spacing="md">
                    <Typography variant="h3" color="accent.main" align="center">
                        Let's complete your profile!
                    </Typography>
                    <TextField
                        label={'First name'}
                        value={firstName}
                        onChange={setFirstName}
                        TextInputProps={{
                            placeholder: 'John',
                        }}
                    />
                    <TextField
                        label={'Last name'}
                        value={lastName}
                        onChange={setLastName}
                        TextInputProps={{
                            placeholder: 'Doe',
                        }}
                    />
                </Stack>
            </Screen.Content>
            <Screen.Footer>
                <Button variant={'contained'} color={'primary'} onPress={handleContinue}>
                    Continue
                </Button>
            </Screen.Footer>
        </Screen>
    );
}
