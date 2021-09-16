import express, { NextFunction, Request, Response } from 'express';
import process from 'process';
const jwt = require('jsonwebtoken');

export default () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { authorization } = req.headers;
            const user = jwt.verify(
                authorization.replace(/['"]+/g, ''),
                process.env.TOKEN_SECRET
            );
            if (!user) {
                throw new Error('Unauthorized');
            }
            // Find better way of assigning properties to request object
            (<any>req).decoded = user;
            next();
        } catch (err) {
            console.log(err);
            next(err);
        }
    };
};
