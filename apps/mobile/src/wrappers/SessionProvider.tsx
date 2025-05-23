import { type PropsWithChildren } from 'react';
import { observer } from 'mobx-react-lite';

import { LoadingState } from '~/components/util/LoadingState';
import { useRealtimeUpdates } from '~/lib/realtime';
import { SessionStore } from '~/lib/store/SessionStore';

export const SessionProvider = observer((props: PropsWithChildren) => {
    const isLoading = SessionStore.isLoading;
    useRealtimeUpdates(SessionStore.userMaybe?.id);

    if (isLoading) {
        return <LoadingState />;
    }

    return props.children;
});
