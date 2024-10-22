import { Redirect, Slot, usePathname } from 'expo-router';

import { useAuth } from '~/wrappers/AuthContext';

export default function AuthenticatedLayout() {
    const { user } = useAuth();
    const pathname = usePathname();
    const hasProfile = false;

    if (!user) {
        return <Redirect href="/login" />;
    }

    if (!hasProfile && pathname !== '/onboarding') {
        return <Redirect href="/onboarding" />;
    }

    return <Slot />;
}
