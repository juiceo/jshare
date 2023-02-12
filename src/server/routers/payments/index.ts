import { createPayment } from '@/server/routers/payments/create';
import { listByGroupId } from '@/server/routers/payments/list';
import * as trpc from '@/server/trpc';

export const paymentsRouter = trpc.router({
	create: createPayment,
	listByGroupId,
});
