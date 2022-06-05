/*
 * @Author: Miya
 * @Date: 2021-03-23 17:05:19
 * @LastEditTime: 2022-04-06 21:36:40
 * @LastEditors: Miya
 * @Description: 图片相关
 * @FilePath: \Kagura-Image\src\router\upload.ts
 * @Version: 1.0
 */

const router = require('koa-router')();
import Upload from '../controller/Upload';
router.prefix('/image');

// 上传单张图片
router.post('/upload', Upload.setUploadImage);

export default router;
