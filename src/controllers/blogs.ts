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

    getBlogsByWriter = async (req: Request, res: Response) => {
        try {
            return res.json({});
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

            // TODO:

            return res.json({});
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    };
}

export default new BlogController();
