import { RouteArgument } from './types';

export const buildRoute = (
	path: string,
	args?: { [argument: string]: RouteArgument },
) => {
	return Object.entries(args ?? {}).reduce((route, [arg, value]) => {
		return route.replace(`:${arg}`, value?.toString() ?? '');
	}, path);
};
