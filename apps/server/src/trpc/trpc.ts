import { initTRPC, TRPCError } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
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
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;

export const authProcedure = t.procedure
    .use(async function isAuthed(opts) {
        const { ctx } = opts;
        const header = ctx.req.headers['authorization'];

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

            return opts.next({
                ctx: {
                    userId: decoded.sub,
                    acl: new ACL(decoded.sub),
                },
            });
        } catch (err: any) {
            console.error('Authorization failed: ' + err.message);
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message: 'Invalid Authorization header',
            });
        }
    })
    .use(async (opts) => {
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
            console.log(`[OK ${meta.durationMs}ms] ${meta.type} ${meta.path}`, {
                input: meta.input,
            });
        } else {
            console.error(`[ERR ${meta.durationMs}ms] ${meta.type} ${meta.path}`, {
                input: meta.input,
            });
        }

        return result;
    });

/**
 * Required for Zenstack generated router
 */
export const procedure = t.procedure;
export const createTRPCRouter = t.router;
