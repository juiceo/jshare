import { createContext, useContext, type PropsWithChildren } from 'react';

import { useGroupPresence } from '~/hooks/useGroupPresence';

export type GroupContextType = {
    presentUserIds: string[];
};

export const GroupContext = createContext<GroupContextType | null>(null);

export const GroupContextProvider = (props: PropsWithChildren<{ groupId: string }>) => {
    const presentUserIds = useGroupPresence(props.groupId);

    return (
        <GroupContext.Provider value={{ presentUserIds }}>{props.children}</GroupContext.Provider>
    );
};

export const useGroupContext = () => {
    const context = useContext(GroupContext);

    if (!context) {
        throw new Error('useGroupContext must be used within a GroupContextProvider');
    }

    return context;
};
