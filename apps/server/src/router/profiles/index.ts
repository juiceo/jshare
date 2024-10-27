import { TsRestResponseError } from '@ts-rest/core';
import type { initServer } from '@ts-rest/express';

import { ApiErrorReason, contract } from '@jshare/api-contract';

import { prisma } from '../../services/prisma';

export const profiles = (s: ReturnType<typeof initServer>) =>
    s.router(contract.profiles, {
        create: async ({ req, body }) => {
            const profile = await prisma.profile.create({
                data: {
                    userId: req.userId,
                    firstName: body.firstName,
                    lastName: body.lastName,
                    email: body.email,
                },
            });

            return {
                status: 201,
                body: profile,
            };
        },
        get: async ({ req }) => {
            const profile = await prisma.profile.findUnique({
                where: {
                    userId: req.userId,
                },
            });

            if (!profile) {
                throw new TsRestResponseError(contract.profiles.get, {
                    status: 404,
                    body: { reason: ApiErrorReason.NOT_FOUND, message: 'Profile not found' },
                });
            }

            return {
                status: 200,
                body: profile,
            };
        },
        update: async ({ req, body }) => {
            const updatedProfile = await prisma.profile
                .update({
                    where: {
                        userId: req.userId,
                    },
                    data: {
                        firstName: body.firstName,
                        lastName: body.lastName,
                    },
                })
                .catch((err: any) => {
                    console.error('Error updating profile: ' + err.message);
                    throw new TsRestResponseError(contract.profiles.update, {
                        status: 404,
                        body: { reason: ApiErrorReason.NOT_FOUND, message: 'Profile not found' },
                    });
                });

            return {
                status: 200,
                body: updatedProfile,
            };
        },
    });
