/*
 * @Author: Miya
 * @Date: 2021-03-22 10:11:32
 * @LastEditTime: 2021-03-26 18:10:42
 * @LastEditors: Miya
 * @Description: 文件管理
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\controller\FileViewController.ts
 * @Version: 1.0
 */

import { formatDate } from '../util/formatDate';

const fs = require('fs');

const ImageModel = require('../model/Image');

const DBC = require('../controller/DataBaseController');

class FileView {
  // 读取根目录
  private static async openRootFolder(dir: String = './src/upload') {
    try {
      const directory = await fs.promises.readdir(dir);

      console.log(await fs.promises.stat(dir[1]));

      return directory;
    } catch (err) {
      return err;
    }
  }

  // 上传单个图片
  public static async uploadImage(ctx: any) {
    // 用户输入图片信息
    const image = ctx.request.files.image;
    console.log(image);
    // 截取地址
    const resPath = image.path.split('upload_');

    // 格式化时间

    // 输出数据
    const data = {
      size: image.size,
      name: image.name,
      path: `upload_${resPath[1]}`,
      time: formatDate(image.lastModifiedDate),
    };

    console.log(data);

    // 录入数据库
    const db = await DBC.addNewImage(data);

    try {
      ctx.body = {
        code: 1,
        msg: '上传成功',
        data,
        db,
      };
    } catch (error) {
      ctx.body = {
        code: 0,
        msg: '上传失败',
        err: error,
      };
    }
  }

  // 检查数据库与文件是否有差别
  private static async checkImageList(dir: String = './src/upload') {
    // 服务器文件列表
    const listOnServer = await FileView.openRootFolder(dir);
    // 数据库内入库文件列表
    const listOnDatabase = await ImageModel.find();

    const pathOnDatabase = listOnDatabase.map((item: any) => {
      return item.path;
    });

    const result = listOnDatabase.concat(pathOnDatabase).filter((item: any) => {
      return (
        listOnDatabase.indexOf(item) === -1 ||
        pathOnDatabase.indexOf(item) === -1
      );
    });

    return result;
  }

  public static async getImage(ctx: any) {
    const b = await FileView.checkImageList('./src/upload');
    console.log(b);
    try {
      return (ctx.body = {
        b,
      });
    } catch (error) {
      return (ctx.body = {
        error,
      });
    }
  }
}

module.exports = FileView;
