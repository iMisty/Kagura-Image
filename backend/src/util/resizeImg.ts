/*
 * @Author: Miya
 * @Date: 2021-09-14 23:09:46
 * @LastEditTime: 2021-09-15 00:59:15
 * @LastEditors: Miya
 * @Description: Resize Util
 * @FilePath: \backend\src\util\resizeImg.ts
 */
const resizeImg = require('resize-img');
const fs = require('fs');

/**
 * @description: 修改图片大小
 * @param {String} src: 原图片相对地址
 * @param {String} thumbnailsrc： 缩略图存放地址
 * @return {Promise<String>}
 */
const resizeImage = (src: string, thumbnailSrc: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 重新计算图片大小
    resizeImg(fs.readFileSync(src), { width: 128 })
      // true: 支持格式则写入
      .then((buffer: Buffer) => {
        console.log('x')
        fs.writeFileSync(thumbnailSrc, buffer);
        return resolve(thumbnailSrc);
      })
      // false: 内部错误
      .catch((err: string) => {
        console.log(err);
        return reject(err);
      });
  });
};

export { resizeImage };
