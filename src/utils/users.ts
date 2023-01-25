import { User } from '@prisma/client';

export const getUserShortName = (user: User | null) => {
	if (!user) return '';

	if (!!user.firstName && !!user.lastName) {
		return `${user.firstName} ${user.lastName[0]}`;
	}

	const nameParts = user.name?.split(' ') ?? [];

	if (nameParts.length > 1) {
		return `${nameParts[0]} ${nameParts[1]?.[0]}`;
	}

	return user.firstName || user.name?.split(' ')[0];
};

export const getUserFullName = (user: User | null) => {
	if (!user) return '';
	const name = [user.firstName, user.lastName]
		.filter((part) => !!part)
		.join(' ');

	return name || user.name || 'Anonymous';
};
