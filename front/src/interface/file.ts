/*
 * @Author: Miya
 * @Date: 2021-06-11 17:13:22
 * @LastEditTime: 2021-06-11 17:15:45
 * @LastEditors: Miya
 * @Description: 文件信息接口
 * @FilePath: \front\src\interface\file.ts
 */
export interface File {
  id: number;
  name: string;
  path: string;
  size: number;
  time: string | Date;
}
