import 'reflect-metadata';
import * as koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as compress from 'koa-compress';

import * as config from './config/config';
import { connect } from './config/database';
import logger from './shared/logger';

import apiRouter from './routes/api.routes';

const app = new koa();

if (config.api.compression) {
  app.use(compress());
}

app.use(bodyParser());

app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

const server = app.listen(config.api.port);

const serverPromise = connect().then((connection) => {
  logger.info('Connected to database');
  return server;
}).catch((error) => {
  logger.error('Error while connecting to database', error);
  process.exit(-1);
});

export default serverPromise;
