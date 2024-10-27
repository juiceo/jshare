import * as trpcExpress from '@trpc/server/adapters/express';
import bodyParser from 'body-parser';
import express from 'express';

import { appRouter } from './trpc/router';
import { createContext } from './trpc/trpc';

// created for each request

const PORT = process.env.PORT;

if (!PORT) {
    throw new Error('Missing required environment variable: PORT');
}

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
