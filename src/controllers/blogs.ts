import { Request, Response } from 'express';
import { UserRole } from '../entity/User';
import { BlogService } from '../services';
import { SaveUserDTO, UserDTO } from '../services/User/UserDTO';

class BlogController {
    createBlog = async (req: Request, res: Response) => {
        try {
            const userId = req.body.userId;
            const title = req.body.title;
            const article = req.body.article;
            const imageUrl = req.body.imageUrl;
            const blog = await BlogService.createBlog({
                userId,
                title,
                article,
                imageUrl,
            });
            return res.json(blog);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    fetchAllBlogs = async (req: Request, res: Response) => {
        try {
            const user: UserDTO = (<any>req).decoded;
            const { _id, email, role } = user;

            if (role !== UserRole.ADMIN) {
                throw new Error('Access restricted');
            }

            const blogs = await BlogService.getAllBlogs();
            return res.json(blogs);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };

    fetchBlogsByWriter = async (req: Request, res: Response) => {
        try {
            const user: UserDTO = (<any>req).decoded;
            const { _id, email, role } = user;

            if (role !== UserRole.CONTENT_WRITER) {
                throw new Error('Access restricted');
            }
            const id = req.params.id;
            const blogs = await BlogService.getBlogsByWriter(id);
            return res.json(blogs);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    };

    deleteBlog = async (req: Request, res: Response) => {
        try {
            const user: UserDTO = (<any>req).decoded;
            const { _id, email, role } = user;

            if (role !== UserRole.ADMIN) {
                throw new Error('Access restricted');
            }

            const id = req.params.id;
            const blog = await BlogService.deleteBlog({
                _id: id,
            });

            return res.send(blog);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    };
    fetchBlogByBlogId = async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            const blog = await BlogService.getBlogByBlogId({
                _id: id,
            });
            return res.json(blog);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new BlogController();
