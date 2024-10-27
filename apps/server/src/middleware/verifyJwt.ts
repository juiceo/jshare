// middleware/authMiddleware.js
import { TsRestResponseError } from '@ts-rest/core';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { ApiErrorReason, contract } from '@jshare/api-contract';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('Missing required environment variable: JWT_SECRET');
}

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        throw new TsRestResponseError(contract, {
            status: 401,
            body: { reason: ApiErrorReason.UNAUTHORIZED, message: 'Missing Authorization header' },
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (typeof decoded === 'string') {
            throw new Error('Decoded JWT type was string, aborting...');
        }
        if (!decoded.sub) {
            throw new Error('Decoded JWT payload missing sub, aborting...');
        }

        req.userId = decoded.sub;
        next();
    } catch (err: any) {
        console.error('Authorization failed: ' + err.message);
        throw new TsRestResponseError(contract, {
            status: 401,
            body: { reason: ApiErrorReason.UNAUTHORIZED, message: 'Invalid Authorization header' },
        });
    }
};
