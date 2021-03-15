/*
 * @Author: Miya
 * @Date: 2021-03-15 17:50:14
 * @LastEditTime: 2021-03-15 17:54:31
 * @LastEditors: Miya
 * @Description: Router index
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\router\index.ts
 * @Version: 1.0
 */

import * as Router from 'koa-router';
import * as CombineRouters from 'koa-combine-routers';

const router = new Router();

const index = router.get('/', async (ctx: any) => {
  ctx.body = 'Hello TypeScript';
});

const routers = CombineRouters(index);

export default routers;
