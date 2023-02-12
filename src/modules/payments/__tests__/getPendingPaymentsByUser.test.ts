import { sumBy } from 'lodash';

import { getPendingPaymentsByUser } from '../utils';

describe('getPendingPaymentsByUser', () => {
	it('should correctly calculate the pending payment amounts', () => {
		const result = getPendingPaymentsByUser({
			luukas: {
				balance: 285659,
				paid: 0,
				owed: 0,
			},
			petrus: {
				balance: -40849,
				paid: 0,
				owed: 0,
			},
			martta: {
				balance: -59571,
				paid: 0,
				owed: 0,
			},
			juuso: {
				balance: -63711,
				paid: 0,
				owed: 0,
			},
			santtu: {
				balance: -56498,
				paid: 0,
				owed: 0,
			},
			jan: {
				balance: -20140,
				paid: 0,
				owed: 0,
			},
			axel: {
				balance: -23860,
				paid: 0,
				owed: 0,
			},
			ellen: {
				balance: -445,
				paid: 0,
				owed: 0,
			},
			juhis: {
				balance: -25486,
				paid: 0,
				owed: 0,
			},
			olli: {
				balance: 4901,
				paid: 0,
				owed: 0,
			},
		});

		expect(result.length).toBe(9);

		const total = sumBy(result, (p) => p.amount);
		expect(total).toEqual(290560);

		expect(result.find((p) => p.from === 'juuso')?.amount).toBe(63711);
		expect(result.find((p) => p.from === 'martta')?.amount).toBe(59571);
		expect(result.find((p) => p.from === 'santtu')?.amount).toBe(56498);
		expect(result.find((p) => p.from === 'petrus')?.amount).toBe(40849);
		expect(result.find((p) => p.from === 'juhis')?.amount).toBe(25486);
		expect(result.find((p) => p.from === 'ellen')?.amount).toBe(445);
		expect(result.find((p) => p.from === 'axel')?.amount).toBe(23860);
		expect(result.find((p) => p.from === 'jan' && p.to === 'luukas')?.amount).toBe(15684);
		expect(result.find((p) => p.from === 'jan' && p.to === 'olli')?.amount).toBe(4456);
	});
});
