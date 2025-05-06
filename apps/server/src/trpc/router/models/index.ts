import { router } from '../../trpc';
import { expensesRouter } from './expenses';
import { groupsRouter } from './groups';
import { messagesRouter } from './messages';
import { paymentsRouter } from './payments';
import { profilesRouter } from './profiles';

export const modelsRouter = router({
    profiles: profilesRouter,
    groups: groupsRouter,
    messages: messagesRouter,
    expenses: expensesRouter,
    payments: paymentsRouter,
});
