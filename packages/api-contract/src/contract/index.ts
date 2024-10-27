// contract.ts

import { initContract } from '@ts-rest/core';

import type {
    ApiErrorBadRequest,
    ApiErrorForbidden,
    ApiErrorInternal,
    ApiErrorNotFound,
    ApiErrorUnauthorized,
} from '../types/ApiError';
import { profiles } from './profiles';

const c = initContract();

export const contract = c.router(
    {
        profiles,
    },
    {
        commonResponses: {
            400: c.type<ApiErrorBadRequest>(),
            401: c.type<ApiErrorUnauthorized>(),
            403: c.type<ApiErrorForbidden>(),
            404: c.type<ApiErrorNotFound>(),
            500: c.type<ApiErrorInternal>(),
        },
    }
);
