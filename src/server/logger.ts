import * as winston from "winston";

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: 'norton.log', level: 'error' }),
    new winston.transports.Console({format: winston.format.simple()})
  ]
});
