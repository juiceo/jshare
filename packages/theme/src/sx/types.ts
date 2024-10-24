import type { ViewStyle } from 'react-native';

import type { BorderRadiusUnit } from '../borderRadius';
import type { BackgroundColorPath } from '../colors';
import type { SpacingUnit } from '../spacing';

/**
 * Shorthand style props
 */
export type SxProps = SxMarginProps & SxPaddingProps & SxLayoutProps & SxBorderProps & SxColorProps;

export type SxMarginProps = {
    m?: SpacingUnit;
    mx?: SpacingUnit;
    mr?: SpacingUnit;
    ml?: SpacingUnit;
    my?: SpacingUnit;
    mt?: SpacingUnit;
    mb?: SpacingUnit;
};

export type SxLayoutProps = {
    w?: ViewStyle['width'];
    width?: ViewStyle['width'];
    h?: ViewStyle['height'];
    height?: ViewStyle['height'];
    flex?: ViewStyle['flex'];
};

export type SxPaddingProps = {
    p?: SpacingUnit;
    px?: SpacingUnit;
    pr?: SpacingUnit;
    pl?: SpacingUnit;
    py?: SpacingUnit;
    pt?: SpacingUnit;
    pb?: SpacingUnit;
};

export type SxBorderProps = {
    br?: BorderRadiusUnit;
    borderRadius?: BorderRadiusUnit;
};

export type SxColorProps = {
    bg?: BackgroundColorPath;
    background?: BackgroundColorPath;
};
