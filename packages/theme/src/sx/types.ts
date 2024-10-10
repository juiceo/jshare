import type { ViewStyle } from 'react-native';

import type { BorderRadiusUnit } from '../borderRadius';
import type { BackgroundColorPath } from '../colors';
import type { SpacingUnit } from '../spacing';

/**
 * Shorthand style props
 */
export type SxProps = {
    /**
     * Size
     */
    w?: ViewStyle['width'];
    h?: ViewStyle['height'];
    /**
     * Padding
     */
    p?: SpacingUnit;
    px?: SpacingUnit;
    pr?: SpacingUnit;
    pl?: SpacingUnit;
    py?: SpacingUnit;
    pt?: SpacingUnit;
    pb?: SpacingUnit;
    /**
     * Margin
     */
    m?: SpacingUnit;
    mx?: SpacingUnit;
    mr?: SpacingUnit;
    ml?: SpacingUnit;
    my?: SpacingUnit;
    mt?: SpacingUnit;
    mb?: SpacingUnit;
    /**
     * Border radius
     */
    br?: BorderRadiusUnit;
    radius?: BorderRadiusUnit;
    /**
     * Background color
     */
    bg?: BackgroundColorPath;
};
