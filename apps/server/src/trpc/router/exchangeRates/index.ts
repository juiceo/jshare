import { db } from '../../../services/db';
import { authProcedure, router } from '../../trpc';

export const exchangeRatesRouter = router({
    latest: authProcedure.query(async () => {
        const rates = await db.exchangeRates.findFirst({
            where: {},
            orderBy: {
                createdAt: 'desc',
            },
        });

        return rates;
    }),
});
