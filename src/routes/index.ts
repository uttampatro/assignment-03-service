import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/users';
import BlogController from '../controllers/blogs';
import authMiddleware from '../middleware/authMiddleware';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('server up and running');
});

// Auth
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

// Middleware
router.use(authMiddleware());

// Users
router.get('/user/me', UserController.fetchAllUsers);
router.get('/users', UserController.fetchAllUsers);
router.delete('/user/:id', UserController.deletingUser);

// Blogs
router.get('/blogs', BlogController.fetchAllBlogs);
router.get('/blogsByWriter', BlogController.fetchAllBlogs);
router.post('/blog', BlogController.createBlog);
router.delete('/blog', BlogController.deleteBlog);

export default router;
