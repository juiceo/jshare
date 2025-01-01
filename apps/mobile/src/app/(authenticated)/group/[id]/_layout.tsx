import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { Stack as StackView } from '~/components/atoms/Stack';
import { useGroup } from '~/hooks/useGroup';
import { GroupProvider } from '~/wrappers/GroupProvider';

export default function GroupLayout() {
    const { theme } = useTheme();
    const { id } = useLocalSearchParams<{ id: string }>();
    const groupQuery = useGroup(id);

    if (groupQuery.isLoading) {
        return (
            <StackView center absoluteFill>
                <ActivityIndicator />
            </StackView>
        );
    }
    if (!groupQuery.isSuccess) {
        return <Redirect href="/" />;
    }

    return (
        <GroupProvider group={groupQuery.data}>
            <Stack
                screenOptions={{
                    contentStyle: {
                        backgroundColor: theme.palette.background.main,
                    },
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="create-expense"
                    options={{ presentation: 'modal', headerShown: false }}
                />
                <Stack.Screen
                    name="create-payment"
                    options={{ presentation: 'modal', headerShown: false }}
                />
            </Stack>
        </GroupProvider>
    );
}
