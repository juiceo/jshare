import type { ReactElement } from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { Stack as StackComponent } from '~/components/atoms/Stack';
import { ErrorBoundary } from '~/components/errors/ErrorBoundary';
import { ScreenContent } from '~/components/Screen/ScreenContent';
import { ScreenFooter } from '~/components/Screen/ScreenFooter';
import { ScreenProvider } from '~/components/Screen/ScreenProvider';
import { useHasParentScreen } from '~/components/Screen/useHasParentScreen';
import { Typography } from '~/components/Typography';

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
     * Disables the top safe area inset for the screen
     */
    disableTopInset?: boolean;
    /**
     * Options to pass to the underlying Stack.Screen component
     */
    screenOptions?: NativeStackNavigationOptions;
};

export const Screen = (props: ScreenProps) => {
    const { disableBottomInset, disableTopInset, screenOptions } = props;
    const { theme } = useTheme();
    const hasParentScreen = useHasParentScreen();

    if (hasParentScreen) {
        throw new Error('Screen component should not be nested within another Screen component.');
    }

    const renderFallback = (reset: () => void) => {
        return (
            <StackComponent flex={1} center bg="background.default" spacing="xl" p="2xl">
                <Typography>Oops, something went wrong!</Typography>
            </StackComponent>
        );
    };

    return (
        <ErrorBoundary fallback={renderFallback}>
            <Stack.Screen
                options={{
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
                    ...screenOptions,
                }}
            />

            <ScreenProvider
                enableTopInset={!disableTopInset}
                disableBottomInset={disableBottomInset}
            >
                {props.children}
            </ScreenProvider>
        </ErrorBoundary>
    );
};

Screen.Content = ScreenContent;
Screen.Footer = ScreenFooter;
