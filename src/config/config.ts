import { join } from 'path';

const config = {
  env: process.env.NODE_ENV || 'development',

  api: {
    compression: process.env.API_COMPRESSION === 'true',
    port: process.env.API_PORT || 3000,
    prefix: process.env.API_PREFIX || '/api'
  },

  logger: {
    all: {
      level: process.env.LOGGER_ALL_LEVEL || 'info',
      path: process.env.LOGGER_ALL_PATH || 'all.log'
    },
    console: {
      level: process.env.LOGGER_CONSOLE_LEVEL || 'info'
    },
    disable: process.env.LOGGER_DISABLE === 'true' || false,
    errors: {
      level: process.env.LOGGER_ERRORS_LEVEL || 'error',
      path: process.env.LOGGER_ERRORS_PATH || 'errors.log'
    },
    maxFiles: process.env.LOGGER_MAX_SIZE || 5,
    maxSize: process.env.LOGGER_MAX_SIZE || 5 * 1024 * 1024,
    path: process.env.LOGGER_PATH || join(__dirname, '../logs')
  },

  database: {

  }
};

export default config;
