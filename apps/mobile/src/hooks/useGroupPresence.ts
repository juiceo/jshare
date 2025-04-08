import { useEffect, useMemo, useState } from 'react';

import { supabase } from '~/lib/supabase';
import { useCurrentUser } from '~/wrappers/SessionProvider';

export const useGroupPresence = (groupId: string) => {
    const user = useCurrentUser();

    const [presentUserIds, setPresentUserIds] = useState<string[]>([]);
    const room = useMemo(() => {
        return supabase.channel(`group:${groupId}`, {
            config: {
                presence: {
                    key: user.id,
                },
            },
        });
    }, [groupId, user.id]);

    useEffect(() => {
        room.on('presence', { event: 'sync' }, () => {
            setPresentUserIds(Object.keys(room.presenceState()));
        }).subscribe(async (status) => {
            if (status !== 'SUBSCRIBED') return {};
            await room.track({ userId: user.id });
        });

        return () => {
            room.untrack();
            room.unsubscribe();
        };
    }, [room, user.id]);

    return presentUserIds;
};
