/*
 * @Author: Miya
 * @Date: 2021-05-22 14:41:07
 * @LastEditTime: 2021-09-13 02:20:42
 * @LastEditors: Miya
 * @Description: Update image controller
 * @FilePath: \backend\src\controller\UploadImageController.ts
 */

import { HOST } from '../config/upload';
import { CTX, UploadImageObject } from '../interface/ctx';
import { formatDate } from '../util/formatDate';

// TODO: fix any
interface CTXUpdate extends CTX {
  body: { code: number; msg: string; data?: any };
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
  private static async uploadImage(image: UploadImageObject) {
    console.log('Start upload image');
    return new Promise((resolve, reject) => {
      if (image.type === 'image/gif') {
        reject('Error: Image format not supported');
      }
      // 用户输入图片信息
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
      console.log('Upload image successed');
      return resolve(data);
    }).catch((err) => {
      console.log(err);
      return false;
    });
  }

  /**
   * @description: 生成缩略图
   * @param {*}
   * @return {*}
   */
  private static createThumbnails(image: UploadImageObject) {
    console.log('Upload Thumbnail now');
    // 图片相对地址
    const imageSrc = `./src/static/upload/${image.path}`;
    // 缩略图相对地址
    const thumbnailSrc = `./src/static/thumbnail/${image.path}`;
    const thumbnailOutput = `${HOST}/thumbnail/${image.path}`;
    try {
      // 生成缩略图
      resizeImg(fs.readFileSync(imageSrc), {
        width: 128,
      }).then((buffer: Buffer) => {
        fs.writeFileSync(thumbnailSrc, buffer);
      });
      console.log('Upload Thumbnail Successed');
      return { ...image, thumbnailOutput };
    } catch (error) {
      console.log('Upload Thumbnail Failed');
      throw new Error(error);
      return error;
    } finally {
      console.log('Upload Thumbnail Complete');
    }
  }

  /**
   * @description: API接口：上传单个文件
   * @param {*}
   * @return {*}
   */

  // Fix: GIF Thumbnail 500
  public static async setUploadImage(ctx: CTXUpdate) {
    try {
      // Request body
      const image = ctx.request.files.image;
      // 图片上传
      const imageUpload = await UploadController.uploadImage(image);
      // 缩略图生成
      const thumbnailUpload = await UploadController.createThumbnails(
        imageUpload as UploadImageObject
      );

      return (ctx.body = {
        code: 200,
        msg: 'ok',
        data: { ...thumbnailUpload },
      });
    } catch (error) {
      return (ctx.body = {
        code: 500,
        msg: error,
      });
    }
  }
}

module.exports = UploadController;
