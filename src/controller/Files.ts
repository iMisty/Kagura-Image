/*
 * @Author: Miya
 * @Date: 2022-03-21 21:53:08
 * @LastEditTime: 2022-04-06 21:21:42
 * @LastEditors: Miya
 * @Description: Controller about Files
 * @FilePath: \Kagura-Image\src\controller\Files.ts
 */

import * as fs from 'fs/promises';
import { Context } from 'koa';

class FileController {
  public static async Get(ctx: Context) {
    console.log(ctx.query);
    return (ctx.body = {
      ctx: ctx.query,
    });
  }
}

export default FileController;
