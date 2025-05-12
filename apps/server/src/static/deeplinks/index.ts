import { Router } from 'express';

import { db } from '../../services/db';
import { supabase } from '../../services/supabase';

export const router = Router();

router.get('/invite/:code', async (req, res) => {
    const group = await db.group.findUnique({
        where: {
            inviteCode: req.params.code,
        },
        include: {
            coverImage: true,
            participants: true,
        },
    });

    if (!group) {
        res.render('invite-invalid', {
            code: req.params.code,
            meta: {
                title: `Invalid invite link`,
                description: `No group was found with this link. Please ask the group owner for a new link.`,
                url: `https://app.jshare.me/l/invite/${req.params.code}`,
            },
        });
    } else {
        res.render('invite', {
            groupName: group.name,
            inviteCode: group.inviteCode,
            meta: {
                title: `Join ${group.name} on JShare`,
                description: `Click to accept the invite and start collaborating in ${group.name}.`,
                url: `https://app.jshare.me/l/invite/${group.inviteCode}`,
            },
        });
    }
});

export default router;
