// contract.ts

import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { Profile } from '@jshare/prisma';
import type { ApiSuccessResponse } from '../types/ApiResponse';

const c = initContract();

export const profiles = c.router({
    create: {
        method: "POST",
        path: "/profiles",
        body: z.object({
            firstName: z.string(),
            lastName: z.string(),
        }),
        responses: {
            201: c.type<ApiSuccessResponse<Profile>>(),
        },
        summary: "Create a profile",
    },
    get: {
        method: "GET",
        path: "/profiles",
        responses: {
            200: c.type<ApiSuccessResponse<Profile>>(),
        },
        summary: "Get your own profile"
    },
});