import { join } from 'path';

const config = {
  env: process.env.NODE_ENV || 'development',

  api: {
    compression: process.env.API_COMPRESSION === 'true',
    port: process.env.API_PORT || 3000,
    prefix: process.env.API_PREFIX || '/api'
  },

  logger: {
    consoleLevel: process.env.LOGGER_CONSOLE_LEVEL || 'info',
    file: process.env.LOGGER_FILE || join(__dirname, '../logs/all.log'),
    silent: process.env.LOGGER_SILENT === 'true' || false
  },

  database: {

  }
};

export default config;
