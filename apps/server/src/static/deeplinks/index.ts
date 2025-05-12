import { Request, Response, Router } from 'express';

import { db } from '../../services/db';

export const router = Router();

const isIOS = (req: Request) => {
    const userAgent = (req.headers as any)['user-agent'];
    return /iPhone|iPad|iPod|Macintosh/.test(userAgent);
};

router.get('/invite/:code', async (req: Request, res: Response) => {
    const group = await db.group.findUnique({
        where: {
            inviteCode: req.params.code,
        },
        include: {
            coverImage: true,
            participants: true,
        },
    });

    console.log('REQ', req.headers);

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
            appStoreUrl: isIOS(req)
                ? 'https://apps.apple.com/fi/app/jshare/id6743673035'
                : /**
                   * TODO: Add correct Google Play URL once we have it
                   */
                  'https://play.google.com/store/apps/details?id=com.jshare.app',
            meta: {
                title: `Join ${group.name} on JShare`,
                description: `Click to accept the invite and start collaborating in ${group.name}.`,
                url: `https://app.jshare.me/l/invite/${group.inviteCode}`,
            },
        });
    }
});

export default router;
