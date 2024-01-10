const winston = require('winston');
const expressWinston = require('express-winston');
const fs = require('fs');

const logDir = 'logs';
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'logs/request.log', level: 'info' }),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  ],
  format: winston.format.json(),
});

const requestLogger = expressWinston.logger({
  winstonInstance: logger,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

const errorLogger = expressWinston.errorLogger({
  winstonInstance: logger,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
});

module.exports = {
  requestLogger,
  errorLogger,
};
