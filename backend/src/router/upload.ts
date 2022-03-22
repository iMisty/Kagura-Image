/*
 * @Author: Miya
 * @Date: 2021-03-23 17:05:19
 * @LastEditTime: 2022-03-22 12:13:03
 * @LastEditors: Mirage
 * @Description: 图片相关
 * @FilePath: \backend\src\router\upload.ts
 * @Version: 1.0
 */

const router = require('koa-router')();
import Upload from '../controller/old/UploadImageController';
router.prefix('/image');

// 上传单张图片
router.post('/', Upload.setUploadImage);

router.get('/thumb', Upload.createThumbnails);

export default router;
