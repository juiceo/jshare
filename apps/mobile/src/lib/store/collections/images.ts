import type { DB } from '@jshare/db';

import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const ImagesStore = new DocumentStore({
    name: 'images',
    api: {
        findById: async (ids: string[]) => {
            return trpcClient.models.images.findById.query(ids);
        },
        findWhere: async (where: Partial<DB.Image>) => {
            return trpcClient.models.images.findWhere.query(where);
        },
    },
});
