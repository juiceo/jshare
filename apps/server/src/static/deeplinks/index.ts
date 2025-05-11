import path from 'path';
import { Router } from 'express';
import pug from 'pug';

export const router = Router();

router.get('/invite/:code', (req, res) => {
    const templatePath = path.resolve(__dirname, 'invite.pug');
    const html = pug.renderFile(templatePath, { groupName: 'A group name here' });

    res.send(html);
});

export default router;
