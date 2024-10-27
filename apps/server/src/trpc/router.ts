import { publicProcedure, router } from './trpc';

export const appRouter = router({
    test: publicProcedure.query(async () => {
        return {
            message: 'Hello world',
        };
    }),
});
