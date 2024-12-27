import type { DB } from '@jshare/types';

export const getUserFullName = (profile: DB.Profile) => {
    return [profile.firstName, profile.lastName].filter(Boolean).join(' ');
};

export const getUserShortName = (profile: DB.Profile) => {
    return [profile.firstName, profile.lastName ? profile.lastName.charAt(0).concat('.') : null]
        .filter(Boolean)
        .join(' ');
};
