/*
 * @Author: Miya
 * @Date: 2021-03-22 10:11:32
 * @LastEditTime: 2021-06-10 05:43:31
 * @LastEditors: Miya
 * @Description: 文件管理
 * @FilePath: \backend\src\controller\FileController.ts
 * @Version: 1.0
 */

import { CTXRead } from '../interface/ctx';

const fs = require('fs');

const ImageModel = require('../model/Image');

class FileController {
  /**
   * @description: 检测目录是否存在
   * @param {String} dir: 目录名
   * @todo 前端自定义根目录名
   * @return {Boolean}
   */
  private static async isDirExists(dir: String = './src/upload') {
    const isHasDir = await fs.exists(dir, (exists: Boolean) => {
      return exists;
    });
    return isHasDir;
  }

  /**
   * @description: API: 返回检测目录接口
   * @param {any} ctx
   * @param {String} dir
   * @return {*}
   */
  public static async getDirExists(ctx: CTXRead, dir: String = './src/upload') {
    return (ctx.body = {
      msg: await FileController.isDirExists(dir),
    });
  }

  /**
   * @description: 读取图片根目录文件
   * @param {String} dir
   * @return {*}
   */
  private static async openRootFolder(dir: String = './src/upload') {
    // const files = await fs.promises.readdir(dir);
    const files = await ImageModel.find();
    return files;
  }

  /**
   * @description: API: 读取图片根目录文件
   * @param {CTXRead} ctx
   * @return {*} filelist
   */
  public static async getRootDirFiles(ctx: CTXRead) {
    // const dir = ctx.request.body.dir;
    const dir = './src/upload';
    try {
      const result = await FileController.openRootFolder(dir);
      if (result === undefined) {
        return (ctx.body = {
          code: 0,
          data: result,
          msg: '目录为空',
        });
      }
      return (ctx.body = {
        code: 1,
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
   * @description: 读取数据库与文件差异
   * @param {*}
   * @return {Boolean} isUnequal: 当数据库与文件存在差异时为true
   */
  private static async checkImageList(dir: String = './src/upload') {
    // 服务器文件列表
    const listOnServer = new Set(
      await FileController.openRootFolder(dir as any)
    );
    // 数据库内入库文件列表
    const listOnDatabase = await ImageModel.find();

    const pathOnDatabase = new Set(
      listOnDatabase.map((item: { path: String }) => {
        return item.path;
      })
    );

    console.log('Server:' + [...listOnServer]);
    console.log('Database:' + [...pathOnDatabase]);
    return {
      Server: [...listOnServer],
      Database: [...pathOnDatabase],
      isUnequal:
        [...listOnServer].length !== [...pathOnDatabase].length ? true : false,
    };
  }

  /**
   * @description: API: 获取图片文件名信息
   * @param {CTXRead} ctx
   * @return {*}
   */
  public static async getImage(ctx: CTXRead) {
    const result = await FileController.checkImageList('./src/upload');
    console.log(result);
    try {
      return (ctx.body = {
        data: result,
      });
    } catch (err) {
      return (ctx.body = {
        err,
      });
    }
  }
}

module.exports = FileController;
