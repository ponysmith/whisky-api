import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from '@koa/cors';

import router from './routes';

const app = new Koa();

app.use(bodyParser())
  .use(logger())
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);