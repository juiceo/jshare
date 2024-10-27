import { createContext, useContext, type PropsWithChildren } from 'react';
import type { Session } from '@supabase/supabase-js';

export type AuthenticatedContextType = {
    session: Session;
};

export const AuthenticatedContext = createContext<AuthenticatedContextType | null>(null);

export const AuthenticatedContextProvider = (
    props: PropsWithChildren<AuthenticatedContextType>
) => {
    const { session } = props;
    return (
        <AuthenticatedContext.Provider value={{ session }}>
            {props.children}
        </AuthenticatedContext.Provider>
    );
};

export const useAuthenticatedSession = () => {
    const context = useContext(AuthenticatedContext);

    if (!context) {
        throw new Error(
            'useAuthenticatedSession can only be used within an AuthenticatedContextProvider'
        );
    }

    return context;
};
