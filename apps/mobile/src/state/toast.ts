import { LayoutAnimation } from 'react-native';
import { atom, useAtomValue } from 'jotai';

import { getRandomKey } from '@jshare/common';

import { jotaiStore } from '~/wrappers/JotaiProvider';

export type ToastVariant = 'info' | 'error' | 'warning' | 'success';

export type ToastArgs = Pick<ToastObject, 'variant' | 'title'>;

export type ToastObject = {
    /**
     * The variant of the toast message
     */
    variant: ToastVariant;
    /**
     * The title of the toast message
     */
    title: string;
    /**
     * An optional message to add to the toast
     */
    message?: string;
    /**
     * The unique key of the toast message
     */
    key: string;
};

const DEFAULT_TOAST_TTL = 2500;

const toastsAtom = atom<ToastObject[]>([]);
const toastsDismissAtAtom = atom<number | null>(null);

export const useToasts = () => {
    return useAtomValue(toastsAtom);
};

export const useToastsDismissAt = () => {
    return useAtomValue(toastsDismissAtAtom);
};

export const showToast = (toast: ToastObject) => {
    LayoutAnimation.configureNext({
        duration: 500,
        create: { type: 'spring', springDamping: 0.6, property: 'opacity' },
        update: { type: 'spring', springDamping: 0.6, property: 'opacity' },
        delete: { type: 'spring', springDamping: 0.6, property: 'opacity' },
    });
    jotaiStore.set(toastsAtom, (prev) => [...prev, toast]);
    jotaiStore.set(toastsDismissAtAtom, () => Date.now() + DEFAULT_TOAST_TTL);
};

export const toast = {
    info: (title: string, message?: string) => {
        showToast({
            variant: 'info',
            title,
            message,
            key: getRandomKey(),
        });
    },
    warn: (title: string, message?: string) => {
        showToast({
            variant: 'warning',
            title,
            message,
            key: getRandomKey(),
        });
    },
    error: (title: string, message?: string) => {
        showToast({
            variant: 'error',
            title,
            message,
            key: getRandomKey(),
        });
    },
    success: (title: string, message?: string) => {
        showToast({
            variant: 'success',
            title,
            message,
            key: getRandomKey(),
        });
    },
    update: (key: string, args: Pick<ToastObject, 'variant' | 'title' | 'message'>) => {
        jotaiStore.set(toastsAtom, (prev) => {
            return prev.map((item) => {
                if (item.key === key) {
                    return {
                        ...item,
                        ...args,
                    };
                }
                return item;
            });
        });
        jotaiStore.set(toastsDismissAtAtom, () => Date.now() + DEFAULT_TOAST_TTL);
    },
    dismiss: (key: string) => {
        LayoutAnimation.configureNext({
            duration: 500,
            create: { type: 'spring', springDamping: 0.6, property: 'opacity' },
            update: { type: 'spring', springDamping: 0.6, property: 'opacity' },
            delete: { type: 'spring', springDamping: 0.6, property: 'opacity' },
        });
        jotaiStore.set(toastsAtom, (prev) => {
            return prev.filter((item) => item.key !== key);
        });
        jotaiStore.set(toastsDismissAtAtom, () => Date.now() + DEFAULT_TOAST_TTL);
    },
    dismissAll: () => {
        LayoutAnimation.configureNext({
            duration: 500,
            create: { type: 'spring', springDamping: 0.6, property: 'opacity' },
            update: { type: 'spring', springDamping: 0.6, property: 'opacity' },
            delete: { type: 'spring', springDamping: 0.6, property: 'opacity' },
        });
        jotaiStore.set(toastsAtom, []);
        jotaiStore.set(toastsDismissAtAtom, () => null);
    },
    startTimer: (duration?: number) => {
        jotaiStore.set(toastsDismissAtAtom, () => Date.now() + (duration ?? DEFAULT_TOAST_TTL));
    },
    clearTimer: () => {
        jotaiStore.set(toastsDismissAtAtom, () => null);
    },
};
