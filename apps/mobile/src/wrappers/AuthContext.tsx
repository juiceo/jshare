import { createContext, useCallback, useContext, type PropsWithChildren } from 'react';
import type { AuthState } from '@instantdb/react-native';
import { useRouter } from 'expo-router';

import { db } from '~/services/instantdb';

const AuthContext = createContext<{
    signOut: () => void;
    error: AuthState['error'];
    isLoading: AuthState['isLoading'];
    user: AuthState['user'];
} | null>(null);

export const AuthProvider = (props: PropsWithChildren) => {
    const authState = db.useAuth();
    const router = useRouter();

    const signOut = useCallback(() => {
        db.auth.signOut();
        router.replace('/login');
    }, [router]);

    return (
        <AuthContext.Provider
            value={{
                signOut,
                ...authState,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

// This hook can be used to access the user info.
export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be wrapped in a <AuthProvider />');
    }

    return context;
}
