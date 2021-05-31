/*
 * @Author: Miya
 * @Date: 2021-03-23 17:05:19
 * @LastEditTime: 2021-05-31 11:42:20
 * @LastEditors: Miya
 * @Description: 图片相关
 * @FilePath: \backend\src\router\upload.ts
 * @Version: 1.0
 */

const router = require('koa-router')();
const File = require('../controller/FileController');
const Upload = require('../controller/UploadImageController');
const DB = require('../controller/DataBaseController');
router.prefix('/image');

// 检测本地文件夹是否已创建
router.get('/checkdir', File.getDirExists);
// 读取根目录文件
router.get('/readdir', File.getRootDirFiles);
// 获取图片文件名
router.get('/', File.getImage);
// 上传单张图片
router.post('/', Upload.setUploadImage);

export default router;
