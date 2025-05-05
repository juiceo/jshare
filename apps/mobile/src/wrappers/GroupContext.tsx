import { createContext, useContext, type PropsWithChildren } from 'react';

import { useGroupPresence } from '~/hooks/useGroupPresence';
import { Store, type Docs } from '~/lib/store/collections';

export type GroupContextType = {
    groupId: string;
    group: Docs.Group;
    presentUserIds: string[];
};

export const GroupContext = createContext<GroupContextType | null>(null);

export const GroupContextProvider = (props: PropsWithChildren<{ groupId: string }>) => {
    const presentUserIds = useGroupPresence(props.groupId);
    const group = Store.groups.findById(props.groupId);

    if (!group) {
        return null;
    }

    return (
        <GroupContext.Provider value={{ presentUserIds, groupId: props.groupId, group }}>
            {props.children}
        </GroupContext.Provider>
    );
};

export const useGroupContext = () => {
    const context = useContext(GroupContext);

    if (!context) {
        throw new Error('useGroupContext must be used within a GroupContextProvider');
    }

    return context;
};
