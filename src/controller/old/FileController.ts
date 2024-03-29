/*
 * @Author: Miya
 * @Date: 2021-03-22 10:11:32
 * @LastEditTime: 2022-03-21 21:42:50
 * @LastEditors: Miya
 * @Description: 文件管理
 * @FilePath: \backend\src\controller\old\FileController.ts
 * @Version: 1.0
 */

import { CTXBody, CTXParams, CTXRead, CTXReturn } from '../../interface/ctx';

import { fs } from 'fs';

import DBController = require('./DataBaseController');
import ImageModel = require('../../model/Image');

class FileController {
  /**
   * @description: 检测目录是否存在
   * @param {String} dir: 目录名
   * @todo 前端自定义根目录名
   * @return {Boolean}
   */
  private static async isDirExists(dir: String = './src/upload') {
    return new Promise(async (resolve, reject) => {
      await fs
        .exists(dir, (exists: Boolean) => {
          console.log(dir);
          console.log(exists);
          resolve(exists);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }
  /**
   * @description: 检测文件是否存在
   * @param {String} file: 文件名
   * @return {Boolean}
   */
  private static async isFileExists(file: string) {
    const dir = './src/static/upload';
    return fs.promises
      .stat(`${dir}/${file}`)
      .then(() => {
        return true;
      })
      .catch((err: any) => {
        console.log(err);
        return false;
      });
  }

  /**
   * @description: 读取图片根目录文件
   * @param {String} dir
   * @return {*}
   */
  private static async openRootFolder(dir: String = './src/static/upload') {
    const files = await ImageModel.find();
    return files;
  }

  /**
   * @description: 删除图片对应文件
   * @param {file}
   * @return {boolean}
   */
  private static async deleteImage(name: string): Promise<boolean> {
    // 检测文件是否存在
    const file = await FileController.isFileExists(`${name}`);
    if (!file) {
      return false;
    }
    // 删除文件
    const result = await fs.promises.rm(`./src/upload/${name}`);
    if (!result) {
      return false;
    }
    return true;
  }

  /**
   * @description: API: 返回检测目录接口
   * @param {any} ctx
   * @param {String} dir
   * @return {*}
   */
  public static async getDirExists(dir: String = './src/upload') {
    const result = await FileController.isDirExists(dir);
    return result;
  }

  /**
   * @description: API: 读取图片根目录文件
   * @param {CTXBody} ctx
   * @return {*} filelist
   */
  public static async getRootDirFiles(ctx: CTXBody): Promise<CTXReturn> {
    const dir = './src/upload';
    try {
      const result = await FileController.openRootFolder(dir);
      if (result === undefined) {
        return (ctx.body = {
          code: 0,
          msg: '目录为空',
          data: result,
        });
      }
      return (ctx.body = {
        code: 1,
        msg: 'ok',
        data: result,
      });
    } catch (error) {
      return (ctx.body = {
        code: 0,
        msg: error,
      });
    }
  }

  /**
   * @description:
   * @param {any} ctx
   * @return {*}
   */
  public static async setDeleteImage(ctx: CTXParams) {
    const path = ctx.params.path;
    // 删除文件管理器文件
    const resultFile = await FileController.deleteImage(path);
    // 更新数据库
    const resultDB = await DBController.setDeleteImage(path);

    if (resultFile && resultDB) {
      ctx.body = {
        resultFile,
        resultDB,
      };
      return true;
    } else {
      ctx.body = {
        resultFile,
        resultDB,
      };
      return false;
    }
  }
}

module.exports = FileController;
