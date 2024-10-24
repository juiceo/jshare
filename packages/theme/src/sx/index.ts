import { memoize, merge } from 'lodash';

import { getBorderRadius } from '../borderRadius';
import { getColorFromPath } from '../colors/utils';
import { getSpacing } from '../spacing';
import type { Theme } from '../types';
import type { SxProps } from './types';

export * from './types';

export const getSxStyles = (sx: SxProps, theme: Theme) => {
    const trimmedEntries = Object.entries(sx).filter(([key]) => isSxKey(key));

    return memoizedMergeStyles(trimmedEntries, theme);
};

const mergeStyles = (entries: [string, SxProps[keyof SxProps]][], theme: Theme) => {
    return merge(
        entries.map(([key, value]) => {
            return getStylesFromSxProperty(key as keyof SxProps, value, theme);
        })
    );
};
const memoizedMergeStyles = memoize(mergeStyles);

const isSxKey = (key: string): boolean => {
    const _key = key as keyof SxProps;
    switch (_key) {
        case 'height':
        case 'h':
        case 'maxH':
        case 'width':
        case 'w':
        case 'maxW':
        case 'flex':
        case 'm':
        case 'my':
        case 'mx':
        case 'mb':
        case 'mt':
        case 'ml':
        case 'mr':
        case 'p':
        case 'py':
        case 'px':
        case 'pt':
        case 'pb':
        case 'pl':
        case 'pr':
        case 'bg':
        case 'background':
        case 'borderRadius':
        case 'br':
        case 'absoluteFill': {
            return true;
        }
        default: {
            assertUnreachable(_key);
            return false;
        }
    }
};

const getStylesFromSxProperty = <TKey extends keyof SxProps>(
    key: TKey,
    value: SxProps[TKey],
    theme: Theme
) => {
    switch (key) {
        case 'height':
        case 'h': {
            return {
                height: value as SxProps['h'],
            };
        }
        case 'maxH': {
            return {
                maxHeight: value as SxProps['maxH'],
            };
        }
        case 'width':
        case 'w': {
            return {
                width: value as SxProps['w'],
            };
        }
        case 'maxW': {
            return {
                maxWidth: value as SxProps['maxW'],
            };
        }
        case 'flex': {
            return {
                flex: value as SxProps['flex'],
            };
        }
        case 'p': {
            return {
                padding: getSpacing(value as SxProps['p']),
            };
        }
        case 'px': {
            return {
                paddingHorizontal: getSpacing(value as SxProps['px']),
            };
        }
        case 'py': {
            return {
                paddingVertical: getSpacing(value as SxProps['py']),
            };
        }
        case 'pt': {
            return {
                paddingTop: getSpacing(value as SxProps['pt']),
            };
        }
        case 'pb': {
            return {
                paddingBottom: getSpacing(value as SxProps['pb']),
            };
        }
        case 'pl': {
            return {
                paddingLeft: getSpacing(value as SxProps['pl']),
            };
        }
        case 'pr': {
            return {
                paddingRight: getSpacing(value as SxProps['pr']),
            };
        }
        case 'm': {
            return {
                margin: getSpacing(value as SxProps['m']),
            };
        }
        case 'mx': {
            return {
                marginHorizontal: getSpacing(value as SxProps['mx']),
            };
        }
        case 'my': {
            return {
                marginVertical: getSpacing(value as SxProps['my']),
            };
        }
        case 'mt': {
            return {
                marginTop: getSpacing(value as SxProps['mt']),
            };
        }
        case 'mb': {
            return {
                marginBottom: getSpacing(value as SxProps['mb']),
            };
        }
        case 'ml': {
            return {
                marginLeft: getSpacing(value as SxProps['ml']),
            };
        }
        case 'mr': {
            return {
                marginRight: getSpacing(value as SxProps['mr']),
            };
        }
        case 'bg':
        case 'background': {
            return {
                backgroundColor: getColorFromPath(value as SxProps['bg'], theme),
            };
        }
        case 'br':
        case 'borderRadius': {
            return {
                borderRadius: getBorderRadius(value as SxProps['br']),
            };
        }
        case 'absoluteFill': {
            return {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            };
        }
        default: {
            assertUnreachable(key);
            return {};
        }
    }
};

function assertUnreachable(x: never) {}
