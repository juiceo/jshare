import type { ReactElement } from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Stack } from 'expo-router';

import { useTheme } from '@jshare/theme';

import { ScreenContent } from '~/components/Screen/ScreenContent';
import { ScreenFooter } from '~/components/Screen/ScreenFooter';
import { ScreenHeader } from '~/components/Screen/ScreenHeader';
import { ScreenProvider } from '~/components/Screen/ScreenProvider';
import { useHasParentScreen } from '~/components/Screen/useHasParentScreen';

export type ScreenProps = {
    children: ReactElement | ReactElement[];
    /**
     * Options to pass to the underlying Stack.Screen component
     */
    screenOptions?: NativeStackNavigationOptions;
};

export const Screen = (props: ScreenProps) => {
    const { screenOptions } = props;
    const { theme } = useTheme();
    const hasParentScreen = useHasParentScreen();

    if (hasParentScreen) {
        throw new Error('Screen component should not be nested within another Screen component.');
    }

    return (
        <>
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
            <ScreenProvider>{props.children}</ScreenProvider>
        </>
    );
};

Screen.Content = ScreenContent;
Screen.Footer = ScreenFooter;
Screen.Header = ScreenHeader;
