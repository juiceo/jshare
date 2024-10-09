import { useTheme } from '@jshare/theme';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

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
            <Text style={{ color: theme.palette.text.primary }}>Hello there! Testing</Text>
        </View>
    );
};
