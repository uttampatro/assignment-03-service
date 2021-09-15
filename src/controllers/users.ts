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

            return res.json(user);
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
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
            return res.header('auth-token', token).send(token);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    };
}

export default new UserController();
