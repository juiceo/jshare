import { DocumentStore } from '~/lib/store/DocumentStore';
import { trpcClient } from '~/lib/trpc';

export const ImagesStore = new DocumentStore({
    name: 'images',
    api: {
        findById: async (ids: string[]) => {
            return trpcClient.models.images.findById.query({ ids });
        },
    },
    staleTime: 60_000 * 60, // 1 hour
});
