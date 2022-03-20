/*
 * @Author: Miya
 * @Date: 2021-08-07 17:49:32
 * @LastEditTime: 2021-09-13 01:26:02
 * @LastEditors: Miya
 * @Description: FileController Class
 * @FilePath: \backend\src\controller\FilesController.ts
 */

import { readdir } from 'fs/promises';
import { CTXParams, CTXReturn } from '../interface/ctx';

class FilesController {
  /**
   * @description: 检测目录是否存在
   * @param {String} dir: 目录名
   * @return {Boolean}
   */
  private static async isDirExist(dirname: string) {
    return new Promise(async (response, reject) => {
      const files = await readdir(dirname);
      console.log(files);
      if (files.length !== 0) {
        return response(true);
      }
      return reject(false);
    }).catch((err) => {
      console.log(err);
      return false;
    });
  }

  /**
   * @description: API: 检测目录是否存在
   * @param {String} dir: 目录名
   * @return {Boolean}
   */
  public static async APIIsDirExist(ctx: any) {
    console.log(ctx.query);
    const param = ctx.query.path;
    return new Promise(async (resolve) => {
      const result = await FilesController.isDirExist(param);
      resolve(result);
    })
      .then((res) => {
        console.log('[API isDirExist]:');
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log('[API isDirExist]:');
        console.log(err);
        return err;
      })
      .finally(() => {
        console.log('[API]isDirExists Succeeded');
      });
  }
}

module.exports = FilesController;
