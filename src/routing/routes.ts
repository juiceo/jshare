import { OverviewTabId, RouteArgument } from './types';
import { buildRoute } from './utils';

export const ROOT = '/';

export const GROUP = '/group/:groupId';
export const CREATE_GROUP = '/group';

export const INVITE = '/invite/:inviteId';

export const EXPENSE = '/group/:groupId/expense/:expenseId';
export const CREATE_EXPENSE = '/group/:groupId/expense';
export const OVERVIEW = '/group/:groupId/overview';
export const OVERVIEW_TAB = '/group/:groupId/overview/:tabId';

export const USER = '/user';

export const Group = (groupId: RouteArgument) => buildRoute(GROUP, { groupId });
export const Invite = (inviteId: RouteArgument) =>
	buildRoute(INVITE, { inviteId });
export const Expense = (groupId: RouteArgument, expenseId: string) =>
	buildRoute(EXPENSE, { groupId, expenseId });
export const CreateExpense = (groupId: RouteArgument) =>
	buildRoute(CREATE_EXPENSE, { groupId });

export const OverviewTab = (groupId: RouteArgument, tabId: OverviewTabId) =>
	buildRoute(OVERVIEW_TAB, { groupId, tabId });
