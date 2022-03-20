/*
 * @Author: Miya
 * @Date: 2021-03-22 16:07:01
 * @LastEditTime: 2022-03-20 16:56:02
 * @LastEditors: Miya
 * @Description: AJAX Methods
 * @FilePath: \Kagura-Image\front\src\utils\request.ts
 * @Version: 1.0
 */

import axios from 'axios';
import Qs from 'qs';

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: '/',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    config.method === 'post'
      ? (config.data = Qs.stringify({ ...config.data }))
      : (config.params = { ...config.params });

    if (!config.headers) {
      return config;
    }
    if (config.method === 'put') {
      config.headers['Content-Type'] = 'application/json';
    } else {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    if (response.status !== 200 && response.status !== 0) {
      // TODO
    }
    return response.data;
  },
  (error) => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
