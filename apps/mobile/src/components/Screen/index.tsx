import type { ReactElement } from 'react';

import { Stack } from '../Stack';
import { ScreenContentFixed, ScreenContentScrollable } from './ScreenContent';
import { ScreenFooter } from './ScreenFooter';
import { ScreenHeader } from './ScreenHeader';
import { ScreenProvider } from './ScreenProvider';
import { useHasParentScreen } from './useHasParentScreen';

export type ScreenProps = {
    children: ReactElement | ReactElement[];
    /**
     * Enables the top safe area inset for the screen. For most screens this does not need to be enabled,
     * since the system header bar already takes care of this.
     *
     * @default false;
     */
    enableTopInset?: boolean;

    /**
     * Disables the bottom safe area inset for the screen. For most screens this should be enabled, but exceptions
     * are cases where the system already provides some kind of footer which takes care of the safe area - for example
     * a bottom tab bar.
     *
     * @default false;
     */
    disableBottomInset?: boolean;
};

export const Screen = (props: ScreenProps) => {
    const { enableTopInset, disableBottomInset } = props;
    const hasParentScreen = useHasParentScreen();

    if (hasParentScreen) {
        throw new Error('Screen component should not be nested within another Screen component.');
    }

    return (
        <Stack flex={1} bg="background.main">
            <ScreenProvider enableTopInset={enableTopInset} disableBottomInset={disableBottomInset}>
                {props.children}
            </ScreenProvider>
        </Stack>
    );
};

Screen.Content = ScreenContentScrollable;
Screen.ContentFixed = ScreenContentFixed;
Screen.Footer = ScreenFooter;
Screen.Header = ScreenHeader;
