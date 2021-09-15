import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/users';
import BlogController from '../controllers/blogs';
import authMiddleware from '../middleware/authMiddleware';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('server up and running');
});

// User controller
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
// router.use(authMiddleware);
router.delete('/deleteUser/:id', UserController.deletingUser);
router.get('/users', UserController.fetchAllUsers);
router.post('/createBlog', BlogController.createBlog);
router.get('/getAllBlogs', BlogController.fetchAllBlogs);

export default router;
