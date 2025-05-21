import { z } from 'zod';

import { createRouter as createZenstackRouter } from '../generated/routers';
import { procedure, router } from '../trpc';
import { authRouter } from './auth';
import { exchangeRatesRouter } from './exchangeRates';
import { groupParticipantsRouter } from './groupParticipants';
import { groupsRouter } from './groups';
import { imagesRouter } from './images';
import { modelsRouter } from './models';
import { profilesRouter } from './profiles';

export const appRouter = router({
    ping: procedure.query(async (opts) => {
        return 'OK';
    }),
    sleep: procedure.input(z.object({ ms: z.number() })).query(async (opts) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return 'OK';
    }),
    throw: procedure.input(z.object({ message: z.string() })).query(async (opts) => {
        throw new Error(opts.input.message);
    }),
    profiles: profilesRouter,
    groups: groupsRouter,
    groupParticipants: groupParticipantsRouter,
    images: imagesRouter,
    exchangeRates: exchangeRatesRouter,
    auth: authRouter,
    models: modelsRouter,
    z: createZenstackRouter(),
});
