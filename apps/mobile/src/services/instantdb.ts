import { init_experimental } from '@instantdb/react-native';

import { graph } from '@jshare/db';

if (!process.env.EXPO_PUBLIC_INSTANT_APP_ID) {
    throw new Error('EXPO_PUBLIC_INSTANT_APP_ID must be defined');
}

console.log('INSTANT APP ID', process.env.EXPO_PUBLIC_INSTANT_APP_ID);

export const db = init_experimental({
    appId: process.env.EXPO_PUBLIC_INSTANT_APP_ID,
    schema: graph,
});
