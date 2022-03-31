/*
 * @Description: Normal Request Return
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-03-22 10:55:01
 * @LastEditors: Mirage
 * @LastEditTime: 2022-03-22 10:58:06
 */

type requestReturn<T> = {
  code: number;
  data: T;
  msg: string;
};

export default requestReturn;
