/*
 * @Author: Miya
 * @Date: 2021-03-15 17:50:14
 * @LastEditTime: 2021-03-26 14:57:34
 * @LastEditors: Miya
 * @Description: Router index
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\router\index.ts
 * @Version: 1.0
 */

import * as Router from 'koa-router';
import * as CombineRouters from 'koa-combine-routers';

import UploadRoute from './upload';

const FileView = require('../controller/FileViewController');

const router = new Router();

const index = router.get('/', async (ctx: any) => {
  ctx.body = 'Hello TypeScript';
});

const test = router.get('/dir', FileView.getImage);

const routers = CombineRouters(index, UploadRoute,test);

export default routers;
