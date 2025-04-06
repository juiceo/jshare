import type { DB } from '@jshare/db';

import { PRIVACY_POLICY_UPDATED_YYYYMMDD, TERMS_OF_SERVICE_UPDATED_YYYYMMDD } from './constants';

export enum TermsAcceptanceStatus {
    NONE = 'none',
    OUTDATED = 'outdated',
    ACCEPTED = 'accepted',
}

export const getTermsAcceptanceStatus = (user: DB.Profile): TermsAcceptanceStatus => {
    const acceptedDate = user.termsAcceptedAt;
    if (!acceptedDate) return TermsAcceptanceStatus.NONE;

    if (
        acceptedDate.toISOString() < PRIVACY_POLICY_UPDATED_YYYYMMDD ||
        acceptedDate.toISOString() < TERMS_OF_SERVICE_UPDATED_YYYYMMDD
    ) {
        return TermsAcceptanceStatus.OUTDATED;
    }

    return TermsAcceptanceStatus.ACCEPTED;
};
