import { Redirect, Stack } from 'expo-router';

import { useAuth } from '../../wrappers/AuthContext';

export default function AuthenticatedLayout() {
    const { userId } = useAuth();

    if (!userId) {
        /**
         * TODO: Make sure we have strict typing for routes
         */
        return <Redirect href="/login" />;
    }

    return <Stack />;
}
