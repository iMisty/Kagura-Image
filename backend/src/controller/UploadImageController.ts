/*
 * @Author: Miya
 * @Date: 2021-05-22 14:41:07
 * @LastEditTime: 2021-05-23 23:03:33
 * @LastEditors: Miya
 * @Description: Update image controller
 * @FilePath: \backend\src\controller\UploadImageController.ts
 */

import { formatDate } from '../util/formatDate';

// 上传文件字段
interface imgUpload {
  size: Number;
  path: String;
  name: String;
  lastModifiedDate: string;
}
const DBC = require('../controller/DataBaseController');

class UploadController {
  /**
   * @description: 上传单个图片
   * @param {CTXNormal} ctx
   * @return {*}
   */
  private static async uploadImage(ctx: any, images: imgUpload) {
    // // 用户输入图片信息
    const image = ctx.request.files.image;
    console.log(image);
    // 截取地址
    const resPath = image.path.split('upload_');
    // 输出数据
    const data = {
      size: image.size,
      name: image.name,
      path: `upload_${resPath[1]}`,
      time: formatDate(image.lastModifiedDate),
    };
    console.log(data);
    // 录入数据库
    const db = await DBC.addNewImage(data);
    console.log('Upload Data:' + data);
    console.log('Upload to Database:' + db);
    // try {
    //   ctx.body = {
    //     code: 1,
    //     msg: '上传成功',
    //     data,
    //     db,
    //   };
    // } catch (err) {
    //   ctx.body = {
    //     code: 0,
    //     msg: '上传失败',
    //     err,
    //   };
    // }
  }
}

module.exports = UploadController;
