import { type InstantEntity, type InstantSchemaDatabase } from '@instantdb/core';

import schema from './instant.schema';

export type User = InstantEntity<InstantSchemaDatabase<typeof schema>, '$users'>;
export type Profile = InstantEntity<InstantSchemaDatabase<typeof schema>, 'profiles'>;