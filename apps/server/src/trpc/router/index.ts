import { publicProcedure, router } from '../trpc';
import { expensesRouter } from './expenses';
import { groupParticipantsRouter } from './groupParticipants';
import { groupsRouter } from './groups';
import { imagesRouter } from './images';
import { messagesRouter } from './messages';
import { profilesRouter } from './profiles';

export const appRouter = router({
    ping: publicProcedure.query(async (opts) => {
        return 'OK';
    }),
    profiles: profilesRouter,
    groups: groupsRouter,
    groupParticipants: groupParticipantsRouter,
    images: imagesRouter,
    messages: messagesRouter,
    expenses: expensesRouter,
});
