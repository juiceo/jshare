import { createExpressEndpoints } from '@ts-rest/express';
import express from 'express';
import bodyParser from 'body-parser';
import { contract } from '@jshare/api-contract';
import { router } from './router';

const PORT = process.env.PORT;

if (!PORT) {
    throw new Error("[@jshare/server] Missing required environment variable: PORT");
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

createExpressEndpoints(contract, router, app);

app.listen(PORT, () => {
    console.log(`JShare server listening on port ${PORT}`);
});