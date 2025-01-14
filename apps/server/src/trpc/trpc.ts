import { initTRPC, TRPCError } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import jwt from 'jsonwebtoken';
import superjson from 'superjson';

import { getEnv } from '@jshare/common';

import { ACL } from './acl';

const jwtSecret = getEnv('JWT_SECRET', { required: true });

export const createContext = async (opts: trpcExpress.CreateExpressContextOptions) => {
    return {
        req: opts.req,
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

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;

export const authProcedure = t.procedure.use(async function isAuthed(opts) {
    const { ctx } = opts;
    const header = ctx.req.headers['authorization'];

    if (!header) {
        throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Authorization header missing' });
    }

    try {
        const decoded = jwt.verify(header, jwtSecret);
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
});
