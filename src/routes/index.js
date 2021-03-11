import Router from 'koa-router';
import Router_v1 from './v1';

const RootRouter = new Router();

RootRouter
  .use(Router_v1.routes())
  .use(Router_v1.allowedMethods())

export default RootRouter;