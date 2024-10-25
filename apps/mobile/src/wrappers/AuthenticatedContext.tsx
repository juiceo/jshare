import { createContext, useContext, type PropsWithChildren } from 'react';
import type { AuthState } from '@instantdb/react-native';

import type { Profile } from '@jshare/db';

export type AuthenticatedContextType = {
    user: AuthState['user'];
    profile: Profile;
};

export const AuthenticatedContext = createContext<AuthenticatedContextType | null>(null);

export const AuthenticatedContextProvider = (
    props: PropsWithChildren<AuthenticatedContextType>
) => {
    const { user, profile } = props;
    return (
        <AuthenticatedContext.Provider value={{ user, profile }}>
            {props.children}
        </AuthenticatedContext.Provider>
    );
};

export const useAuthenticatedContext = () => {
    const context = useContext(AuthenticatedContext);

    if (!context) {
        throw new Error(
            'useAuthenticatedContext can only be used within an AuthenticatedContextProvider'
        );
    }

    return context;
};
