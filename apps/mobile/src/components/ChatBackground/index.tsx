import { Image } from 'expo-image';

import { Box, type BoxProps } from '~/components/atoms/Box';

const backgrounds = {
    1: require('./chat-background-1.svg'),
};

export type ChatBackgroundProps = BoxProps;

export const ChatBackground = (props: ChatBackgroundProps) => {
    const { children, ...rest } = props;
    return (
        <Box {...rest} style={{ position: 'relative' }}>
            <Image
                source={backgrounds[1]}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0.05,
                }}
            />
            {children}
        </Box>
    );
};
