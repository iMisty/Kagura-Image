/*
 * @Description: Image Resize Class
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-03-22 09:40:52
 * @LastEditors: Mirage
 * @LastEditTime: 2022-03-22 12:08:38
 */

import resizeImg from 'resize-img';
import { readFile, writeFile } from 'fs/promises';
import { UploadImageObject } from '../interface/ctx';

type ResizeParams = {
  originalSrc: string;
  thumbnailSrc: string;
  width: number;
  height: number;
};

class ResizeImg {
  public original: string = './src/static/upload/';
  public thumbnail: string = './src/static/thumbnail/';
  public width: number = 128;
  public height: number = 128;
  public image: UploadImageObject;

  constructor(image: UploadImageObject) {
    this.image = image;
    this.createThumbnails();
  }

  private async createThumbnails() {
    const originalSrc = `${this.original}/${this.image.path}`;
    const thumbnailSrc = `${this.thumbnail}/${this.image.path}`;
    try {
      const readImage = await readFile(originalSrc);
      const resize = await resizeImg(readImage, { width: this.width });

      const writeImage = await writeFile(thumbnailSrc, resize);

      console.log(writeImage);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ResizeImg;
