import morgan, { StreamOptions } from "morgan";
import Logger from "../../config/logger"
import dontenv from 'dotenv';

const env = dontenv.config().parsed

const stream: StreamOptions = {
    write: (message) => Logger.http(message)
}

const skip = () => {
    return Boolean(!env!.DEBUG)    
}

export const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms", 
    {stream, skip}
);