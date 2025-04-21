import { useMemo, type DependencyList } from 'react';
import { useAtomValue, type Atom } from 'jotai';

export const useDb = <T>(getAtom: () => Atom<T>, deps?: DependencyList) => {
    const memoizedAtom = useMemo(() => {
        return getAtom();
        //eslint-disable-next-line
    }, deps ?? []);
    return useAtomValue(memoizedAtom);
};
