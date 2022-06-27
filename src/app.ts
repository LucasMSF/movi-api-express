import express from "express";
import config from "config";
import Logger from '../config/logger';

import apiRouter from './routes/api';
import defaultRouter from './routes/default';
import { morganMiddleware } from "./middlewares/morgan";
import bodyParser from "body-parser";

const app = express();

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
//JSON middleware
app.use(express.json());
//Morgan middlware
app.use(morganMiddleware);

//Routes
app.use('/', defaultRouter)
app.use('/api', apiRouter);


const PORT = config.get<number>('port');

app.listen(PORT, async () => {
    Logger.info(`App running on port: ${PORT}`)
})