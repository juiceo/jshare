import type { ReactElement } from 'react';

import { ScreenContent } from '~/components/Screen/ScreenContent';
import { ScreenFooter } from '~/components/Screen/ScreenFooter';
import { ScreenHeader } from '~/components/Screen/ScreenHeader';
import { ScreenProvider } from '~/components/Screen/ScreenProvider';
import { useHasParentScreen } from '~/components/Screen/useHasParentScreen';

export type ScreenProps = {
    children: ReactElement | ReactElement[];
};

export const Screen = (props: ScreenProps) => {
    const hasParentScreen = useHasParentScreen();

    if (hasParentScreen) {
        throw new Error('Screen component should not be nested within another Screen component.');
    }

    return <ScreenProvider>{props.children}</ScreenProvider>;
};

Screen.Content = ScreenContent;
Screen.Footer = ScreenFooter;
Screen.Header = ScreenHeader;
