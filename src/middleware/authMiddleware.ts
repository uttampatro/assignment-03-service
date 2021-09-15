import express, { NextFunction } from 'express';
import process from 'process';
const jwt = require('jsonwebtoken');

export default () => {
    return async (
        req: express.Request,
        res: express.Response,
        next: NextFunction
    ) => {
        try {
            const { authorization } = req.headers;
            const user = await jwt.verify(
                authorization,
                process.env.TOKEN_SECRET
            );
            if (!user) {
                throw new Error('Unauthorized');
            }
            // Find better way of assigning properties to request object
            (<any>req).decoded = user;
            next();
        } catch (err) {
            next(err);
        }
    };
};
