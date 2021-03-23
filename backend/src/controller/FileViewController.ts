/*
 * @Author: Miya
 * @Date: 2021-03-22 10:11:32
 * @LastEditTime: 2021-03-23 15:48:53
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
    // 用户输入图片信息
    const image = ctx.request.files.image;
    // 截取地址
    const resPath = image.path.split('upload_');

    // 输出数据
    const data = {
      size: image.size,
      name: image.name,
      path: `/upload_${resPath[1]}`,
    };

    try {
      ctx.body = {
        code: 1,
        msg: '上传成功',
        data
      };
    } catch (error) {
      ctx.body = {
        code: 0,
        msg: '上传失败',
        err: error,
      };
    }
  }
}

module.exports = FileView;
