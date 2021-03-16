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
  url: 'blob:http://localhost:7478/6a75b725-726a-47c7-8a08-35c46c49b957',
  Progress: 0,
  fileText: '3c5cebf81a4c510feb099d5c7759252dd52aa5bb.jpg',
});

const uploadFileList = defineComponent({
  setup(props) {
    data;
    return { data };
  },

  render() {
    return (
      <div class="upload--item">
        <img src={data.url} class="upload--item__image" />
        <p class="upload--item__filename">{data.fileText}</p>
        <div class="upload--item__progress"></div>
        <button class="upload--item__submit">Upload</button>
      </div>
    );
  },
});

export default uploadFileList;
