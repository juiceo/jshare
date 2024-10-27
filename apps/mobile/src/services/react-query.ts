import { initTsrReactQuery } from '@ts-rest/react-query/v5';

import { contract } from '@jshare/api-contract';

import { getAccessToken } from '~/state/auth';

const API_URL = process.env.EXPO_PUBLIC_JSHARE_API_URL;

if (!API_URL) {
    throw new Error('Missing required environment variable: EXPO_PUBLIC_JSHARE_API_URL');
}

export const tsr = initTsrReactQuery(contract, {
    baseUrl: API_URL,
    baseHeaders: {
        Authorizaton: () => getAccessToken(),
    },
});
