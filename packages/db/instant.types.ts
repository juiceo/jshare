import { type InstantEntity, type InstantSchemaDatabase } from '@instantdb/core';

import { graph } from './instant.schema';

export type User = InstantEntity<InstantSchemaDatabase<typeof graph>, '$users'>;
export type Profile = InstantEntity<InstantSchemaDatabase<typeof graph>, 'profiles'>;
