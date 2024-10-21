import { View, type ViewProps, type ViewStyle } from 'react-native';

import {
    getSpacing,
    getSxStyles,
    useTheme,
    type SpacingUnit,
    type SxProps,
    type Theme,
} from '@jshare/theme';

export type StackProps = {
    row?: boolean;
    rowReverse?: boolean;
    column?: boolean;
    columnReverse?: boolean;
    justifyStart?: boolean;
    justifyCenter?: boolean;
    justifyEnd?: boolean;
    justifyBetween?: boolean;
    alignStart?: boolean;
    alignCenter?: boolean;
    alignEnd?: boolean;
    alignStretch?: boolean;
    center?: boolean;
    spacing?: SpacingUnit;
} & ViewProps &
    SxProps;

export const Stack = (props: StackProps) => {
    const { style, ...rest } = props;
    const { theme } = useTheme();
    return (
        <View
            style={[
                {
                    flexDirection: getDirection(props),
                    justifyContent: getJustify(props),
                    alignItems: getAlign(props),
                    gap: getGap(props, theme),
                },
                getSxStyles(rest, theme),
                style,
            ]}
            {...rest}
        />
    );
};

const getDirection = (props: StackProps): ViewStyle['flexDirection'] => {
    return props.row
        ? 'row'
        : props.rowReverse
          ? 'row-reverse'
          : props.column
            ? 'column'
            : props.columnReverse
              ? 'column-reverse'
              : undefined;
};

const getJustify = (props: StackProps): ViewStyle['justifyContent'] => {
    return props.justifyStart
        ? 'flex-start'
        : props.justifyCenter || props.center
          ? 'center'
          : props.justifyEnd
            ? 'flex-end'
            : props.justifyBetween
              ? 'space-between'
              : undefined;
};

const getAlign = (props: StackProps): ViewStyle['alignItems'] => {
    return props.alignStart
        ? 'flex-start'
        : props.alignCenter || props.center
          ? 'center'
          : props.alignEnd
            ? 'flex-end'
            : props.alignStretch
              ? 'stretch'
              : undefined;
};

const getGap = (props: StackProps, theme: Theme): ViewStyle['gap'] => {
    return getSpacing(props.spacing);
};
