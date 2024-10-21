import { Children, type ReactElement } from 'react';

import { ScreenContext } from '~/components/Screen/ScreenContext';
import { ScreenFooter } from '~/components/Screen/ScreenFooter';

export const ScreenProvider = (props: {
    children: ReactElement | ReactElement[];
    disableBottomInset?: boolean;
    enableTopInset?: boolean;
}) => {
    const { disableBottomInset, enableTopInset } = props;
    const childrenArray = Children.toArray(props.children) as ReactElement[];
    const hasFooter = childrenArray.some((child) => child.type === ScreenFooter);

    return (
        <ScreenContext.Provider
            value={{
                hasFooter,
                disableBottomInset,
                enableTopInset,
            }}
        >
            {props.children}
        </ScreenContext.Provider>
    );
};
