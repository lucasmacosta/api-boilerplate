import * as Router from 'koa-router';

class StatusController {

  public async ping(ctx: Router.IRouterContext, next: () => Promise<any>) {
    ctx.status = 200;
    await next();
  }

}

export default new StatusController();
