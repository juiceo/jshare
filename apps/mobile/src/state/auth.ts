import { atom } from 'jotai';

import { jotaiStore } from '~/wrappers/JotaiProvider';

export const accessTokenAtom = atom<string | null>(null);
export const userIdAtom = atom<string | null>(null);

export const setAccessToken = (value: string | null) => {
    return jotaiStore.set(accessTokenAtom, value);
};

export const setUserId = (value: string | null) => {
    return jotaiStore.set(userIdAtom, value);
};

export const getAccessToken = () => {
    return jotaiStore.get(accessTokenAtom) ?? '';
};

export const getUserId = () => {
    return jotaiStore.get(userIdAtom) ?? '';
};
