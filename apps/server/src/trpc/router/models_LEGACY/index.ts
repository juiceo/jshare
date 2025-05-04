import { router } from '../../trpc';
import { groupsRouter } from './groups';
import { imagesRouter } from './images';
import { profilesRouter } from './profiles';

export const modelsRouter_LEGACY = router({
    profiles: profilesRouter,
    images: imagesRouter,
    groups: groupsRouter,
});
