import 'dotenv/config';

export default ({ config }) => {
    const environmentConfig = {
        supabaseApiUrl: process.env.EXPO_PUBLIC_SUPABASE_API_URL,
        supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        jshareApiUrl: process.env.EXPO_PUBLIC_JSHARE_API_URL,
    };

    const environment = process.env.EXPO_PUBLIC_ENVIRONMENT;
    const isProduction = environment === 'production';

    return {
        ...config,
        expo: {
            name: isProduction ? 'JShare' : `JShare (${environment})`,
            slug: 'jshare',
            owner: 'juiceo',
            version: '1.0.2',
            orientation: 'portrait',
            icon: './assets/icon.png',
            userInterfaceStyle: 'dark',
            scheme: 'jshare',
            splash: {
                image: './assets/splash.png',
                resizeMode: 'contain',
                backgroundColor: '#ffa5a5',
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
                bundleIdentifier: isProduction
                    ? 'com.juiceo.jshare'
                    : `com.juiceo.jshare.${environment}`,
                buildNumber: '1.0.2',
                supportsTablet: true,
            },
            android: {
                package: isProduction ? 'com.juiceo.jshare' : `com.juiceo.jshare.${environment}`,
                adaptiveIcon: {
                    foregroundImage: './assets/adaptive-icon.png',
                    backgroundColor: '#ffa5a5',
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
                        backgroundColor: '#ffa5a5',
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
