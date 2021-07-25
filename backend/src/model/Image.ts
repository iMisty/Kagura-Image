/*
 * @Author: Miya
 * @Date: 2021-03-23 15:51:43
 * @LastEditTime: 2021-07-26 00:34:39
 * @LastEditors: Miya
 * @Description: MongoDB图片模型
 * @FilePath: \backend\src\model\Image.ts
 * @Version: 1.1
 */

import * as Mongoose from 'mongoose';
/**
 *  @ params
 *  Id: 图片唯一ID
 *  Size: 图片大小
 *  Name: 图片名称
 *  Thumbnails: 缩略图
 *  Path: 图片链接
 *  Time: 上传时间
 */
const imageModel = new Mongoose.Schema({
  id: Number,
  size: Number,
  name: String,
  path: String,
  thumbnails: String,
  url: String,
  time: String,
});

module.exports = Mongoose.model('Image', imageModel);
