import { useEffect } from 'react';
import { Redirect, useLocalSearchParams } from 'expo-router';

import { SystemStore } from '~/lib/store/SystemStore';

export default function DeepLinkLayout() {
    const { code } = useLocalSearchParams<{ code: string }>();

    useEffect(() => {
        SystemStore.setPendingDeepLink({
            type: 'invite',
            code,
        });
    }, [code]);

    return <Redirect href="/(authenticated)/(tabs)/groups" />;
}
