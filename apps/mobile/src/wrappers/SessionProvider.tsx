import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    type PropsWithChildren,
} from 'react';
import type { AuthError, Session } from '@supabase/supabase-js';
import { useRouter } from 'expo-router';

import { supabase } from '~/lib/supabase';
import { setAccessToken, setUserId } from '~/state/auth';

const SessionContext = createContext<{
    session: Session | null;
    isLoading: boolean;
    error: AuthError | null;
    signOut: () => void;
} | null>(null);

export const SessionProvider = (props: PropsWithChildren) => {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<AuthError | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const { dismissAll, replace } = useRouter();

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session }, error }) => {
            setSession(session);
            setError(error);
            setLoading(false);
            setAccessToken(session?.access_token ?? null);
            setUserId(session?.user.id ?? null);
        });

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setLoading(false);
            setAccessToken(session?.access_token ?? null);
            setUserId(session?.user.id ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signOut = useCallback(() => {
        supabase.auth.signOut();
        dismissAll();
        replace('/login');
    }, [dismissAll, replace]);

    return (
        <SessionContext.Provider
            value={{
                signOut,
                session,
                error,
                isLoading,
            }}
        >
            {props.children}
        </SessionContext.Provider>
    );
};

// This hook can be used to access the user info.
export function useSession() {
    const context = useContext(SessionContext);

    if (!context) {
        throw new Error('useSession must be wrapped in a <SessionProvider />');
    }

    return context;
}

export function useCurrentUser() {
    const { session } = useSession();

    if (!session) {
        throw new Error('useCurrentUser can only be used inside an authenticated route');
    }

    return session.user;
}
