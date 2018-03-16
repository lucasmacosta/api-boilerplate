import * as Router from 'koa-router';

import statusController from '../status/status.controller';

const statusRouter = new Router();

statusRouter.get('/ping', statusController.ping);

export default statusRouter;
