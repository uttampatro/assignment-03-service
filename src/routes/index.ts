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
router.get('/blog/:id', BlogController.fetchBlogByBlogId);
router.get('/blogsByWriter/:id', BlogController.fetchBlogsByWriter);
router.post('/createBlog', BlogController.createBlog);
router.delete('/blog/:id', BlogController.deleteBlog);

export default router;
