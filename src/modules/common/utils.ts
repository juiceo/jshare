import { ById } from './types';

export const byId = <T extends { id: string }>(data: T[]): ById<T> => {
	return data.reduce((result, item) => {
		result[item.id] = item;
		return result;
	}, {} as ById<T>);
};
