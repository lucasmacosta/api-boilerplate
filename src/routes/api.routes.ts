import * as Router from 'koa-router';

import * as config from '../config/config';

import statusRouter from './status.routes';
import userRouter from './user.routes';

const apiRouter = new Router();

apiRouter.prefix(config.api.prefix);

apiRouter.use('/status', statusRouter.routes());
apiRouter.use('/users', userRouter.routes());

export default apiRouter;
