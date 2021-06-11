/*
 * @Author: Miya
 * @Date: 2021-03-16 15:18:26
 * @LastEditTime: 2021-06-09 07:47:14
 * @LastEditors: Miya
 * @Description: 欲上传文件列表
 * @FilePath: \front\src\components\uploadFileList.tsx
 * @Version: 1.0
 */
import { computed, defineComponent } from 'vue';
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
  emits: ['delete', 'update', 'info', 'copy'],
  props: {
    // 上传文件URL地址
    url: {
      type: String,
      default: '222',
    },
    // TODO: 进度条
    progress: {
      type: Number,
    },
    // 文件信息
    fileText: {
      type: String,
      default: 'test text',
    },
    // 是否已上传
    isUpdated: {
      type: Boolean,
      default: false,
    },
    // 状态
    status: {
      type: String,
      default: 'waiting',
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
    // Emit: 查看信息
    const handleClickInfo = () => {
      ctx.emit('info');
    };
    // Emit: 复制链接
    const handleClickCopy = () => {
      ctx.emit('copy');
    };
    // Computed: 根据状态变换状态文字
    const computedStatus = computed(() => {
      switch (props.status) {
        case 'waiting':
          return '上传';
        case 'uploading':
          return '正在上传';
        case 'successed':
          return '上传成功';
        case 'error':
          return '上传失败';
      }
    });
    return {
      handleClickUpload,
      handleClickDelete,
      handleClickInfo,
      handleClickCopy,
      computedStatus,
    };
  },

  render() {
    return (
      <div class="upload--item">
        <img src={this.$props.url} class="upload--item__image" />
        <p class="upload--item__filename">{this.$props.fileText}</p>
        {/* <div class="upload--item__progress"></div> */}
        <div class="upload--item__button">
          {this.$props.status === 'successed' ? (
            <section class="upload--item__button--success">
              <m-button
                color="info"
                disabled={this.$props.status !== 'successed'}
                onClick={() => {
                  this.handleClickInfo();
                }}
              >
                信息
              </m-button>
              <m-button
                disabled={this.$props.status !== 'successed'}
                onClick={() => {
                  this.handleClickCopy();
                }}
              >
                复制链接
              </m-button>
            </section>
          ) : (
            ''
          )}
          {this.$props.status !== 'waiting' ? (
            ''
          ) : (
            <m-button
              color="danger"
              disabled={this.$props.status !== 'waiting'}
              onClick={() => {
                this.handleClickDelete();
              }}
            >
              删除
            </m-button>
          )}
          <m-button
            disabled={this.computedStatus !== '上传'}
            onClick={() => {
              this.handleClickUpload();
            }}
          >
            {this.computedStatus}
          </m-button>
        </div>
      </div>
    );
  },
});

export default uploadFileList;
