/*
 * @Author: Miya
 * @Date: 2021-03-23 15:51:43
 * @LastEditTime: 2021-06-10 00:18:47
 * @LastEditors: Miya
 * @Description: MongoDB图片模型
 * @FilePath: \backend\src\model\Image.ts
 * @Version: 1.0
 */

import * as Mongoose from 'mongoose';
/**
 *  @ params
 *  Id: 图片唯一ID
 *  Size: 图片大小
 *  Name: 图片名称
 *  Path: 图片链接
 *  Time: 上传时间
 */
const imageModel = new Mongoose.Schema({
  size: Number,
  name: String,
  path: String,
  time: String,
  id: Number,
});

module.exports = Mongoose.model('Image', imageModel);
