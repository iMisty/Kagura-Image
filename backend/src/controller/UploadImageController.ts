/*
 * @Author: Miya
 * @Date: 2021-05-22 14:41:07
 * @LastEditTime: 2021-07-28 00:41:09
 * @LastEditors: Miya
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
const resizeImg = require('resize-img');

class UploadController {
  /**
   * @description: 上传单个图片
   * @param {Object<imgUpload>} image
   * @return {*}
   */
  private static async uploadImage(image: imgUpload) {
    console.log('Start upload image');
    return new Promise((resolve) => {
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
      console.table(data);
      console.log('Upload image successed');
      resolve(data);
    });

    // return { data };
    // // 录入数据库
    // const db = await DBC.addNewImage(data);
    // console.log('Upload to Database:' + db);

    // return { db };
  }

  /**
   * @description: 生成缩略图
   * @param {*}
   * @return {*}
   */
  public static async createThumbnails(image: imgUpload) {
    // 判断有无thumb目录
    const exists = FC.getDirExists('./src/thumbnail');
    if (!exists) {
      console.log('Trumbnails Dir is missing,make this now');
      await fs.promises.mkdir('./src/thumbnail');
    }
    // 缩略图生成
    const result = await resizeImg(
      fs.readFileSync(
        './src/upload/upload_c49f32fbc85b02942341df45d2a395f6.jpg'
      ),
      { width: 128 }
    ).then((buffer: any) => {
      console.log(buffer);
      fs.writeFileSync(
        './src/thumbnail/upload_c49f32fbc85b02942341df45d2a395f6.jpg',
        buffer
      );
    });
    console.log(result);
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
        data: result,
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
