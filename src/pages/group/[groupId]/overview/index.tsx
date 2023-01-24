import { useRouter } from 'next/router';

import Redirect from '@/components/Redirect';
import { Routes } from '@/routing';

const OverviewPageRouter = () => {
	const { groupId } = useRouter().query;
	return <Redirect to={Routes.OverviewTab(groupId, 'balances')} />;
};

export default OverviewPageRouter;
