/*
 * @Author: Miya
 * @Date: 2021-05-22 14:41:07
 * @LastEditTime: 2021-07-26 15:42:09
 * @LastEditors: Please set LastEditors
 * @Description: Update image controller
 * @FilePath: \backend\src\controller\UploadImageController.ts
 */

import { CTXNormal } from '../interface/ctx';
import { formatDate } from '../util/formatDate';

// 上传文件字段
interface imgUpload {
  size: Number;
  path: String;
  name: String;
  lastModifiedDate: string;
}
// TODO: fix any
interface CTXUpdate extends CTXNormal {
  request: {
    files: any;
  };
}

const DBC = require('../controller/DataBaseController');
const FC = require('../controller/FileController');
const fs = require('fs');
// https://github.com/aheckmann/gm
const gm = require('gm');

class UploadController {
  /**
   * @description: 上传单个图片
   * @param {Object<imgUpload>} image
   * @return {*}
   */
  private static async uploadImage(image: imgUpload) {
    // 检测文件夹是否存在
    const exists = await FC.getDirExists();
    if (!exists) {
      await fs.promises.mkdir('upload');
    }
    // 用户输入图片信息
    console.table(image);
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
    console.log('Upload to Database:' + db);

    return { db };
  }

  /**
   * @description: 生成缩略图
   * @param {*}
   * @return {*}
   */
  private static async createThumbnails(image: imgUpload) {
    // 判断有无thumb目录
    const exists = await FC.getDirExists('./src/thumb');
    if (!exists) {
      console.log('Trumbnails Dir is missing,make this now');
      await fs.promises.mkdir('thumb');
    }
  }

  /**
   * @description: API接口：上传单个文件
   * @param {*}
   * @return {*}
   */
  public static async setUploadImage(ctx: CTXUpdate) {
    const image = ctx.request.files.image;

    try {
      const result = await UploadController.uploadImage(image);
      return (ctx.body = {
        code: 1,
        msg: 'ok',
        data: result.db,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        err,
      });
    }
  }
}

module.exports = UploadController;
