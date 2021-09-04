/*
 * @Author: Miya
 * @Date: 2021-05-22 14:41:07
 * @LastEditTime: 2021-08-19 00:23:15
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
      // console.table(image);
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
      return resolve(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  /**
   * @description: 生成缩略图
   * @param {*}
   * @return {*}
   */
  private static async createThumbnails(
    image: UploadImageObject
  ): Promise<any> {
    // 缩略图生成
    return await new Promise((resolve, reject) => {
      console.log('Upload Thumbnail now');
      // 图片相对地址
      const imageSrc = `./src/static/upload/${image.path}`;
      // 缩略图相对地址
      const thumbnailSrc = `./src/static/thumbnail/${image.path}`;
      // 生成缩略图
      const thumbnail = resizeImg(fs.readFileSync(imageSrc), { width: 128 })
        .then((buffer: Buffer) => {
          fs.writeFileSync(thumbnailSrc, buffer);
        })
        .then(() => {
          console.log('Upload Thumbnail Successed');
          console.table(image);
          resolve({ ...image, thumbnailSrc });
          return { ...image, thumbnailSrc };
        })
        .catch((err: any) => {
          console.log('Upload Thumbnail Failed');
          reject(err);
        })
        .finally(() => {
          console.log('Upload Thumbnail Complete');
        });
      return thumbnail;
    });
  }

  /**
   * @description: API接口：上传单个文件
   * @param {*}
   * @return {*}
   */
  public static async setUploadImage(ctx: CTXUpdate) {
    // Request body
    const image = ctx.request.files.image;
    // 图片上传
    const imageUpload = await UploadController.uploadImage(image);
    // 缩略图生成
    const thumbnailUpload = await UploadController.createThumbnails(
      imageUpload as UploadImageObject
    );

    console.log(imageUpload);
    console.log(thumbnailUpload);

    return (ctx.body = {
      code: 1,
      msg: 'ok',
      data: { ...thumbnailUpload },
    });
  }
}

module.exports = UploadController;
