import * as trpcExpress from '@trpc/server/adapters/express';
import bodyParser from 'body-parser';
import express from 'express';

import { getEnv } from '@jshare/env';

import { appRouter } from './trpc/router';
import { createContext } from './trpc/trpc';

const PORT = getEnv('PORT', { required: true });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    })
);

app.listen(PORT, () => {
    console.log(`JShare server listening on port ${PORT}`);
});

export type AppRouter = typeof appRouter;
