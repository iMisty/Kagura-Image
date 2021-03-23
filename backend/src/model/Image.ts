/*
 * @Author: Miya
 * @Date: 2021-03-23 15:51:43
 * @LastEditTime: 2021-03-23 16:17:44
 * @LastEditors: Miya
 * @Description: MongoDB图片模型
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\model\Image.ts
 * @Version: 1.0
 */

import * as Mongoose from 'mongoose';
/**
 *  @params
 *  Size: 图片大小
 *  Name: 图片名称
 *  Path: 图片链接
 */
const imageModel = new Mongoose.Schema({
  size: Number,
  name: String,
  path: String,
});

module.exports = Mongoose.model('Image', imageModel);
