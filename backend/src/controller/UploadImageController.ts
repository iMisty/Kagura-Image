/*
 * @Author: Miya
 * @Date: 2021-05-22 14:41:07
 * @LastEditTime: 2021-08-02 01:33:40
 * @LastEditors: Miya
 * @Description: Update image controller
 * @FilePath: \backend\src\controller\UploadImageController.ts
 */

import { CTXNormal, UploadImageObject } from '../interface/ctx';
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
      console.log(data);
      console.log('Upload image successed');
      resolve(data);
    }).catch((err) => {
      console.table(err);
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
  //TODO : FIX
  public static async createThumbnails(image: UploadImageObject): Promise<any> {
    // 判断有无thumb目录
    const exists = FC.getDirExists('./src/thumbnail');
    if (!exists) {
      console.log('Trumbnails Dir is missing,make this now');
      await fs.promises.mkdir('./src/thumbnail');
    }
    // 缩略图生成
    return new Promise((resolve, reject) => {
      // 图片相对地址
      const imageSrc = `./src/upload/${image.path}`;
      // 缩略图相对地址
      const thumbnailSrc = `.'/src/thumbnail/${image.path}`;
      // 生成缩略图
      resizeImg(fs.readFileSync(imageSrc), { width: 128 })
        .then((buffer: Buffer) => {
          fs.writeFileSync(thumbnailSrc, buffer);
        })
        .then(resolve(image))
        .catch((err: any) => {
          reject(err);
        });
    });
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
      const db = await UploadController.createThumbnails(image);
      return (ctx.body = {
        code: 1,
        msg: 'ok',
        data: result,
        db,
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
