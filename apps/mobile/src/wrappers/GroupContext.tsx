import { createContext, useContext, useMemo, type PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';

import { DB } from '@jshare/db';

import { useGroupPresence } from '~/hooks/useGroupPresence';
import { Store, type Docs } from '~/lib/store/collections';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export type GroupContextType = {
    groupId: string;
    group: Docs.Group;
    presentUserIds: string[];
    groupMemberIds: string[];
    isAdmin: boolean;
    isOwner: boolean;
};

export const GroupContext = createContext<GroupContextType | null>(null);

export const GroupContextProvider = observer((props: PropsWithChildren<{ groupId: string }>) => {
    const presentUserIds = useGroupPresence(props.groupId);
    const currentUser = useCurrentUser();
    const group = Store.groups.findById(props.groupId);

    const groupMemberIds = useMemo(
        () => group?.data.participants.map((participant) => participant.userId) ?? [],
        [group?.data.participants]
    );

    const currentUserRole = useMemo(() => {
        return group?.data.participants.find((participant) => participant.userId === currentUser.id)
            ?.role;
    }, [currentUser.id, group?.data.participants]);

    const isAdmin = useMemo(() => {
        return currentUserRole === DB.Role.Admin || currentUserRole === DB.Role.Owner;
    }, [currentUserRole]);

    const isOwner = useMemo(() => {
        return currentUserRole === DB.Role.Owner;
    }, [currentUserRole]);

    if (!group) {
        return null;
    }

    return (
        <GroupContext.Provider
            value={{
                presentUserIds,
                groupId: props.groupId,
                group,
                groupMemberIds,
                isAdmin,
                isOwner,
            }}
        >
            {props.children}
        </GroupContext.Provider>
    );
});

export const useGroupContext = () => {
    const context = useContext(GroupContext);

    if (!context) {
        throw new Error('useGroupContext must be used within a GroupContextProvider');
    }

    return context;
};
