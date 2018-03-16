import * as dotenv from 'dotenv';
import { Server } from 'http';

dotenv.config();

import serverPromise from './server';
import logger from './shared/logger';

serverPromise.then((server: Server) => {
  logger.info(`API server started on port ${server.address().port}`);
});
