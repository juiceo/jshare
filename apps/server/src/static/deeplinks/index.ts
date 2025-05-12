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
        return res.render('invite-invalid', { code: req.params.code });
    }

    const image = group.coverImage
        ? supabase.storage.from(group.coverImage.bucket).getPublicUrl(group.coverImage.path, {
              transform: {
                  width: 100,
                  height: 100,
                  quality: 50,
              },
          }).data.publicUrl
        : null;

    if (!group) {
        res.render('invite-invalid', { code: req.params.code });
    } else {
        res.render('invite', {
            groupName: group.name,
            inviteCode: group.inviteCode,
            image,
        });
    }

    console.log('GROUP', group);
});

export default router;
