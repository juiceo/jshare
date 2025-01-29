import 'dotenv/config';

export default ({ config }) => {
    console.log('Setting dynamic variables to App config...');
    console.log('ENV VARS: ', process.env);
    return {
        ...config,
        name: 'jshare',
        slug: 'jshare',
        extra: {
            supabaseApiUrl: process.env.EXPO_PUBLIC_SUPABASE_API_URL,
            supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
            jshareApiUrl: process.env.EXPO_PUBLIC_JSHARE_API_URL,
        },
    };
};
