import { Router } from 'express';

export const router = Router();

router.get('/invite/:code', (req, res) => {
    res.render('invite', { groupName: 'A group name here' });
});

export default router;
