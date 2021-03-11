import Router from 'koa-router';
import whiskiesRouter from './whiskies';

const Router_v1 = new Router().prefix('/v1');

Router_v1.get('/', async(ctx, next) => {
  ctx.body = {
    "api_version": 1,
    "env": process.env.NODE_ENV
  }
});

Router_v1
  .use(whiskiesRouter.routes())

export default Router_v1;