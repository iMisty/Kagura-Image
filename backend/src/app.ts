/*
 * @Author: Miya
 * @Date: 2021-03-14 17:35:13
 * @LastEditTime: 2021-09-13 01:51:42
 * @LastEditors: Miya
 * @Description: APP config
 * @FilePath: \backend\src\app.ts
 * @Version: 1.0
 */

const Koa = require('koa');
const path = require('path');
const logger = require('koa-logger');
const assets = require('koa-static');
const cors = require('koa2-cors');
const body2 = require('koa-body');
const Mongoose = require('mongoose');
const dbConfig = require('./config/db');

import router from './router/index';

const app = new Koa();

// middleware: CORS
app.use(cors());
// middleware: Log
app.use(logger());
// middleware: Multi Upload
app.use(
  body2({
    multipart: true,
    formidable: {
      maxFileSize: 20000 * 1024 * 1024,
      // 上传目录
      uploadDir: path.join(__dirname, '/static/upload'),
      // 保留文件扩展名
      keepExtensions: true,
    },
  })
);
// middleware: Static
app.use(assets(__dirname + '/static'));
// middleware: Router
app.use(router());

app.listen(12451);
// 打印日志
app.use(async (ctx: any, next: any) => {
  const start: Date = new Date();
  await next();
  console.log(`${ctx.method} ${ctx.url}`);
});

// 连接数据库
Mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB is Listening on Port 27471');
  })
  .catch((err: string) => {
    console.log(err);
  });
console.log('APP is Listening on Port 12451');
