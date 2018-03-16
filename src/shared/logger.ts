import * as Winston from 'winston';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

import config from '../config/config';

if (! existsSync(config.logger.path)) {
  mkdirSync(config.logger.path);
}

const transports = [
  new Winston.transports.Console({
    colorize: true,
    level: config.logger.console.level,
    silent: config.logger.disable,
    timestamp: true
  }),
  new Winston.transports.File({
    colorize: true,
    filename: join(config.logger.path, config.logger.all.path),
    level: config.logger.all.level,
    maxFiles: config.logger.maxFiles,
    maxsize: config.logger.maxSize,
    name: 'all',
    silent: config.logger.disable,
    timestamp: true
  }),
  new Winston.transports.File({
    colorize: true,
    filename: join(config.logger.path, config.logger.errors.path),
    handleExceptions: true,
    level: config.logger.errors.level,
    maxFiles: config.logger.maxFiles,
    maxsize: config.logger.maxSize,
    name: 'errors',
    silent: config.logger.disable,
    timestamp: true
  })
];

const logger = new (Winston.Logger)({
  exitOnError: false,
  transports
});

export default logger;
