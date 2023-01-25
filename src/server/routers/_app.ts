/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc';
import { expenseRouter } from './expenses';
import { groupRouter } from './groups';
import { messageRouter } from './messages';
import { usersRouter } from './users';

export const appRouter = router({
	healthcheck: publicProcedure.query(() => 'OK'),
	groups: groupRouter,
	messages: messageRouter,
	expenses: expenseRouter,
	users: usersRouter,
});

export type AppRouter = typeof appRouter;
