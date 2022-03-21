/*
 * @Author: Miya
 * @Date: 2021-03-23 17:05:19
 * @LastEditTime: 2022-03-21 21:43:54
 * @LastEditors: Miya
 * @Description: 图片相关
 * @FilePath: \backend\src\router\upload.ts
 * @Version: 1.0
 */

const router = require('koa-router')();
// const Upload = require('../controller/UploadImageController');
router.prefix('/image');

// 上传单张图片
// router.post('/', Upload.setUploadImage);

// router.get('/thumb', Upload.createThumbnails);

export default router;
