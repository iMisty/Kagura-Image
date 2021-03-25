/*
 * @Author: Miya
 * @Date: 2021-03-23 15:35:17
 * @LastEditTime: 2021-03-25 15:01:55
 * @LastEditors: Miya
 * @Description: 数据库操作
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\backend\src\controller\DataBaseController.ts
 * @Version: 1.0
 */

const ImageModel = require('../model/Image');

interface Image {
  size: Number;
  name: String;
  path: String;
  time: String;
}

class DBController {
  // 图片入库
  public static async addNewImage(image: Image) {
    const result = new ImageModel({
      size: image.size,
      name: image.name,
      path: image.path,
      time: image.time,
    });
    try {
      await result.save();
      return true;
    } catch (error) {
      return error;
    }
  }

  // 图片遍历
  public static async getImageList(ctx: any) {
    // 根据ID查找单条目录
    const id = ctx.query.id;

    let result;

    if (id) {
      result = await ImageModel.find({ _id: id });
    } else {
      // 根据时间倒序
      result = await ImageModel.find().sort({ _id: -1 });
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
}

module.exports = DBController;
