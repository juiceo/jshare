import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';

import { initSignalDB } from '~/lib/signaldb';

export const SignalDBContext = createContext<{
    ready: boolean;
}>({
    ready: false,
});

export const SignalDBProvider = (props: PropsWithChildren) => {
    const [ready, setReady] = useState(false);
    useEffect(() => {
        (async () => {
            await initSignalDB().then(() => {
                setReady(true);
            });
        })();
    }, []);

    return <SignalDBContext.Provider value={{ ready }}>{props.children}</SignalDBContext.Provider>;
};

export const useSignalDBReady = () => {
    const context = useContext(SignalDBContext);

    if (!context) {
        throw new Error('useSignalDBReady must be used within a SignalDBProvider');
    }

    return context.ready;
};
