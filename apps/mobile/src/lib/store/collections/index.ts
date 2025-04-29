import { GroupsStore } from '~/lib/store/collections/groups';
import { ImagesStore } from '~/lib/store/collections/images';
import { ProfilesStore } from '~/lib/store/collections/profiles';

export const Store = {
    profiles: ProfilesStore,
    images: ImagesStore,
    groups: GroupsStore,
};
