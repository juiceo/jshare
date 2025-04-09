import { createUseReactivityHook } from '@signaldb/react';
import { effect } from '@maverick-js/signals';

export const useLocalDB = createUseReactivityHook(effect);
