<div align="center"><img src="https://img.gejiba.com/images/5386bb47128949fd7dc0ae84968fe686.png"/></div>

---

## 项目说明

基于 NodeJS  驱动的图床项目，采用前后端分离式设计，均采用 TypeScript / TSX ，数据库使用 MongoDB


### 前端

- Vue 3.x
- Vite 2
- Less
- Mermaid UI v4

### 后端

- Koa 2

## 介绍

PHP为载体的图床见多了，想写一个使用Node.JS驱动的图床，就这么简单粗暴

## 支持浏览器

**Vite2.0已不支持IE浏览器（包括IE11）**

## 目录结构
```
├─backend：后端配置
│  └─src
│      ├─config：数据库及服务器链接配置
│      ├─controller：Controller层
│      ├─interface：TypeScript接口
│      ├─model：Model层
│      ├─router：Koa路由
│      ├─upload：默认上传图片路径
│      └─util：封装方法函数
└─front：前端配置
    ├─public：图标
    └─src
        ├─assets：资源文件
        ├─components：组件
        ├─interface：TypeScript接口
        ├─pages：页面
        ├─router：路由
        ├─style：CSS样式
        └─utils：封装方法函数
```
## 如何部署

（待完善）

## 接口文档

（待完善）

## 使用协议

MIT

## 特别说明

- Logo 字体采用 `Aurely Lovely` 字体，该字体仅限于个人非商业性目的使用