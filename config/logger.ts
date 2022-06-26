import Winston from "winston";
import dotenv from 'dotenv';

const env = dotenv.config().parsed;

const levels = {
    error: 0,
    warn: 2,
    info: 3,
    http: 4,
    debug: 5,
}

const level = () => {
  const debug = env!.DEBUG
  return debug ? 'debug' : 'warn';
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
}

Winston.addColors(colors);

const format = Winston.format.combine(
    Winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    Winston.format.colorize({all: true}),
    Winston.format.printf(info => `${info.timestamp} - ${info.level} - ${info.message}`)
)

const transports = [
    new Winston.transports.Console(),
    new Winston.transports.File({
        filename: 'logs/errors.log'
    }),
    new Winston.transports.File({
        filename: 'logs/all.log'
    }),

]

export default Winston.createLogger({
    level: level(),
    levels,
    format,
    transports
})