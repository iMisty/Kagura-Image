/*
 * @Author: Miya
 * @Date: 2021-03-14 17:35:13
 * @LastEditTime: 2022-03-22 12:10:13
 * @LastEditors: Mirage
 * @Description: APP config
 * @FilePath: \backend\src\app.ts
 * @Version: 1.0
 */

import Koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import assets from 'koa-static';
import cors from 'koa2-cors';
import body2 from 'koa-body';
import Mongoose from 'mongoose';
import Database from './config/database';

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

app.listen(12450);
// 打印日志
app.use(async (ctx: any, next: any) => {
  const start: Date = new Date();
  await next();
  console.log(`${ctx.method} ${ctx.url}`);
});

// 连接数据库
// Mongoose.connect(Database.db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('MongoDB is Listening on Port 27471');
//   })
//   .catch((err: string) => {
//     console.log(err);
//   });
console.log('APP is Listening on Port 12450');
