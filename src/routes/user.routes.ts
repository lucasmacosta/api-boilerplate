import * as Router from 'koa-router';

import userController from '../user/user.controller';

const userRouter = new Router();

userRouter.get('/', userController.list);

export default userRouter;
