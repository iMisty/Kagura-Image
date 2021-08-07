/*
 * @Author: Miya
 * @Date: 2021-06-11 15:08:33
 * @LastEditTime: 2021-08-07 19:12:22
 * @LastEditors: Miya
 * @Description: 文件相关
 * @FilePath: \backend\src\router\file.ts
 */
const router = require('koa-router')();
const FileController = require('../controller/FileController');
const DBController = require('../controller/DataBaseController');

const FilesController = require('../controller/FilesController');

router.prefix('/file');

// 检测本地文件夹是否已创建
router.get('/check', FileController.getDirExists);
// 读取根目录文件
router.get('/', FileController.getRootDirFiles);
// 从数据库获取单张文件信息
router.get('/:id', DBController.getImageList);
// 删除图片
router.delete('/:path', FileController.setDeleteImage);

router.get('/test', FilesController.APIIsDirExist);

export default router;
