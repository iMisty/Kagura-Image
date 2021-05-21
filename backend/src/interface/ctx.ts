/*
 * @Author: Miya
 * @Date: 2021-05-22 14:58:37
 * @LastEditTime: 2021-05-23 22:38:45
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

export { CTXNormal, CTXRead };
