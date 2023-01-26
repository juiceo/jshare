import { User } from '@prisma/client';

export const getUserShortName = (user: User) => {
	if (!!user.firstName && !!user.lastName) {
		return `${user.firstName} ${user.lastName[0]}`;
	}

	const nameParts = user.name?.split(' ') ?? [];

	if (nameParts.length > 1) {
		return `${nameParts[0]} ${nameParts[1]?.[0]}`;
	}

	return user.firstName || user.name?.split(' ')[0];
};

export const getUserFullName = (user: User) => {
	const name = [user.firstName, user.lastName]
		.filter((part) => !!part)
		.join(' ');

	return name || user.name || 'Unknown';
};

export const getUserDisplayName = (
	user: User | null,
	variant: 'short' | 'full' = 'short',
) => {
	if (!user) return 'Unknown';

	switch (variant) {
		case 'short':
			return getUserShortName(user);
		case 'full':
			return getUserFullName(user);
	}
};
