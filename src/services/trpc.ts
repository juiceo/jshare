import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { createWSClient, wsLink } from '@trpc/client/links/wsLink';
import { createTRPCNext } from '@trpc/next';
import type { inferProcedureOutput } from '@trpc/server';
import { NextPageContext } from 'next';
import getConfig from 'next/config';
import superjson from 'superjson';

import type { AppRouter } from '@/server/routers/_app';

const { publicRuntimeConfig } = getConfig();

const { APP_URL, WS_URL } = publicRuntimeConfig;

function getEndingLink(ctx: NextPageContext | undefined) {
	if (typeof window === 'undefined') {
		return httpBatchLink({
			url: `${APP_URL}/api/trpc`,
			headers() {
				if (ctx?.req) {
					return {
						...ctx.req.headers,
						'x-ssr': '1',
					};
				}
				return {};
			},
		});
	}
	const client = createWSClient({
		url: WS_URL,
	});
	return wsLink<AppRouter>({
		client,
	});
}

export const trpc = createTRPCNext<AppRouter>({
	config({ ctx }) {
		return {
			links: [getEndingLink(ctx)],
			transformer: superjson,
			queryClientConfig: {
				defaultOptions: { queries: { staleTime: 60 } },
			},
		};
	},
	ssr: false,
});

/**
 * This is a helper method to infer the output of a query resolver
 * @example type HelloOutput = inferQueryOutput<'hello'>
 */
export type inferQueryOutput<TRouteKey extends keyof AppRouter['_def']['queries']> = inferProcedureOutput<
	AppRouter['_def']['queries'][TRouteKey]
>;
