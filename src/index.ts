import * as dotenv from 'dotenv';

dotenv.config();

import serverPromise from './server';

serverPromise.then((server) => {
  console.log(`API server started on port ${server.address().port}`);
});
