import { type EnhancementContext, type EnhancementOptions, type AuthUser } from '@zenstackhq/runtime';
import { Prisma as _Prisma, PrismaClient as _PrismaClient } from './prisma';
import type { InternalArgs, DynamicClientExtensionThis } from './prisma/runtime/library';
import type { Prisma, PrismaClient } from './.logical-prisma-client/index-fixed';
export type { PrismaClient };
export declare function enhance<ExtArgs extends Record<string, any> & InternalArgs>(prisma: _PrismaClient<any, any, ExtArgs>, context?: EnhancementContext<AuthUser>, options?: EnhancementOptions): PrismaClient;
export declare function enhance<ExtArgs extends Record<string, any> & InternalArgs, ClientOptions>(prisma: DynamicClientExtensionThis<_Prisma.TypeMap<ExtArgs>, _Prisma.TypeMapCb, ExtArgs, ClientOptions>, context?: EnhancementContext<AuthUser>, options?: EnhancementOptions): DynamicClientExtensionThis<Prisma.TypeMap<ExtArgs>, Prisma.TypeMapCb, ExtArgs, ClientOptions>;
