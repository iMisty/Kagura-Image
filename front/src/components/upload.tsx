/*
 * @Author: Miya
 * @Date: 2021-03-15 18:05:02
 * @LastEditTime: 2021-03-16 18:16:06
 * @LastEditors: Miya
 * @Description: 拖拽上传文件组件
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\components\upload.tsx
 * @Version: 1.0
 */
import { defineComponent, onMounted, reactive } from 'vue';
import uploadFileList from '../components/uploadFileList';

import updateFileList from '../components/uploadFileList';

import '../style/upload.less';

const data: any = reactive({
  border: true,
  fileList: [],
});

// method: 拖拽上传
const uploadEvent = (file: any) => {
  for (let i = 0; i !== file.length; i++) {
    // 文件信息
    const fileJSON = {
      url: '',
      Progress: 0,
      fileText: '',
    };
    if (file[i].type.indexOf('image') === 0) {
      const fileurl = window.URL.createObjectURL(file[i]);
      console.log(fileurl);
      fileJSON.url = fileurl;
      fileJSON.fileText = file[i].name;
      console.log(fileJSON);
      data.fileList.push(fileJSON);
    }
  }
  console.log(data.fileList);
};

// method: 单击上传
const handleClickUpload = (e: any) => {};

// 在触发区松开鼠标触发
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

// 组件相关
const Upload = defineComponent({
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
      });
      console.log(data);
    });
    return { data };
  },
  render() {
    return (
      <div class={`upload`} id="drop-area">
        <div
          class={`upload--content ${this.data.border === true ? 'border' : ''}`}
        >
          <div class="upload--icon"></div>
          <div class="upload--text">
            <div class="pri-text">
              <h4 class="pri">拖拽上传或点击上传</h4>
              <input type="file" name="upload" id="upload" />
            </div>
            <div class="sec-text">
              <p class="sec">大小上限20MB，格式限制jpg / png / gif</p>
              <p class="sec">请勿上传违反当地法律法规的图片，且行且珍惜</p>
            </div>
          </div>
        </div>
        <div class="upload--list">
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list> 
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list> 
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
          <upload-list></upload-list>
        </div>
      </div>
    );
  },
});

export default Upload;
