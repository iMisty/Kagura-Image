/*
 * @Author: Miya
 * @Date: 2021-03-22 14:27:01
 * @LastEditTime: 2021-06-10 06:02:24
 * @LastEditors: Miya
 * @Description: upload
 * @FilePath: \backend\src\config\upload.ts
 * @Version: 1.0
 */

// const multer = require('@koa/multer');
// const path = require('path');
// const destPath = path.join(__dirname, '../upload');

// const storage = multer.diskStorage({
//   destination: (req: any, file: any, cb: any) => {
//     cb(null, destPath);
//   },
//   filename: (req: any, file: any, cb: any) => {
//     const fileFormat = file.originalname.split('.');
//     cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1]);
//   },
// });

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 20000 * 1048576,
//   },
// });

// module.exports = upload;
export const HOST = 'http://localhost:12450';