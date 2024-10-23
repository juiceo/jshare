import React from 'react';
import { Redirect, Stack } from 'expo-router';

import { useAuth } from '~/wrappers/AuthContext';

export default function AuthenticatedLayout() {
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/login" />;
    }

    return <Stack />;
}
