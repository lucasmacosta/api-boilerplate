import * as Router from 'koa-router';

import config from '../config/config';

import statusRouter from './status.routes';

const apiRouter = new Router();

apiRouter.prefix(config.api.prefix);

apiRouter.use('/status', statusRouter.routes());

export default apiRouter;
