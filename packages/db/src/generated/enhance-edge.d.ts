import { type EnhancementContext, type EnhancementOptions } from '@zenstackhq/runtime';
import { Prisma as _Prisma, PrismaClient as _PrismaClient } from './prisma/edge';
import type { InternalArgs, DynamicClientExtensionThis } from './prisma/runtime/library';
import type * as _P from './.logical-prisma-client';
import type { Prisma, PrismaClient } from './.logical-prisma-client';
export type { PrismaClient };
export declare namespace auth {
    type WithRequired<T, K extends keyof T> = T & {
        [P in K]-?: T[P];
    };
    export type Profile = WithRequired<Partial<_P.Profile>, 'id'> & Record<string, unknown>;
    export {};
}
export declare function enhance<ExtArgs extends Record<string, any> & InternalArgs>(prisma: _PrismaClient<any, any, ExtArgs>, context?: EnhancementContext<auth.Profile>, options?: EnhancementOptions): PrismaClient;
export declare function enhance<ExtArgs extends Record<string, any> & InternalArgs, ClientOptions>(prisma: DynamicClientExtensionThis<_Prisma.TypeMap<ExtArgs>, _Prisma.TypeMapCb, ExtArgs, ClientOptions>, context?: EnhancementContext<auth.Profile>, options?: EnhancementOptions): DynamicClientExtensionThis<Prisma.TypeMap<ExtArgs>, Prisma.TypeMapCb, ExtArgs, ClientOptions>;
/**
 * Infers the type of PrismaClient with ZenStack's enhancements.
 * @example
 * type EnhancedPrismaClient = Enhanced<typeof prisma>;
 */
export declare type Enhanced<Client> = Client extends _PrismaClient<infer _ClientOptions, infer _U, infer ExtArgs> ? PrismaClient : Client extends DynamicClientExtensionThis<infer _TypeMap, infer _TypeMapCb, infer ExtArgs, infer ClientOptions> ? DynamicClientExtensionThis<Prisma.TypeMap<ExtArgs>, Prisma.TypeMapCb, ExtArgs, ClientOptions> : Client;
