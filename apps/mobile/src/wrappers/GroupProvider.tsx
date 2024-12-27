import { createContext, useContext, type PropsWithChildren } from 'react';

import type { DB } from '@jshare/types';

export type GroupContextType = {
    group: DB.Group;
};

export const GroupContext = createContext<GroupContextType | null>(null);

export const GroupProvider = (props: PropsWithChildren<{ group: DB.Group }>) => {
    return (
        <GroupContext.Provider value={{ group: props.group }}>
            {props.children}
        </GroupContext.Provider>
    );
};

export const useCurrentGroup = () => {
    const context = useContext(GroupContext);

    if (!context) {
        throw new Error('useCurrentGroup must be used within a GroupProvider');
    }

    return context;
};
