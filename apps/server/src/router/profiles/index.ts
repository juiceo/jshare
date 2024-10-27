import { TsRestResponseError } from '@ts-rest/core';
import type { initServer } from '@ts-rest/express';

import { ApiErrorReason, contract } from '@jshare/api-contract';

export const profiles = (s: ReturnType<typeof initServer>) =>
    s.router(contract.profiles, {
        create: async () => {
            throw new TsRestResponseError(contract.profiles.create, {
                status: 500,
                body: { reason: ApiErrorReason.INTERNAL, message: 'Not implemented' },
            });
        },
        get: async () => {
            throw new TsRestResponseError(contract.profiles.get, {
                status: 500,
                body: { reason: ApiErrorReason.INTERNAL, message: 'Not implemented' },
            });
        },
    });
