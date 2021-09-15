//import
import express, { Request, Response } from 'express';
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
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => console.log('connected to DB')
);

//api middleware
app.get('/', (_req: Request, res: Response) => {
    res.send('server up and running');
});
// app.use('/v1', v1Router);

//listener
app.listen(port, () => console.log(`Server is up and running on  ${port}`));
