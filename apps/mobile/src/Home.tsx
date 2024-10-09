import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '@jshare/theme';

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
            <Text style={{ color: theme.palette.text.primary, ...theme.typography.h1 }}>
                Hello there! Testing
            </Text>
        </View>
    );
};
