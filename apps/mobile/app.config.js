import 'dotenv/config';

export default ({ config }) => {
    console.log('Setting dynamic variables to App config...');
    console.log('ENV VARS: ', process.env);
    return {
        ...config,
        expo: {
            name: 'jshare',
            slug: 'jshare',
            version: '1.0.0',
            orientation: 'portrait',
            icon: './assets/icon.png',
            userInterfaceStyle: 'dark',
            scheme: 'jshare',
            splash: {
                image: './assets/splash.png',
                resizeMode: 'contain',
                backgroundColor: '#ffffff',
            },
            updates: {
                fallbackToCacheTimeout: 0,
            },
            platforms: ['ios', 'android'],
            assetBundlePatterns: ['**/*'],
            ios: {
                bundleIdentifier: 'com.juiceo.jshare',
                buildNumber: '1.0.0',
                supportsTablet: true,
            },
            android: {
                package: 'com.juiceo.jshare',
                adaptiveIcon: {
                    foregroundImage: './assets/adaptive-icon.png',
                    backgroundColor: '#FFFFFF',
                },
            },
            extra: {
                eas: {
                    projectId: '2ea87411-854e-47b5-8d23-f03472ae81fd',
                },
                supabaseApiUrl: process.env.EXPO_PUBLIC_SUPABASE_API_URL,
                supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
                jshareApiUrl: process.env.EXPO_PUBLIC_JSHARE_API_URL,
                router: {
                    origin: false,
                },
            },
            plugins: ['expo-router', 'expo-image-picker'],
            experiments: {
                typedRoutes: true,
            },
        },
    };
};
