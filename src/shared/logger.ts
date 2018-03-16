import * as Winston from 'winston';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

import * as config from '../config/config';

if (! existsSync(config.logger.path)) {
  mkdirSync(config.logger.path);
}

const transports = [
  new Winston.transports.Console({
    level: config.logger.console.level,
    colorize: true,
    timestamp: true,
    silent: config.logger.disable
  }),
  new Winston.transports.File({
    name: 'all',
    filename: join(config.logger.path, config.logger.all.path),
    level: config.logger.all.level,
    maxFiles: config.logger.maxFiles,
    maxsize: config.logger.maxSize,
    colorize: true,
    timestamp: true,
    silent: config.logger.disable
  }),
  new Winston.transports.File({
    name: 'errors',
    filename: join(config.logger.path, config.logger.errors.path),
    level: config.logger.errors.level,
    maxFiles: config.logger.maxFiles,
    maxsize: config.logger.maxSize,
    handleExceptions: true,
    humanReadableUnhandledException: true,
    colorize: true,
    timestamp: true,
    silent: config.logger.disable
  })
];

const logger = new (Winston.Logger)({
  exitOnError: false,
  transports
});

export default logger;
