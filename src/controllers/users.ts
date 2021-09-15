import { Request, Response } from 'express';
import { UserService } from '../services';
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
            const id = req.params.id;
            const user = await deleteUser({
                _id: id,
            });
            return res.json('delete user successfully');
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}

export default new UserController();
function deleteUser(arg0: { _id: string }) {
    throw new Error('Function not implemented.');
}