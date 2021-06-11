/*
 * @Author: Miya
 * @Date: 2021-06-11 15:08:33
 * @LastEditTime: 2021-06-11 16:08:26
 * @LastEditors: Miya
 * @Description: 文件相关
 * @FilePath: \backend\src\router\file.ts
 */
const router = require('koa-router')();
const FileController = require('../controller/FileController');
const DBController = require('../controller/DataBaseController');
router.prefix('/file');

// 检测本地文件夹是否已创建
router.get('/check', FileController.getDirExists);
// 读取根目录文件
router.get('/', FileController.getRootDirFiles);
// 从数据库获取单张文件信息
router.get('/:id', DBController.getImageList);

export default router;
