import * as Router from 'koa-router';
import { User } from './user.entity';

class UserController {

  public async list(ctx: Router.IRouterContext, next: () => Promise<any>) {
    const users = await User.find();
    ctx.body = {
      users,
      count: users.length
    };
    await next();
  }

}

export default new UserController();
