import { initTRPC, TRPCError } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import type { MiddlewareFunction } from '@trpc/server/unstable-core-do-not-import';
import type { Request } from 'express';
import jwt from 'jsonwebtoken';
import { get } from 'lodash';
import superjson from 'superjson';

import { getDbForUserId } from '../services/db';
import { ACL } from './acl';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is missing');
}

export const createContext = async (opts: trpcExpress.CreateExpressContextOptions) => {
    let userId;
    try {
        userId = getUserIdFromRequest(opts.req);
    } catch {}

    return {
        req: opts.req,
        userId,
        prisma: userId ? await getDbForUserId(userId) : undefined,
    };
};
type Context = Awaited<ReturnType<typeof createContext>>;

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create({
    transformer: superjson,
});

const getUserIdFromRequest = (req: Request) => {
    const header = req.headers['authorization'];

    if (!header) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Authorization header missing' });
    }

    try {
        const decoded = jwt.verify(header, JWT_SECRET);
        if (typeof decoded === 'string') {
            throw new Error('Decoded JWT type was string, aborting...');
        }
        if (!decoded.sub) {
            throw new Error('Decoded JWT payload missing sub, aborting...');
        }

        return decoded.sub;
    } catch (err: any) {
        console.error('Authorization failed: ' + err.message);
        throw new TRPCError({
            code: 'UNAUTHORIZED',
            message: 'Invalid Authorization header',
        });
    }
};

const loggingMiddleware: MiddlewareFunction<Context, any, any, any, any> = async (opts) => {
    const start = Date.now();

    const result = await opts.next();

    const durationMs = Date.now() - start;
    const meta = {
        path: opts.path,
        type: opts.type,
        durationMs,
        input:
            opts.type === 'query'
                ? JSON.stringify(get(result, 'ctx.req.query.input'), null, 4)
                : JSON.stringify(get(result, 'ctx.req.body[0].json'), null, 4),
    };

    if (result.ok) {
        console.log(`[OK ${meta.durationMs}ms] ${meta.type} ${meta.path}`);
    } else {
        console.error(result.error);
        console.error(`[ERR ${meta.durationMs}ms] ${meta.type} ${meta.path}`, {
            input: meta.input,
        });
    }

    return result;
};

export const authProcedure = t.procedure
    .use(async function isAuthed(opts) {
        const { ctx } = opts;
        const { userId } = ctx;

        if (!userId) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'This endpoint requires authorization',
            });
        }

        return opts.next({
            ctx: {
                userId,
                acl: new ACL(userId),
            },
        });
    })
    .use(loggingMiddleware);

/**
 * Required for Zenstack generated router
 */
export const createTRPCRouter = t.router;
export const procedure = t.procedure.use(loggingMiddleware);

export const router = t.router;
