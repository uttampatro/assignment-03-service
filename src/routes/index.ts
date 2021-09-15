import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/users';
import authMiddleware from '../middleware/authMiddleware';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('server up and running');
});

// User controller
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.use(authMiddleware);

export default router;
