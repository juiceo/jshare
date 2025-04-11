import { z } from 'zod';

import { zModelName } from '@jshare/sync';

export const zSyncPullInput = z.object({
    model: zModelName,
    since: z.number().optional(),
});

export const zSyncPushInput = z.object({
    model: zModelName,
    changes: z.object({
        added: z.array(z.any()),
        modified: z.array(z.any()),
        removed: z.array(z.any()),
    }),
});

export const zFindByIdInput = z.object({
    model: zModelName,
    id: z.string(),
});
