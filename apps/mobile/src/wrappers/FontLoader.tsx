import { Fonts } from '@jshare/theme';
import { useFonts } from 'expo-font';
import { useEffect, type PropsWithChildren } from 'react';

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
    }, [loaded]);

    useEffect(() => {
        if (error) {
            onError?.(error);
        }
    });

    if (!loaded && !error) {
        return placeholder;
    }

    console.log('FONTS LOADED', loaded);
    console.log('FONT LOAD ERROR', error);

    return props.children;
};
