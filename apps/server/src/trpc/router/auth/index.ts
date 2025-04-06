import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { DEMO_USER_PASSWORD, isDemoUserEmail } from '@jshare/common';

import { supabase } from '../../../services/supabase';
import { publicProcedure, router } from '../../trpc';

export const authRouter = router({
    createDemoUser: publicProcedure
        .input(z.object({ email: z.string() }))
        .mutation(async (opts) => {
            if (!isDemoUserEmail(opts.input.email)) {
                throw new TRPCError({
                    code: 'BAD_REQUEST',
                    message: 'Email is not a demo user email',
                });
            }

            try {
                await supabase.auth.admin.createUser({
                    email: opts.input.email,
                    email_confirm: true,
                    password: DEMO_USER_PASSWORD,
                });
            } catch {
                // Demo user with that email already exists, do nothing
            }
        }),
});
