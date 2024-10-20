import { createContext, useCallback, useContext, useState, type PropsWithChildren } from 'react';

const AuthContext = createContext<{
    signIn: () => void;
    signOut: () => void;
    userId: string | null;
} | null>(null);

export const AuthProvider = (props: PropsWithChildren) => {
    const [userId, setUserId] = useState<string | null>(null);

    const signIn = useCallback(() => {
        setUserId('abc_123');
    }, []);

    const signOut = useCallback(() => {
        setUserId(null);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                userId,
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

    if (!auth.userId) {
        throw new Error('useSession can only be used within authenticated routes');
    }

    return {
        ...auth,
        userId: auth.userId,
    };
}
