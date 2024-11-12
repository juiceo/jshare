import { Image as ExpoImage } from 'expo-image';

import { getSxStyles, useTheme } from '@jshare/theme';

import { Box } from '~/components/atoms/Box';
import { getSourceFromProps, type ImageProps } from '~/components/atoms/Image.utils';

export const Image = (props: ImageProps) => {
    const source = getSourceFromProps(props);
    const { theme } = useTheme();
    return (
        <ExpoImage
            key={source.uri}
            source={source}
            style={[
                {
                    width: props.width,
                    height: props.height,
                    position: 'relative',
                },
                getSxStyles(props, theme),
                props.style,
            ]}
            contentFit={props.fit}
        >
            {props.darken && (
                <Box absoluteFill style={{ backgroundColor: `rgba(0,0,0,${props.darken})` }} />
            )}
        </ExpoImage>
    );
};
