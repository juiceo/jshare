import { TRPCError } from '@trpc/server';

import { DEMO_USER_EMAIL, DEMO_USER_ID, DEMO_USER_PASSWORD } from '@jshare/common';

import { supabase } from '../../../services/supabase';
import { publicProcedure, router } from '../../trpc';

export const authRouter = router({
    createDemoUser: publicProcedure.mutation(async () => {
        const existingDemoUser = await supabase.auth.admin.getUserById(DEMO_USER_ID);
        if (existingDemoUser.data.user) {
            await supabase.auth.admin.updateUserById(DEMO_USER_ID, {
                email: DEMO_USER_EMAIL,
                password: DEMO_USER_PASSWORD,
            });
            return existingDemoUser.data.user;
        }

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

        return newDemoUser.data.user;
    }),
});
