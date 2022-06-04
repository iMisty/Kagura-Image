/*
 * @Author: Miya
 * @Date: 2021-03-14 17:35:13
 * @LastEditTime: 2022-04-06 21:21:06
 * @LastEditors: Miya
 * @Description: APP config
 * @FilePath: \Kagura-Image\src\app.ts
 * @Version: 1.0
 */

import Koa from 'koa';
import path from 'path';
import logger from 'koa-logger';
import assets from 'koa-static';
import cors from 'koa2-cors';
import body from 'koa-body';
// import Mongoose from 'mongoose';
// import Database from './config/database';

import router from './router/index';

const app = new Koa();

// middleware: CORS
app.use(cors());
// middleware: Log
app.use(logger());
// middleware: Multi Upload
app.use(
  body({
    multipart: true,
    formidable: {
      maxFileSize: 20000 * 1024 * 1024,
      uploadDir: path.join(__dirname, '/static/upload'),
      keepExtensions: true,
    },
  })
);
// middleware: Static
app.use(assets(__dirname + '/static'));
// middleware: Router
app.use(router());

app.listen(12450);
// logger
app.use(async (ctx, next: any) => {
  const start: Date = new Date();
  await next();
  console.log(`${ctx.method} ${ctx.url}`);
});
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
