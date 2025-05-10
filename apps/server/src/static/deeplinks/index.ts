import path from 'path';
import { Router } from 'express';

export const router = Router();

router.get('/invite/:code', (req, res) => {
    res.sendFile(path.join(__dirname, 'invite.html'));
});

export default router;
