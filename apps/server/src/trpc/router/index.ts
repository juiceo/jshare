import { publicProcedure, router } from '../trpc';
import { groupsRouter } from './groups';
import { profilesRouter } from './profiles';

export const appRouter = router({
    ping: publicProcedure.query(async (opts) => {
        return 'OK';
    }),
    profiles: profilesRouter,
    groups: groupsRouter,
});
