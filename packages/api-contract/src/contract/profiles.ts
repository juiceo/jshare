// contract.ts

import { initContract } from '@ts-rest/core';
import { z } from 'zod';

import { Profile } from '@jshare/prisma';

const c = initContract();

export const profiles = c.router({
    get: {
        method: 'GET',
        path: '/profiles',
        responses: {
            200: c.type<Profile>(),
        },
        summary: 'Get your own profile',
    },
    create: {
        method: 'POST',
        path: '/profiles',
        body: z.object({
            firstName: z.string(),
            lastName: z.string(),
            email: z.string(),
        }),
        responses: {
            201: c.type<Profile>(),
        },
        summary: 'Create a profile',
    },
    update: {
        method: 'PATCH',
        path: '/profiles',
        body: z.object({
            firstName: z.string().optional(),
            lastName: z.string().optional(),
        }),
        responses: {
            200: c.type<Profile>(),
        },
        summary: 'Update your own profile',
    },
});
