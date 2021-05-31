/*
 * @Author: Miya
 * @Date: 2021-03-15 18:05:02
 * @LastEditTime: 2021-05-29 12:04:50
 * @LastEditors: Miya
 * @Description: 拖拽上传文件组件
 * @FilePath: \front\src\components\UploadFile.tsx
 * @Version: 1.0
 */
import { defineComponent, onMounted, reactive } from 'vue';
import uploadFileList from './UploadFileList';
import '../style/upload.less';
import { UploadRequest } from '../utils/request';

interface upload {
  url: String;
  progress: Number;
  fileText: String;
}

const data: any = reactive({
  border: true,
  fileList: [
    // {
    //   url: 'https://s3.ax1x.com/2021/03/17/6yqjPg.jpg',
    //   Progress: 0,
    //   fileText: '3c5cebf81a4c510feb099d5c7759252dd52aa5bb.jpg',
    // },
  ],
  tempFile: [],
  fileInfo: undefined,
});

// method: 拖拽上传
// TODO: 检测非图片
// TODO: 限制预上传大小
const uploadEvent = async (file: any) => {
  data.tempFile.push(file);
  console.log(data.tempFile);
  for (let i = 0; i !== file.length; i++) {
    // 文件信息
    const fileJSON = {
      url: '',
      Progress: 0,
      fileText: '',
      res: {},
    };
    if (file[i].type.indexOf('image') === 0) {
      // 上传图片开启缩略图
      const fileurl = window.URL.createObjectURL(file[i]);
      // console.log(fileurl);
      fileJSON.url = fileurl;
      fileJSON.fileText = file[i].name;
      // console.log(fileJSON);
      data.fileList.push(fileJSON);
    }
  }
};

// 在触发区松开鼠标触发
// TODO: fix any
const eventDrop = (e: any) => {
  data.border = true;
  e.stopPropagation();
  e.preventDefault();
  console.log('Drop');
  // 检测拖动文件
  const fileData = e.dataTransfer.files;
  console.log(fileData);
  uploadEvent(fileData);
};

/**
 * @description 上传图片至服务器
 * @param index 上传文件位于队列的顺序
 */
const uploadImage = async (index: Number) => {
  console.log(index);
  const tempData = data.tempFile[0][index as number];
  console.log(tempData);

  const res = await UploadRequest('/api/image', tempData);

  console.log(res.data);
  if (res.data.code === 1) {
    data.fileList[index as number].res = res.data.data;
  }
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

const deleteUploadImage = (index: Number) => {
  console.log(index);
  return data.fileList.splice(index, 1);
};

const getImageInfo = (index: Number) => {
  const info = data.fileList[index as number].res;
  return (data.fileInfo = info);
};

// 组件相关
const UploadFile = defineComponent({
  components: {
    'upload-list': uploadFileList,
  },
  setup() {
    data;
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
      console.log(data);
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
                <input type="file" name="image" id="upload" />
              </form>
            </div>
            <div class="sec-text">
              <p class="sec">大小上限20MB，格式限制jpg / png / gif</p>
              <p class="sec">请勿上传违反当地法律法规的图片，且行且珍惜</p>
            </div>
          </div>
        </div>
        {this.data.fileList.length !== 0 ? (
          <div class="upload--list">
            {
              this.data.fileList.map((item: upload, index: Number) => {
                return (
                  <upload-list
                    url={item.url}
                    progress={item.progress}
                    fileText={item.fileText}
                    data-index={index}
                    onInfo={() => getImageInfo(index)}
                    onDelete={() => deleteUploadImage(index)}
                    onUpdate={() => uploadImage(index)}
                  ></upload-list>
                );
              })
            }
          </div>
        ) : (
          ''
        )}
        {this.data.fileInfo !== undefined ? <div>333</div> : ''}
      </div>
    );
  },
});

export default UploadFile;
