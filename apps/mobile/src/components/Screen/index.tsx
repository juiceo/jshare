import type { ReactElement } from 'react';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';

import { useTheme } from '@jshare/theme';

import { ScreenContent } from '~/components/Screen/ScreenContent';
import { ScreenFooter } from '~/components/Screen/ScreenFooter';
import { ScreenHeader } from '~/components/Screen/ScreenHeader';
import { ScreenProvider } from '~/components/Screen/ScreenProvider';
import { useHasParentScreen } from '~/components/Screen/useHasParentScreen';

export type ScreenProps = {
    children: (ReactElement | null | undefined) | (ReactElement | null | undefined)[];
    avoidKeyboard?: boolean;
};

export const Screen = (props: ScreenProps) => {
    const hasParentScreen = useHasParentScreen();
    const { theme } = useTheme();

    if (hasParentScreen) {
        throw new Error('Screen component should not be nested within another Screen component.');
    }

    if (props.avoidKeyboard) {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={{ flex: 1 }}
                keyboardVerticalOffset={theme.spacing.md}
                enabled={props.avoidKeyboard}
            >
                <ScreenProvider>{props.children}</ScreenProvider>
            </KeyboardAvoidingView>
        );
    }

    return <ScreenProvider>{props.children}</ScreenProvider>;
};

Screen.Content = ScreenContent;
Screen.Footer = ScreenFooter;
Screen.Header = ScreenHeader;
