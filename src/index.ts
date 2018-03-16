import * as dotenv from 'dotenv';

dotenv.config();

import serverPromise from './server';
import logger from './shared/logger';

serverPromise.then((server) => {
  logger.info(`API server started on port ${server.address().port}`);
});
