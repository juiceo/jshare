import type { DB } from '@jshare/db';

export const getUserFullName = (profile: Pick<DB.Profile, 'firstName' | 'lastName'>) => {
    return [profile.firstName, profile.lastName].filter(Boolean).join(' ');
};

export const getUserShortName = (profile: Pick<DB.Profile, 'firstName' | 'lastName'>) => {
    return [profile.firstName, profile.lastName ? profile.lastName.charAt(0).concat('.') : null]
        .filter(Boolean)
        .join(' ');
};

export const getUserDefaultAvatarUrl = (profile: Pick<DB.Profile, 'firstName' | 'lastName'>) => {
    return getAvatarUrl({ name: getUserFullName(profile) });
};

export const getAvatarUrl = (args: { name: string }) => {
    const params = new URLSearchParams({
        name: args.name,
        background: 'random',
        bold: 'true',
        size: '128',
    });
    return `https://ui-avatars.com/api/?${params.toString()}`;
};
