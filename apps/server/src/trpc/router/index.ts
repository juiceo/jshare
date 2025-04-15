import { z } from 'zod';

import { publicProcedure, router } from '../trpc';
import { authRouter } from './auth';
import { balancesRouter } from './balances';
import { exchangeRatesRouter } from './exchangeRates';
import { expensesRouter } from './expenses';
import { groupParticipantsRouter } from './groupParticipants';
import { groupsRouter } from './groups';
import { imagesRouter } from './images';
import { messagesRouter } from './messages';
import { modelsRouter } from './models';
import { paymentsRouter } from './payments';
import { profilesRouter } from './profiles';

export const appRouter = router({
    ping: publicProcedure.query(async (opts) => {
        return 'OK';
    }),
    sleep: publicProcedure.input(z.object({ ms: z.number() })).query(async (opts) => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        return 'OK';
    }),
    throw: publicProcedure.input(z.object({ message: z.string() })).query(async (opts) => {
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
    models: modelsRouter,
});
