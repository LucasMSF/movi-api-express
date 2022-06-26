import express, { Request, Response } from "express";
import config from "config";
import Logger from '../config/logger'

import router from './routes'
import { morganMiddleware } from "./middleware/morgan";

const app = express();

//JSON middleware
app.use(express.json());
//Morgan middlware
app.use(morganMiddleware);

//Routes
app.use('/api', router);
app.use('/api', router);


const PORT = config.get<number>('port');

app.listen(PORT, async () => {
    Logger.info(`App running on port: ${PORT}`)
})