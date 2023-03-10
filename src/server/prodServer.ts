import { applyWSSHandler } from '@trpc/server/adapters/ws';
import http from 'http';
import next from 'next';
import { join } from 'path';
import { parse } from 'url';
import ws from 'ws';

import { createContext } from './context';
import { appRouter } from './routers/_app';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = http.createServer((req, res) => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const parsedUrl = parse(req.url!, true);
		const { pathname } = parsedUrl;

		if (
			!!pathname &&
			(pathname === '/sw.js' ||
				/^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname))
		) {
			const filePath = join(__dirname, '.next', pathname);
			app.serveStatic(req, res, filePath);
		} else {
			handle(req, res, parsedUrl);
		}
	});
	const wss = new ws.Server({ server });
	const handler = applyWSSHandler({
		wss,
		router: appRouter,
		createContext: createContext as any,
	});

	process.on('SIGTERM', () => {
		console.log('SIGTERM');
		handler.broadcastReconnectNotification();
	});
	server.listen(port);

	// tslint:disable-next-line:no-console
	console.log(
		`> Server listening at http://localhost:${port} as ${
			dev ? 'development' : process.env.NODE_ENV
		}`,
	);
});
