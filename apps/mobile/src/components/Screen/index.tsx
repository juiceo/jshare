import type { ReactElement } from 'react';
import { Keyboard, Pressable } from 'react-native';
import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { ScreenContentFixed, ScreenContentScrollable } from './ScreenContent';
import { ScreenFooter } from './ScreenFooter';
import { ScreenHeader } from './ScreenHeader';
import { ScreenProvider } from './ScreenProvider';
import { useHasParentScreen } from './useHasParentScreen';

export type ScreenProps = {
    children: ReactElement | ReactElement[];

    /**
     * Disables the bottom safe area inset for the screen. For most screens this should be enabled, but exceptions
     * are cases where the system already provides some kind of footer which takes care of the safe area - for example
     * a bottom tab bar.
     *
     * @default false;
     */
    disableBottomInset?: boolean;
    /**
     * The name of the screen
     */
    name: string;

    /**
     * Hides the system header for this screen
     */
    disableHeader?: true;
    /**
     * The label to show for the back button
     */
    backButtonLabel?: string;
};

export const Screen = (props: ScreenProps) => {
    const { disableBottomInset, name, disableHeader, backButtonLabel } = props;
    const { theme } = useTheme();
    const hasParentScreen = useHasParentScreen();

    if (hasParentScreen) {
        throw new Error('Screen component should not be nested within another Screen component.');
    }

    return (
        <>
            <Stack.Screen
                options={{
                    title: name,
                    contentStyle: {
                        backgroundColor: theme.palette.background.main,
                    },
                    headerStyle: {
                        backgroundColor: theme.palette.background.main,
                    },
                    headerTintColor: theme.palette.text.primary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown: !disableHeader,
                    headerBackTitle: backButtonLabel,
                }}
            />
            <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
                <ScreenProvider
                    enableTopInset={disableHeader}
                    disableBottomInset={disableBottomInset}
                >
                    {props.children}
                </ScreenProvider>
            </Pressable>
        </>
    );
};

Screen.Content = ScreenContentScrollable;
Screen.ContentFixed = ScreenContentFixed;
Screen.Footer = ScreenFooter;
Screen.Header = ScreenHeader;
