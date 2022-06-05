/*
 * @Author: Miya
 * @Date: 2021-03-15 17:50:14
 * @LastEditTime: 2022-03-31 23:03:19
 * @LastEditors: Miya
 * @Description: Router index
 * @FilePath: \Kagura-Image\src\router\index.ts
 * @Version: 1.0
 */

import Router from 'koa-router';
import CombineRouters from 'koa-combine-routers';

import UploadRoute from './upload';
import FileRouter from './file';
import File from '../controller/Files';

const router = new Router();

const index = router.get('/', async (ctx: { body: string }) => {
  ctx.body = 'Hello TypeScript';
});

const fileTest = router.get('/file', File.Get);

const routers = CombineRouters(index, UploadRoute, FileRouter, fileTest);

export default routers;
