import { createContext, useCallback, useContext, type PropsWithChildren } from 'react';
import type { AuthState } from '@instantdb/react-native';

import { db } from '~/services/instantdb';

const AuthContext = createContext<{
    signOut: () => void;
    error: AuthState['error'];
    isLoading: AuthState['isLoading'];
    user: AuthState['user'];
} | null>(null);

export const AuthProvider = (props: PropsWithChildren) => {
    const authState = db.useAuth();

    const signOut = useCallback(() => {
        db.auth.signOut();
    }, []);

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

export function useSession() {
    const auth = useAuth();

    if (!auth.user) {
        throw new Error('useSession can only be used within authenticated routes');
    }

    return {
        ...auth,
        user: auth.user,
    };
}
