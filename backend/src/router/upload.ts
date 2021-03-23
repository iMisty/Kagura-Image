/*
 * @Author: Miya
 * @Date: 2021-03-23 17:05:19
 * @LastEditTime: 2021-03-23 18:04:35
 * @LastEditors: Miya
 * @Description: 图片相关
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\router\upload.ts
 * @Version: 1.0
 */

const router = require('koa-router')();
const Upload = require('../controller/FileViewController');
const DB = require('../controller/DataBaseController');
router.prefix('/image')

// 上传单张图片
router.post('/', Upload.uploadImage);

// 查找图片
router.get('/', DB.getImageList);

export default router;
