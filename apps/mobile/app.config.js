import 'dotenv/config';

export default ({ config }) => {
    const environmentConfig = {
        supabaseApiUrl: process.env.EXPO_PUBLIC_SUPABASE_API_URL,
        supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        jshareApiUrl: process.env.EXPO_PUBLIC_JSHARE_API_URL,
    };
    return {
        ...config,
        expo: {
            name: 'JShare',
            slug: 'jshare',
            owner: 'juiceo',
            version: '1.0.1',
            orientation: 'portrait',
            icon: './assets/icon.png',
            userInterfaceStyle: 'dark',
            scheme: 'jshare',
            splash: {
                image: './assets/splash.png',
                resizeMode: 'contain',
                backgroundColor: '#15171C',
            },
            updates: {
                enabled: true,
                fallbackToCacheTimeout: 0,
                url: 'https://u.expo.dev/2ea87411-854e-47b5-8d23-f03472ae81fd',
            },
            runtimeVersion: {
                policy: 'appVersion',
            },
            platforms: ['ios', 'android'],
            assetBundlePatterns: ['**/*'],
            ios: {
                bundleIdentifier: 'com.juiceo.jshare',
                buildNumber: '1.0.1',
                supportsTablet: true,
            },
            android: {
                package: 'com.juiceo.jshare',
                adaptiveIcon: {
                    foregroundImage: './assets/adaptive-icon.png',
                    backgroundColor: '#15171C',
                },
            },
            extra: {
                eas: {
                    projectId: '2ea87411-854e-47b5-8d23-f03472ae81fd',
                },
                router: {
                    origin: false,
                },
                ...environmentConfig,
            },
            plugins: [
                'expo-router',
                'expo-image-picker',
                [
                    'expo-splash-screen',
                    {
                        backgroundColor: '#15171C',
                        image: './assets/splash.png',
                        imageWidth: 200,
                    },
                ],
            ],
            experiments: {
                typedRoutes: true,
            },
        },
    };
};
