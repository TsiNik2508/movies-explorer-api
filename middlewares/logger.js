const winston = require('winston');
const expressWinston = require('express-winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'request.log' }),
  ],
  format: winston.format.json(),
});

const requestLogger = expressWinston.logger({ winstonInstance: logger });
const errorLogger = expressWinston.errorLogger({ winstonInstance: logger });

module.exports = {
  requestLogger,
  errorLogger,
};
