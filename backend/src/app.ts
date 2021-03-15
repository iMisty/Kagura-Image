/*
 * @Author: Miya
 * @Date: 2021-03-14 17:35:13
 * @LastEditTime: 2021-03-15 17:58:40
 * @LastEditors: Miya
 * @Description: APP config
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\app.ts
 * @Version: 1.0
 */

const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const assets = require('koa-static');

import router from './router/index';

const app = new Koa();

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form'],
  })
);
app.use(logger());
app.use(assets(__dirname + '/assets'));

app.use(router());
app.listen(12450);

// 打印日志
app.use(async (ctx: any, next: any) => {
  const start: Date = new Date();
  await next();
  console.log(`${ctx.method} ${ctx.url}`);
});

console.log('APP is Listening on Port 12450')