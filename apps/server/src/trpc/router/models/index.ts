import { router } from '../../trpc';
import { imagesRouter } from './images';
import { profilesRouter } from './profiles';

export const modelsRouter = router({
    profiles: profilesRouter,
    images: imagesRouter,
});
