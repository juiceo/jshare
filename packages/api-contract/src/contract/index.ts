// contract.ts

import { initContract } from '@ts-rest/core';
import { profiles } from './profiles';
import { z } from 'zod';
import type { ApiErrorResponse } from '../types/ApiResponse';
import type { ApiErrorBadRequest, ApiErrorForbidden, ApiErrorInternal, ApiErrorNotFound, ApiErrorUnauthorized } from '../types/ApiError';

const c = initContract();

export const contract = c.router({
    profiles,
}, {
    baseHeaders: z.object({
      authorization: z.string(),
    }),
    commonResponses: {
      400: c.type<ApiErrorResponse<ApiErrorBadRequest>>(),
      401: c.type<ApiErrorResponse<ApiErrorUnauthorized>>(),
      403: c.type<ApiErrorResponse<ApiErrorForbidden>>(),
      404: c.type<ApiErrorResponse<ApiErrorNotFound>>(),
      500: c.type<ApiErrorResponse<ApiErrorInternal>>(),
    },
});