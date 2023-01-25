import React from 'react';

import { Avatar, Link } from '@chakra-ui/react';
import { Session } from 'next-auth';

import { Routes } from '@/routing';

type Props = {
	session: Session;
};

const SignedInUser: React.FC<Props> = (props) => {
	const { session } = props;

	return (
		<Link href={Routes.USER}>
			<Avatar size="md" src={session.user?.image ?? ''} />
		</Link>
	);
};

export default SignedInUser;
