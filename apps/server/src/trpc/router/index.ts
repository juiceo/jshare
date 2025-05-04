import { z } from 'zod';

import { createRouter as createZenstackRouter } from '../generated/routers';
import { procedure, router } from '../trpc';
import { authRouter } from './auth';
import { balancesRouter } from './balances';
import { exchangeRatesRouter } from './exchangeRates';
import { expensesRouter } from './expenses';
import { groupParticipantsRouter } from './groupParticipants';
import { groupsRouter } from './groups';
import { imagesRouter } from './images';
import { messagesRouter } from './messages';
import { modelsRouter } from './models';
import { modelsRouter_LEGACY } from './models_LEGACY';
import { paymentsRouter } from './payments';
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
    messages: messagesRouter,
    expenses: expensesRouter,
    payments: paymentsRouter,
    balances: balancesRouter,
    exchangeRates: exchangeRatesRouter,
    auth: authRouter,
    models_LEGACY: modelsRouter_LEGACY,
    models: modelsRouter,
    z: createZenstackRouter(),
});
