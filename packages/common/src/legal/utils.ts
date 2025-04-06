import type { DB } from '@jshare/db';

import { PRIVACY_POLICY_UPDATED_YYYYMMDD } from './constants';

export enum PrivacyPolicyAcceptanceStatus {
    NONE = 'none',
    OUTDATED = 'outdated',
    ACCEPTED = 'accepted',
}

export const getPrivacyPolicyStatus = (user: DB.Profile): PrivacyPolicyAcceptanceStatus => {
    const acceptedDate = user.privacyPolicyAcceptedAt;
    if (!acceptedDate) return PrivacyPolicyAcceptanceStatus.NONE;

    if (acceptedDate.toISOString() < PRIVACY_POLICY_UPDATED_YYYYMMDD) {
        return PrivacyPolicyAcceptanceStatus.OUTDATED;
    }

    return PrivacyPolicyAcceptanceStatus.ACCEPTED;
};
