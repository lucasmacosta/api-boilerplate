import * as dotenv from 'dotenv';
import { resolve } from 'path';
import { Server } from 'http';

dotenv.config({ path: resolve(__dirname, 'test.env') });

import serverPromise from '../../src/server';
import logger from '../../src/shared/logger';

serverPromise.then((server: Server) => {
  logger.info(`API server for testing started on port ${server.address().port}`);
});
