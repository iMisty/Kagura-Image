/*
 * @Author: Miya
 * @Date: 2021-03-22 16:07:01
 * @LastEditTime: 2021-03-23 10:33:19
 * @LastEditors: Miya
 * @Description: AJAX Methods
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\utils\request.ts
 * @Version: 1.0
 */

import axios from 'axios';

// 上传图片用
export const UploadRequest = async (url: string, data: any) => {
  let params = new FormData();
  params.append('file', data);
  const ajax = await axios({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    url,
    data: params,
  })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  return ajax;
};
