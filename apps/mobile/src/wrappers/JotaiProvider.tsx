import type { PropsWithChildren } from 'react';
import { createStore, Provider } from 'jotai';

export const jotaiStore = createStore();

export const JotaiProvider = (props: PropsWithChildren) => {
    return <Provider store={jotaiStore}>{props.children}</Provider>;
};
