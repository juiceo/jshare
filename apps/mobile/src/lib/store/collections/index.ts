import { GroupsStore } from '~/lib/store/collections/groups';
import { ImagesStore } from '~/lib/store/collections/images';
import { ProfilesStore } from '~/lib/store/collections/profiles';
import type { DocumentStore } from '~/lib/store/DocumentStore';

export const Store = {
    profiles: ProfilesStore,
    images: ImagesStore,
    groups: GroupsStore,
} satisfies Record<string, DocumentStore<any, any, any>>;

export const storeIsReady = async () => {
    await Promise.all(Object.values(Store).map((store) => store.isReady));
};

export const resetStore = () => {
    Object.values(Store).forEach((store) => store.reset());
};
