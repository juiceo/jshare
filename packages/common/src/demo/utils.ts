import { DEMO_USER_EMAIL, DEMO_USER_ID } from './constants';

export const isDemoUserId = (userId: string) => userId === DEMO_USER_ID;
export const isDemoUserEmail = (email: string) => email === DEMO_USER_EMAIL;
