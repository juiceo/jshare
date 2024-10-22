import { init_experimental } from '@instantdb/react-native';

import { graph } from '@jshare/db';

const APP_ID = 'ef6c50f7-d5d6-4c8d-a4ef-1dbc1f1cf7c4';

export const db = init_experimental({ appId: APP_ID, schema: graph });
