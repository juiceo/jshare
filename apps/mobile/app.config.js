import 'dotenv/config';

import packageJson from './package.json';

export default ({ config }) => {
    const environmentConfig = {
        supabaseApiUrl: process.env.EXPO_PUBLIC_SUPABASE_API_URL,
        supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
        jshareApiUrl: process.env.EXPO_PUBLIC_JSHARE_API_URL,
    };

    const name = (() => {
        switch (process.env.EXPO_PUBLIC_ENVIRONMENT) {
            case 'local':
                return `JShare (dev)`;
            case 'staging':
                return `JShare (staging)`;
            default:
                return 'JShare';
        }
    })();

    const bundleIdentifier = (() => {
        switch (process.env.EXPO_PUBLIC_ENVIRONMENT) {
            case 'local':
                return 'com.juiceo.jshare.dev';
            case 'staging':
                return 'com.juiceo.jshare.staging';
            default:
                return 'com.juiceo.jshare';
        }
    })();

    const packageName = (() => {
        switch (process.env.EXPO_PUBLIC_ENVIRONMENT) {
            case 'local':
                return 'com.juiceo.jshare.dev';
            case 'staging':
                return 'com.juiceo.jshare.staging';
            default:
                return 'com.juiceo.jshare';
        }
    })();

    return {
        ...config,
        expo: {
            name,
            slug: 'jshare',
            owner: 'juiceo',
            version: packageJson.version,
            orientation: 'portrait',
            icon: './assets/icon.png',
            userInterfaceStyle: 'dark',
            scheme: 'jshare',
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
                bundleIdentifier,
                supportsTablet: false,
                config: {
                    usesNonExemptEncryption: false,
                },
                associatedDomains: ['applinks:app.jshare.me'],
            },
            android: {
                package: packageName,
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
                [
                    'expo-image-picker',
                    {
                        photosPermission:
                            'The app can accesses your photo library to allow you to upload images to your profile and groups',
                        cameraPermission:
                            'The app accesses your camera to allow you to capture images and upload them to your profile and groups',
                        microphonePermission:
                            'The app accesses your microphone to record videos and upload them to your profile and groups',
                    },
                ],
                [
                    'expo-splash-screen',
                    {
                        backgroundColor: '#ffa5a5',
                        image: './assets/splash.png',
                        resizeMode: 'contain',
                        imageWidth: 140,
                    },
                ],
                'expo-font',
            ],
            experiments: {
                typedRoutes: true,
            },
        },
    };
};
