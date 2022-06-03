/*
 * @Author: Miya
 * @Date: 2022-03-31 23:19:05
 * @LastEditTime: 2022-04-06 21:24:26
 * @LastEditors: Miya
 * @Description: Return Data Format
 * @FilePath: \Kagura-Image\src\services\ReturnData.ts
 */

import requestReturn from '../interface/RequestReturn';

interface ContextData<T> {
  (arg: T): T;
}

class ContextReturn<T> {
  private code: number;
  private msg: string;
  private data: ContextData<T>;
  constructor(code: number, msg: string, data: ContextData<T>) {
    this.code = code;
    this.msg = msg;
    this.data = data;
    this.setData();
  }

  public setData() {
    return { code: this.code, msg: this.msg, data: this.data };
  }
}
