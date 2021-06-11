/*
 * @Author: Miya
 * @Date: 2021-03-22 16:07:01
 * @LastEditTime: 2021-06-12 04:47:35
 * @LastEditors: Miya
 * @Description: AJAX Methods
 * @FilePath: \front\src\utils\request.ts
 * @Version: 1.0
 */

import axios, { AxiosRequestConfig } from 'axios';
import { HOST } from './host';

// 上传图片用
export const UploadRequest = async (url: string, data: any | Blob) => {
  let params = new FormData();

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
  }; //添加请求头
  console.log(data);
  params.append('image', data, data.name);

  // 发送 AJAX 请求
  const ajax = await axios
    .post(url, params, config)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return ajax;
};

export const GET = async (url: string, data?: any) => {
  const result = await axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return result;
};

export const DELETE = async (url: string, data?: any) => {
  const result = await axios
    .delete(url, { data })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return result;
};
