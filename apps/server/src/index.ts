import * as trpcExpress from '@trpc/server/adapters/express';
import bodyParser from 'body-parser';
import express from 'express';

import { getEnv } from '@jshare/common';

import { db } from './services/db';
import { initTriggers } from './triggers';
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

app.get('/health-check', async (_, res) => {
    try {
        const profileCount = await db.profile.count();
        res.status(200).send('OK: ' + profileCount);
    } catch (err: any) {
        res.status(500).send('Error: ' + err.message);
    }
});

app.listen(PORT, () => {
    console.log(`JShare server listening on port ${PORT}`);
});

initTriggers();

export type AppRouter = typeof appRouter;
