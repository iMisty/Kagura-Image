/*
 * @Author: Miya
 * @Date: 2021-05-22 14:58:37
 * @LastEditTime: 2021-06-12 04:38:47
 * @LastEditors: Miya
 * @Description: ctx interface
 * @FilePath: \backend\src\interface\ctx.ts
 */

// 默认ctx内含字段
interface CTXNormal {
  body: {
    msg?: String;
    code?: Number;
    err?: unknown;
    data?: unknown;
    db?: unknown;
  };
  dir: String;
}

// 读取文件字段
interface CTXRead extends CTXNormal {
  request: {
    body: {
      dir: String;
    };
    error: any;
  };
}

interface CTXReturn {
  code: Number;
  data?: unknown;
  msg?: String;
}

interface CTXParams {
  params: {
    id?: number;
    path?: string;
  };
  body: any;
}
export { CTXNormal, CTXRead, CTXReturn, CTXParams };
