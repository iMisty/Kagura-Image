/*
 * @Author: Miya
 * @Date: 2021-05-22 14:58:37
 * @LastEditTime: 2021-08-02 00:45:37
 * @LastEditors: Miya
 * @Description: ctx interface
 * @FilePath: \backend\src\interface\ctx.ts
 */

// 默认ctx内含字段
interface CTX {
  code: number,
  msg: string
}

// 读取文件接口字段
interface CTXRead extends CTX {
  request: {
    body: {
      dir: String;
    };
    error: any;
  };
}

// 默认返回接口字段
interface CTXReturn extends CTX {
  data?: unknown
}

interface CTXParams {
  params: {
    id?: number;
    path?: string;
  };
  body: any;
}

// 提交数据库用文件接口
interface UploadImageObject {
  size: Number;
  name: String;
  path: String;
  time: String;
}

export { CTXNormal, CTXRead, CTXReturn, CTXParams, UploadImageObject };
