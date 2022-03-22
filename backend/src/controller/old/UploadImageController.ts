/*
 * @Author: Miya
 * @Date: 2021-05-22 14:41:07
 * @LastEditTime: 2022-03-22 12:12:38
 * @LastEditors: Mirage
 * @Description: Update image controller
 * @FilePath: \backend\src\controller\old\UploadImageController.ts
 */

import { HOST } from '../../config/upload';
import { CTX, UploadImageObject } from '../../interface/ctx';
import { formatDate } from '../../util/formatDate';
import ResizeImg from '../../util/ResizeImg';

// TODO: fix any
interface CTXUpdate extends CTX {
  body: { code: number; msg: string; data?: any };
  request: {
    files: any;
  };
}
import fs from 'fs';

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
      console.log('Upload image succeeded');
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
  public static async createThumbnails(image: UploadImageObject) {
    console.log('Upload Thumbnail now');
    const resize = new ResizeImg(image);
    console.log(resize);
    return resize;
  }

  /**
   * @description: API接口：上传单个文件
   * @param {*}
   * @return {*}
   */

  // Fix: GIF Thumbnail 500
  public static async setUploadImage(ctx: CTXUpdate): Promise<any> {
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

// module.exports = UploadController;
export default UploadController;
