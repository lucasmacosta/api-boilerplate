const path = require('path');

module.exports = exports = {
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
    path: process.env.LOGGER_PATH || path.join(__dirname, '../logs')
  },

  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || '3306',
    database: process.env.DATABASE_DATABASE || 'api_boilerplate',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    dropSchema: process.env.DATABASE_DROP_SCHEMA === 'true',
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true'
  }
};
