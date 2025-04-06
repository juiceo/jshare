import { TRPCError } from '@trpc/server';

import { DEMO_USER_EMAIL, DEMO_USER_ID, DEMO_USER_PASSWORD } from '@jshare/common';

import { supabase } from '../../../services/supabase';
import { publicProcedure, router } from '../../trpc';

export const authRouter = router({
    createDemoUser: publicProcedure.mutation(async () => {
        console.log('createDemoUser');
        const existingDemoUser = await supabase.auth.admin.getUserById(DEMO_USER_ID);
        if (existingDemoUser.data.user) {
            console.log('createDemoUser: user exists', existingDemoUser.data.user);
            return existingDemoUser.data.user;
        }

        console.log('createDemoUser: creating new demo user', {
            email: DEMO_USER_EMAIL,
            email_confirm: true,
            password: DEMO_USER_PASSWORD,
            id: DEMO_USER_ID,
        });
        const newDemoUser = await supabase.auth.admin.createUser({
            email: DEMO_USER_EMAIL,
            email_confirm: true,
            password: DEMO_USER_PASSWORD,
            id: DEMO_USER_ID,
        });

        if (newDemoUser.error) {
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Failed to create demo user',
            });
        }

        console.log('created new demo user', newDemoUser.data.user);

        return newDemoUser.data.user;
    }),
});
