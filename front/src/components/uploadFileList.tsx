/*
 * @Author: Miya
 * @Date: 2021-03-16 15:18:26
 * @LastEditTime: 2021-03-19 14:38:59
 * @LastEditors: Miya
 * @Description: 欲上传文件列表
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\components\uploadFileList.tsx
 * @Version: 1.0
 */
import { defineComponent } from 'vue';
import Card from './mermaid-ui/card/card';
import Button from './mermaid-ui/button/button';
import '../style/uploadFileList.less';

// const data = reactive({
//   url: 'blob:http://localhost:7478/80baface-7823-48db-95ec-f8ed688ba7f6',
//   Progress: 0,
//   fileText: '3c5cebf81a4c510feb099d5c7759252dd52aa5bb.jpg',
// });

const uploadFileList = defineComponent({
  components: {
    'm-button': Button,
    'm-card': Card,
  },
  emits: ['delete', 'update'],
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
  setup(props, ctx) {
    // Emit: 删除操作
    const handleClickDelete = () => {
      ctx.emit('delete');
    };
    // Emit: 上传操作
    const handleClickUpload = () => {
      ctx.emit('update');
    };
    return { handleClickUpload, handleClickDelete };
  },

  render() {
    return (
      <div class="upload--item">
        <img src={this.$props.url} class="upload--item__image" />
        <p class="upload--item__filename">{this.$props.fileText}</p>
        <div class="upload--item__progress"></div>
        <m-button
          color="danger"
          onClick={() => {
            this.handleClickDelete();
          }}
        >
          删除
        </m-button>
        <m-button
          onClick={() => {
            this.handleClickUpload();
          }}
        >
          上传
        </m-button>
      </div>
    );
  },
});

export default uploadFileList;
