/*
 * @Author: Miya
 * @Date: 2021-03-15 17:50:14
 * @LastEditTime: 2021-05-21 18:52:23
 * @LastEditors: Miya
 * @Description: Router index
 * @FilePath: \backend\src\router\index.ts
 * @Version: 1.0
 */

import * as Router from 'koa-router';
import * as CombineRouters from 'koa-combine-routers';

import UploadRoute from './upload';

const FileController = require('../controller/FileController');

const router = new Router();

const index = router.get('/', async (ctx: any) => {
  ctx.body = 'Hello TypeScript';
});

const test = router.get('/dir', FileController.getImage);

const routers = CombineRouters(index, UploadRoute, test);

export default routers;
