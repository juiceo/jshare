import { Children, type ReactElement } from 'react';

import { ScreenContext } from './ScreenContext';
import { ScreenFooter } from './ScreenFooter';
import { ScreenHeader } from './ScreenHeader';

export const ScreenProvider = (props: {
    children: ReactElement | ReactElement[];
    disableBottomInset?: boolean;
    enableTopInset?: boolean;
}) => {
    const { disableBottomInset, enableTopInset } = props;
    const childrenArray = Children.toArray(props.children) as ReactElement[];
    const hasHeader = childrenArray.some((child) => child.type === ScreenHeader);
    const hasFooter = childrenArray.some((child) => child.type === ScreenFooter);

    return (
        <ScreenContext.Provider
            value={{
                hasFooter,
                hasHeader,
                disableBottomInset,
                enableTopInset,
            }}
        >
            {props.children}
        </ScreenContext.Provider>
    );
};
