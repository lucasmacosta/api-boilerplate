import * as dotenv from 'dotenv';
import { resolve } from 'path';

const test = dotenv.config({ path: resolve(__dirname, 'test.env') });

import serverPromise from '../../src/server';

serverPromise.then((server) => {
  console.log(`API server for testing started on port ${server.address().port}`);
});
