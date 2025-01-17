import { type EnhancementContext, type EnhancementOptions } from '@zenstackhq/runtime';
import { Prisma as _Prisma, PrismaClient as _PrismaClient } from './prisma';
import type { InternalArgs, DynamicClientExtensionThis } from './prisma/runtime/library';
import type * as _P from './.logical-prisma-client/index-fixed';
import type { Prisma, PrismaClient } from './.logical-prisma-client/index-fixed';
export type { PrismaClient };
export declare namespace auth {
    type WithRequired<T, K extends keyof T> = T & {
        [P in K]-?: T[P];
    };
    export type Profile = WithRequired<Partial<_P.Profile>, 'userId'> & Record<string, unknown>;
    export {};
}
export declare function enhance<ExtArgs extends Record<string, any> & InternalArgs>(prisma: _PrismaClient<any, any, ExtArgs>, context?: EnhancementContext<auth.Profile>, options?: EnhancementOptions): PrismaClient;
export declare function enhance<ExtArgs extends Record<string, any> & InternalArgs, ClientOptions>(prisma: DynamicClientExtensionThis<_Prisma.TypeMap<ExtArgs>, _Prisma.TypeMapCb, ExtArgs, ClientOptions>, context?: EnhancementContext<auth.Profile>, options?: EnhancementOptions): DynamicClientExtensionThis<Prisma.TypeMap<ExtArgs>, Prisma.TypeMapCb, ExtArgs, ClientOptions>;
