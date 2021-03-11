import Router from 'koa-router';
import { getAllWhiskies, getWhiskyById } from '../../../db/queries/whiskies';

const router = new Router().prefix('/whiskies');

router.get('/', async(ctx, next) => {  
  ctx.body = await getAllWhiskies();
});

router.get('/:id', async(ctx, next) => {
  ctx.body = await getWhiskyById(ctx.params.id);
});

export default router;