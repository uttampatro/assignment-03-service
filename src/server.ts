//import
import express, { NextFunction, Request, Response } from 'express';
import authMiddleware from './middleware/authMiddleware';
import v1Router from './routes/index';
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

//app config
const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

//Middleware
app.use(
    cors({
        origin: '*',
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

//DB config
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
console.log('connected to DB');

//api middleware
app.use('/v1', v1Router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    let message = err.message;
    res.status(err.statusCode || 500).json({
        status: 'error',
        message: message,
    });
});

app.use(authMiddleware);

//listener
app.listen(port, () => console.log(`Server is up and running on  ${port}`));
