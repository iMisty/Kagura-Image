/*
 * @Author: Miya
 * @Date: 2021-03-15 18:05:02
 * @LastEditTime: 2021-06-13 03:04:32
 * @LastEditors: Miya
 * @Description: 拖拽上传文件组件
 * @FilePath: \front\src\components\UploadFile.tsx
 * @Version: 1.0
 */
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  provide,
} from 'vue';
import uploadFileList from './UploadFileList';
import MermaidUIButton from './mermaid-ui/button/button';
import MermaidUIToast from './mermaid-ui/toast/toast';
import ManagerModel from './ManagerModel';
import '../style/upload.less';
import { UploadRequest } from '../utils/request';
import { HOST } from '../utils/host';
import { setCopyText } from '../utils/copy';

interface upload {
  url: String;
  progress: Number;
  fileText: String;
  status: String;
}

interface FileList {
  lastModified: Number;
  lastModifiedData: Date;
  name: string;
  size: Number;
  type: string;
}

interface UploadFile {
  border: boolean;
  fileList: any[];
  tempFile: any[];
  fileInfo?: String[];
  uploaded: number;
}

interface MouseEventExtra extends MouseEvent {
  dataTransfer: any;
}

const data: UploadFile = reactive({
  border: true,
  fileList: [],
  tempFile: [],

  fileInfo: undefined,
  uploaded: 0,
});

const id = ref(0);

const msg = ref('');

// 在触发区松开鼠标触发
// TODO: fix any
const eventDrop = (e: MouseEventExtra) => {
  data.border = true;
  e.stopPropagation();
  e.preventDefault();
  console.log('Drop');
  // 检测拖动文件
  const fileData = e.dataTransfer.files;
  console.log(fileData);
  uploadEvent(fileData);
};

// 进入拖动区触发
const eventDropEnter = (e: MouseEvent) => {
  data.border = true;
  e.stopPropagation();
  e.preventDefault();
  console.log(`DropEnter`);
};

// 进入拖动区拖拽
const eventDragLeave = (e: MouseEvent) => {
  data.border = true;
  e.stopPropagation();
  e.preventDefault();
  console.log('DragLeave');
};

// 进入拖动区拖拽
const eventDragOver = (e: MouseEvent) => {
  data.border = false;
  e.stopPropagation();
  e.preventDefault();
  console.log('DragOver');
};

/**
 * @description: 拖拽加载图片至预上传列表
 * @param {FileList<Array>} 上传图片列表
 * @return {*}
 */
// TODO: 检测非图片提示信息
// TODO: 限制预上传大小
const uploadEvent = async (file: FileList[]) => {
  data.tempFile.push(...file);
  console.log(data.tempFile);
  for (let i = 0; i !== file.length; i++) {
    // 文件信息
    const fileJSON = {
      url: '',
      Progress: 0,
      fileText: '',
      status: 'waiting',
      res: null,
    };
    if (file[i].type.indexOf('image') === 0) {
      // 上传图片开启缩略图
      const fileurl = window.URL.createObjectURL(file[i]);
      fileJSON.url = fileurl;
      fileJSON.fileText = file[i].name;
      data.fileList.push(fileJSON);
    }
  }
};

/**
 * @description 上传图片至服务器
 * @param index 上传文件位于队列的顺序
 */
const uploadImage = async (index: number) => {
  console.log(index);
  if (data.fileList[index].res !== null) {
    return false;
  }
  // 切换状态
  data.fileList[index].status = 'uploading';
  const tempData = data.tempFile[index];
  console.log(tempData);

  const res = await UploadRequest('/api/image', tempData);

  console.log(res.data);
  if (res.data.code === 1) {
    data.fileList[index].res = res.data.data;
    data.fileList[index].status = 'successed';
    data.uploaded += 1;
    // data.tempFile.splice(0, 1);
  }
  return true;
};

/**
 * @description: 上传多张图片
 * @param {*}
 * @return {*}
 */
