/*
 * @Author: Miya
 * @Date: 2021-03-15 17:50:14
 * @LastEditTime: 2022-03-22 10:01:27
 * @LastEditors: Mirage
 * @Description: Router index
 * @FilePath: \backend\src\router\index.ts
 * @Version: 1.0
 */

import Router from 'koa-router';
import CombineRouters from 'koa-combine-routers';

import UploadRoute from './upload';
import FileRouter from './file';

const router = new Router();

const index = router.get('/', async (ctx: { body: string }) => {
  ctx.body = 'Hello TypeScript';
});

const routers = CombineRouters(index, UploadRoute, FileRouter);

export default routers;
