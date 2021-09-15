import { Request, Response } from 'express';
import { UserRole } from '../entity/User';
import { SaveUserDTO, UserDTO } from '../services/User/UserDTO';

class BlogController {
    getAllBlogs = async (req: Request, res: Response) => {
        try {
            const user: UserDTO = (<any>req).decoded;
            const { _id, email, role } = user;
            return res.json({});
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
