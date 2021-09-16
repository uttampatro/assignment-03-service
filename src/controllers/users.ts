import { Request, Response } from 'express';
import { UserRole } from '../entity/User';
import { UserService } from '../services';
import { UserDTO } from '../services/User/UserDTO';
const jwt = require('jsonwebtoken');

class UserController {
    registerUser = async (req: Request, res: Response) => {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            const role = req.body.role;
            const user = await UserService.register({
                name: name,
                email: email,
                password: password,
                role: role,
            });
            const token = jwt.sign(
                { _id: user._id, role: user.role, email: user.email },
                process.env.TOKEN_SECRET
            );
            return res.json({ user, accessToken: token });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    loginUser = async (req: Request, res: Response) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await UserService.login({ email, password });
            if (!user) {
                return res.status(404).send('error');
            }
            const token = jwt.sign(
                { _id: user._id, role: user.role, email: user.email },
                process.env.TOKEN_SECRET
            );
            return res.json({ accessToken: token });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    };
    deletingUser = async (req: Request, res: Response) => {
        try {
            const userE: UserDTO = (<any>req).decoded;
            const { _id, email, role } = userE;

            if (role !== UserRole.ADMIN) {
                throw new Error('Access restricted');
            }
            const id = req.params.id;
            const user = await UserService.deleteUser({
                _id: id,
            });

            return res.send(user);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    fetchAllUsers = async (req: Request, res: Response) => {
        try {
            const user: UserDTO = (<any>req).decoded;
            const { _id, email, role } = user;
            if (role !== UserRole.ADMIN) {
                throw new Error('Access restricted');
            }
            const users = await UserService.getAllUsers();
            return res.json(users);
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new UserController();
