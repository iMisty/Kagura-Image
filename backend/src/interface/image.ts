// 提交数据库用文件接口

interface imageClass {
  size: Number;
  name: String;
  path: String;
  time: String;
}

interface UploadImageObject extends imageClass {

}

interface RequestImageObject extends imageClass {
  url: String;
}

export { UploadImageObject, RequestImageObject }