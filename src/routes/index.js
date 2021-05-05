import Router from 'koa-router';
import Router_v1 from './v1';

const RootRouter = new Router();

RootRouter.get('/', async(ctx, next) => {
  ctx.body = {
    "status": 1,
    "env": process.env.NODE_ENV
  }
});

RootRouter
  .use(Router_v1.routes())
  .use(Router_v1.allowedMethods())

export default RootRouter;