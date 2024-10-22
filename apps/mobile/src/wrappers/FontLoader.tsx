import { useEffect, type PropsWithChildren } from 'react';
import { useFonts } from 'expo-font';

import { Fonts } from '@jshare/theme';

export type FontLoaderProps = {
    onLoad?: () => void;
    onError?: (err: Error) => void;
    placeholder?: JSX.Element;
};

export const FontLoader = (props: PropsWithChildren<FontLoaderProps>) => {
    const { onLoad, onError, placeholder = null } = props;
    const [loaded, error] = useFonts(Fonts);

    useEffect(() => {
        if (loaded) {
            onLoad?.();
        }
    }, [loaded, onLoad]);

    useEffect(() => {
        if (error) {
            onError?.(error);
        }
    });

    if (!loaded && !error) {
        return placeholder;
    }

    return props.children;
};
