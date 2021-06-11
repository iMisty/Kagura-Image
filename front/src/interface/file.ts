/*
 * @Author: Miya
 * @Date: 2021-06-11 17:13:22
 * @LastEditTime: 2021-06-12 03:00:49
 * @LastEditors: Miya
 * @Description: 文件信息接口
 * @FilePath: \front\src\interface\file.ts
 */
export interface File {
  id: number;
  name: string;
  path: string;
  url: string;
  size: number;
  time: string | Date;
}
