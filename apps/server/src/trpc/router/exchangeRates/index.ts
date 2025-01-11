import { prisma } from '../../../services/prisma';
import { authProcedure, router } from '../../trpc';

export const exchangeRatesRouter = router({
    latest: authProcedure.query(async () => {
        const rates = await prisma.exchangeRates.findFirst({
            where: {},
            orderBy: {
                createdAt: 'desc',
            },
        });

        return rates;
    }),
});
