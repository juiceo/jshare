import { getLatestExchangeRates } from '../../../util/exchangeRates';
import { authProcedure, router } from '../../trpc';

export const exchangeRatesRouter = router({
    latest: authProcedure.query(async () => {
        return getLatestExchangeRates();
    }),
});
