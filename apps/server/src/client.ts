import type { appRouter } from './trpc/router';

export type { CreateTRPCReact } from '@trpc/react-query';
export type { CreateTRPCReactOptions } from '@trpc/react-query/shared';
export type { AnyTRPCRouter as AnyRouter } from '@trpc/server';
export type { ClientType } from './trpc/generated/client/react';

export type { DeepOverrideAtPath } from './trpc/generated/client/utils';

export type AppRouter = typeof appRouter;
