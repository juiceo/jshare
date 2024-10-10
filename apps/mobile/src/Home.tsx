import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from '@jshare/theme';

import { Button } from './components/Button';
import { Stack } from './components/Stack';
import { Typography } from './components/Typography';

export const Home = () => {
    const { theme } = useTheme();
    return (
        <View
            style={{
                backgroundColor: theme.palette.background.main,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <StatusBar style="auto" />
            <Typography variant="h1" color="error.main">
                Heading 1
            </Typography>
            <Typography variant="h2" color="success.main">
                Heading 2
            </Typography>
            <Typography variant="h3" color="warning.light">
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
            <Stack column spacing="md">
                <Button text="Contained, small" size="md" variant="contained" />
                <Button text="Contained, medium" size="md" variant="outlined" />
                <Button text="Contained, large" size="md" variant="text" />
            </Stack>
        </View>
    );
};