const uploadMultiImage = async () => {
  const len = data.tempFile.length;
  for (let i = 0; i < len; i++) {
    await uploadImage(i);
  }
  return true;
};

/**
 * @description: 删除等待上传图片
 * @param {number} index
 * @return {*}
 */
const deleteUploadImage = (index: number) => {
  data.tempFile.splice(index, 1);
  return data.fileList.splice(index, 1);
};

/**
 * @description: 获取图片信息
 * @param {number} index
 * @return {*}
 */
const getImageInfo = (index: number) => {
  const info = data.fileList[index as number].res;
  console.log(info);
  return (id.value = info.id);
};

/**
 * @description: 清除队列
 * @param {*}
 * @return {boolean}
 */
const deleteUploadImageList = () => {
  data.fileList = [];
  data.tempFile = [];
  return true;
};

/**
 * @description: 复制链接地址
 * @param {Number} index
 * @return {String} link
 */
const getCopyLink = (index: number) => {
  const link = `${HOST}/${data.fileList[index].res.path}`;
  setCopyText(link);
  return (msg.value = '复制成功');
};

/**
 * @description: 关闭模态框后清除ID
 * @param {Number} id
 * @return {*}
 */
const changeID = (e: number) => {
  return (id.value = 0);
};

// 组件相关
const UploadFile = defineComponent({
  components: {
    'upload-list': uploadFileList,
    'manager-model': ManagerModel,
    'm-button': MermaidUIButton,
    'm-toast': MermaidUIToast,
  },
  setup() {
    data;
    provide('msg', msg);
    onMounted(() => {
      const area = document.getElementById('drop-area');
      const upload = document.getElementById('upload');
      area?.addEventListener('drop', eventDrop, false);
      area?.addEventListener('dragenter', eventDropEnter);
      area?.addEventListener('dragleave', eventDragLeave);
      area?.addEventListener('dragover', eventDragOver);
      upload?.addEventListener('change', (e?: any) => {
        const file = e?.target.files;
        console.log(file);
        uploadEvent(file);
      });
    });
    onUnmounted(() => {
      data.fileList = [];
      data.tempFile = [];
      data.fileInfo = undefined;
      data.uploaded = 0;
    });
    return { data };
  },
  render() {
    return (
      <div class="upload">
        <div
          class={`upload--content ${this.data.border === true ? 'border' : ''}`}
          id="drop-area"
        >
          <div class="upload--icon"></div>
          <div class="upload--text">
            <div class="pri-text">
              <h4 class="pri">拖拽上传或点击上传</h4>
              <form action="/api/dir" method="post">
                <input type="file" name="image" id="upload" multiple />
              </form>
            </div>
            <div class="sec-text">
              <p class="sec">大小上限20MB，格式限制jpg / png / gif</p>
              <p class="sec">请勿上传违反当地法律法规的图片，且行且珍惜</p>
            </div>
          </div>
        </div>
        {this.data.fileList.length !== 0 ? (
          <div class="upload--options">
            <m-button color="danger" onClick={() => deleteUploadImageList()}>
              清除队列
            </m-button>
            <m-button
              disabled={data.fileList.length === data.uploaded}
              onClick={() => uploadMultiImage()}
            >
              全部上传
            </m-button>
          </div>
        ) : (
          ''
        )}
        {this.data.fileList.length !== 0 ? (
          <div class="upload--list">
            {this.data.fileList.map((item: upload, index: Number) => {
              return (
                <upload-list
                  url={item.url}
                  progress={item.progress}
                  fileText={item.fileText}
                  status={item.status}
                  data-index={index}
                  onInfo={() => getImageInfo(index as number)}
                  onDelete={() => deleteUploadImage(index as number)}
                  onUpdate={() => uploadImage(index as number)}
                  onCopy={() => getCopyLink(index as number)}
                ></upload-list>
              );
            })}
          </div>
        ) : (
          ''
        )}
        <m-toast></m-toast>
        <manager-model
          id={id.value}
          onId={(e: number) => changeID(e)}
        ></manager-model>
      </div>
    );
  },
});

export default UploadFile;
