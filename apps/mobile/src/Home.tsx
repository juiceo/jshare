import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@jshare/theme';

import { Typography } from './components/Typography';

export const Home = () => {
    const { theme } = useTheme();
    return (
        <View
            style={{
                backgroundColor: theme.palette.background.main,
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <StatusBar style="auto" />
            <Typography variant="h1" color="primary">
                Heading 1
            </Typography>
            <Typography variant="h2" color="primary">
                Heading 2
            </Typography>
            <Typography variant="h3" color="primary">
                Heading 3
            </Typography>
            <Typography variant="body1" color="primary">
                Body 1
            </Typography>
            <Typography variant="body2" color="primary">
                Body 2
            </Typography>
            <Typography variant="caption" color="primary">
                Caption
            </Typography>
            <Typography variant="button" color="primary">
                Button
            </Typography>
        </View>
    );
};
