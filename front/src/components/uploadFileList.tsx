/*
 * @Author: Miya
 * @Date: 2021-03-16 15:18:26
 * @LastEditTime: 2021-03-16 18:15:23
 * @LastEditors: Miya
 * @Description: 欲上传文件列表
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\components\uploadFileList.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';
import '../style/uploadFileList.less';

const data = reactive({
  url: 'blob:http://localhost:7478/80baface-7823-48db-95ec-f8ed688ba7f6',
  Progress: 0,
  fileText: '3c5cebf81a4c510feb099d5c7759252dd52aa5bb.jpg',
});

const uploadFileList = defineComponent({
  props: {
    url: {
      type: String,
      default: '222',
    },
    progress: {
      type: Number,
    },
    fileText: {
      type: String,
      default: 'test text',
    },
  },
  setup() {
    data;
    return { data };
  },

  render() {
    return (
      <div class="upload--item">
        <img src={this.$props.url} class="upload--item__image" />
        <p class="upload--item__filename">{this.$props.fileText}</p>
        <div class="upload--item__progress"></div>
        <button class="upload--item__submit">Upload</button>
      </div>
    );
  },
});

export default uploadFileList;
