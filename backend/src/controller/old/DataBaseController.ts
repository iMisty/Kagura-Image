/*
 * @Author: Miya
 * @Date: 2021-03-23 15:35:17
 * @LastEditTime: 2022-03-21 21:43:21
 * @LastEditors: Miya
 * @Description: 数据库操作
 * @FilePath: \backend\src\controller\old\DataBaseController.ts
 * @Version: 1.0
 */

import { HOST } from '../../config/upload';

const ImageModel = require('../model/Image');

interface Image {
  size: Number;
  name: String;
  path: String;
  time: String;
  url: String;
}

class DBController {
  // 图片入库
  public static async addNewImage(image: Image) {
    const result = new ImageModel({
      size: image.size,
      name: image.name,
      url: `${HOST}/${image.path}`,
      path: image.path,
      time: image.time,
      id: new Date().valueOf(),
    });
    try {
      await result.save();
      return result;
    } catch (error) {
      return error;
    }
  }

  // 图片遍历
  public static async getImageList(ctx: any) {
    // 根据ID查找单条目录
    const id = ctx.params.id;
    let result;

    if (id) {
      result = await ImageModel.find({ id });
    } else {
      // 根据时间倒序
      result = await ImageModel.find().sort({ time: 1 });
    }

    try {
      return (ctx.body = {
        code: 1,
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: 0,
        err: error,
      });
    }
  }

  /**
   * @description: 删除图片
   * @param {string} path: 图片位于数据库中的文件名
   * @return {*}
   */
  private static async deleteImage(path: string) {
    try {
      const find = await ImageModel.find({ path });
      if (!find) {
        return false;
      }
      const result = await ImageModel.deleteOne({ path });
      console.log(result);
      return result;
    } catch (error) {
      return error;
    }
  }

  /**
   * @description: API as FileController: 删除图片
   * @param {path}
   * @return {*}
   */
  public static async setDeleteImage(path: string) {
    const result = await DBController.deleteImage(path);
    console.log(result);
  }
  // // 读取单张图片
  // private static async getImageInfo(id){

  // }
}

module.exports = DBController;
