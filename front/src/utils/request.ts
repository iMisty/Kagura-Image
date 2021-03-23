/*
 * @Author: Miya
 * @Date: 2021-03-22 16:07:01
 * @LastEditTime: 2021-03-23 16:43:56
 * @LastEditors: Miya
 * @Description: AJAX Methods
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\utils\request.ts
 * @Version: 1.0
 */

import axios from 'axios';

// 上传图片用
export const UploadRequest = async (url: string, data: any | Blob) => {
  let params = new FormData();

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
  }; //添加请求头
  console.log(data)
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
