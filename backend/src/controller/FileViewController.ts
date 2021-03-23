/*
 * @Author: Miya
 * @Date: 2021-03-22 10:11:32
 * @LastEditTime: 2021-03-23 11:05:19
 * @LastEditors: Miya
 * @Description: 文件管理
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\controller\FileViewController.ts
 * @Version: 1.0
 */

const fs = require('fs');

class FileView {
  // 读取根目录
  public static async openRootFolder(ctx: any) {
    try {
      const rootDir = './src/upload';
      const dir = await fs.promises.readdir(rootDir);

      console.log(await fs.promises.stat(dir[1]));

      return (ctx.body = {
        code: 1,
        data: dir,
        // datas,
      });
    } catch (err) {
      return (ctx.body = {
        code: 0,
        data: err,
      });
    }
  }

  // 上传单个图片
  public static async uploadImage(ctx: any) {
    const image = ctx.request.files.image;
    console.log(image);
    try {
      ctx.body = {
        image,
      };
    } catch (error) {
      ctx.body = {
        error,
      };
    }
  }
}

module.exports = FileView;
