/*
 * @Author: Miya
 * @Date: 2022-03-21 21:53:08
 * @LastEditTime: 2022-03-21 22:03:09
 * @LastEditors: Miya
 * @Description: Controller about Files
 * @FilePath: \backend\src\controller\Files.ts
 */

import * as fs from 'fs/promises';

class File {
  private a: any;
  constructor(a: any) {
    this.a = a;
    this.init();
  }

  init() {
    console.log(this.a);
  }
}
