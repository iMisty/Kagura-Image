const resizeImg = require('resize-img');
const fs = require('fs')


/**
 * @description: 修改图片大小
 * @param {String} src: 原图片相对地址
 * @param {String} thumbnailsrc： 缩略图存放地址
 * @return {Promise<String>} 
 */
const resizeImage = (src: string, thumbnailSrc: string) => {
  return new Promise((resolve: string, reject: string) => {
    // 重新计算图片大小
    resizeImg(fs.readFileSync(src), { width: 128 })
      // true: 支持格式则写入
      .then((buffer: Buffer) => {
        fs.writeFileSync(thumbnailSrc, buffer)
        resolve(thumbnailSrc)
      })
      // false: 内部错误
      .catch(err => {
        reject(err)
      })
  })
}

export { resizeImage }