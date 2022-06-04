/*
 * @Author: Miya
 * @Date: 2022-04-06 21:25:33
 * @LastEditTime: 2022-04-06 22:18:00
 * @LastEditors: Miya
 * @Description: Upload Image Controller
 * @FilePath: \Kagura-Image\src\controller\Upload.ts
 */
import * as fs from 'fs/promises';
import { Context } from 'koa';

class UploadController {
  public static getUploadImage(ctx:Context){}
  public static setUploadImage(ctx: Context) {
    const getFile = ctx.request.files.upload;
    console.log(getFile);
    return ctx.body = {
      data: getFile
    }
  }
}

export default UploadController;
