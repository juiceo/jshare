import type { ViewStyle } from 'react-native';

import { getBorderRadius } from '../borderRadius';
import { getColor } from '../colors/utils';
import { getSpacing } from '../spacing';
import type { Theme } from '../types';
import type { SxProps } from './types';

export * from './types';

export const getSxStyles = (sx: SxProps, theme: Theme): ViewStyle => {
    return {
        height: sx.h,
        width: sx.w,
        padding: getSpacing(sx.p),
        paddingHorizontal: getSpacing(sx.px),
        paddingLeft: getSpacing(sx.pl),
        paddingRight: getSpacing(sx.pr),
        paddingVertical: getSpacing(sx.py),
        paddingTop: getSpacing(sx.pt),
        paddingBottom: getSpacing(sx.pb),
        margin: getSpacing(sx.m),
        marginHorizontal: getSpacing(sx.mx),
        marginLeft: getSpacing(sx.ml),
        marginRight: getSpacing(sx.mr),
        marginVertical: getSpacing(sx.my),
        marginTop: getSpacing(sx.mt),
        marginBottom: getSpacing(sx.mb),
        borderRadius: getBorderRadius(sx.radius ?? sx.br),
        backgroundColor: getColor(sx.bg, theme),
    };
};
