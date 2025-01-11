import type { DB } from '@jshare/types';

export const getUserFullName = (profile: Pick<DB.Profile, 'firstName' | 'lastName'>) => {
    return [profile.firstName, profile.lastName].filter(Boolean).join(' ');
};

export const getUserShortName = (profile: Pick<DB.Profile, 'firstName' | 'lastName'>) => {
    return [profile.firstName, profile.lastName ? profile.lastName.charAt(0).concat('.') : null]
        .filter(Boolean)
        .join(' ');
};

export const getUserDefaultAvatarUrl = (profile: Pick<DB.Profile, 'firstName' | 'lastName'>) => {
    const params = new URLSearchParams({
        name: getUserFullName(profile),
        background: 'random',
    });
    return `https://ui-avatars.com/api/?${params.toString()}`;
};
