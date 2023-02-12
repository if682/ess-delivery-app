import { createLogger, format, transports } from 'winston';
import chalk from 'chalk';

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File({ filename: './logs/error.log', level: 'error' }),
    new transports.File({ filename: './logs/combined.log' }),
  ],
});

if (process.env.ENV !== 'PROD') {
  logger.add(
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.printf((info) => {
          const { timestamp, level, message } = info;
          let output = `${timestamp} [${level.toUpperCase()}]${message}`;

          switch (level) {
            case 'error':
              output = chalk.red(output);
              break;
            case 'warn':
              output = chalk.yellow(output);
              break;
            case 'info':
              output = chalk.green(output);
              break;
            case 'debug':
              output = chalk.blue(output);
              break;
          }

          return output;
        })
      ),
    })
  );
}

export default logger;
