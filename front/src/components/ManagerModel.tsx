/*
 * @Author: Miya
 * @Date: 2021-03-19 10:49:18
 * @LastEditTime: 2022-03-20 21:25:02
 * @LastEditors: Miya
 * @Description: 点击图片弹出窗口
 * @FilePath: \Kagura-Image\front\src\components\ManagerModel.tsx
 * @Version: 1.0
 */

import { computed, defineComponent, reactive, watch, ref, provide } from 'vue';
import Card from './mermaid-ui/card/card';
import Button from './mermaid-ui/button/button';
import Toast from './mermaid-ui/toast/toast';
import '../style/ManagerModel.less';
// import { GET } from '../utils/request';
import { setCopyText } from '../utils/copy';

interface FileManager {
  // name: 'QQ图片20210408230834.jpg';
  // path: 'upload_7e039b95e6b0677c9ff63bf5eae1b38d.jpg';
  // size: 469163;
  // time: '2021/6/9 上午7:46:35';
  id: number;
  name: string;
  path: string;
  size: number;
  time: Date;
}

const ManagerModel = defineComponent({
  name: 'ManagerModel',
  components: {
    'm-card': Card,
    'm-toast': Toast,
    'm-button': Button,
  },
  props: {
    // ID
    id: {
      type: Number,
      default: 0,
    },
  },
  emits: ['delete', 'id'],
  setup(props, ctx) {
    const data = reactive({
      id: 0,
      url: '',
      fileName: '',
      time: '',
      size: 0,
      path: '',
    });
    const msg = ref('');
    provide('msg', msg);
    const computedSize = computed(() => {
      const size = data.size;
      if (size <= 0) {
        return `0B`;
      }
      if (1024 > size) {
        return `${size}B`;
      } else if (size >= 1024 && size < 1048576) {
        return `${(size / 1024).toFixed(2)}KB`;
      } else {
        return `${(size / 1048576).toFixed(2)}MB`;
      }
    });
    /**
     * @description: Click: 关闭窗口
     * @param {*} void
     * @return {*}
     */
    const handleClickClose = (): void => {
      ctx.emit('id', data.id);
      data.id = data.size = 0;
      data.url = data.fileName = data.time = data.path = '';
    };
    /**
     * @description: Click: 删除图片
     * @param {string} path
     * @return {*}
     */
    const handleDeleteImage = (path: string) => {
      return ctx.emit('delete', path);
    };
    /**
     * @description: Click：复制链接
     * @param {string} path
     * @return {*}
     */
    const handleClickCopyLink = (path: string): void => {
      setCopyText(path);
      msg.value = '复制成功';
    };

    watch(
      () => props.id,
      async (newVal) => {
        if (newVal === 0) {
          handleClickClose();
          return true;
        }
        // const getData = await GET(`/api/file/${newVal}`);
        // data.id = getData.data.data[0].id;
        // data.url = `${getData.data.data[0].url}`;
        // data.fileName = getData.data.data[0].name;
        // data.time = getData.data.data[0].time;
        // data.size = getData.data.data[0].size;
        // data.path = getData.data.data[0].path;
      }
    );

    return {
      data,
      msg,
      computedSize,
      handleClickClose,
      handleClickCopyLink,
      handleDeleteImage,
    };
  },

  render() {
    return (
      <div class={`manager--model ${this.data.id === 0 ? 'hidden' : ''}`}>
        {this.data.id !== 0 ? (
          <div class="mask fixed" onClick={() => this.handleClickClose()}></div>
        ) : (
          ''
        )}
        {this.data.id !== 0 ? (
          <div class="manager--model__container">
            <m-card>
              <section class="manager--model__image">
                <img
                  src={this.data.url}
                  onClick={() => window.open(this.data.url)}
                />
              </section>
              <section class="manager--model__info wrap">
                <div class="info">
                  <h4 class="title">链接地址：</h4>
                  <p class="detail">{this.data.url}</p>
                </div>
                <div class="info">
                  <h4 class="title">文件名：</h4>
                  <p class="detail">{this.data.fileName}</p>
                </div>
                <div class="info">
                  <h4 class="title">上传时间：</h4>
                  <p class="detail">{this.data.time}</p>
                </div>
                <div class="info">
                  <h4 class="title">文件大小：</h4>
                  <p class="detail">{this.computedSize}</p>
                </div>
              </section>
              <section class="manager--model__buttons wrap">
                <m-button onClick={() => this.handleClickClose()}>
                  <p>确定</p>
                </m-button>
                <m-button
                  color="info"
                  onClick={() => this.handleClickCopyLink(this.data.url)}
                >
                  <p>复制链接</p>
                </m-button>
                <m-button
                  color="danger"
                  onClick={() => this.handleDeleteImage(this.data.path)}
                >
                  <p>删除图片</p>
                </m-button>
              </section>
            </m-card>
          </div>
        ) : (
          ''
        )}
        <m-toast></m-toast>
      </div>
    );
  },
});

export default ManagerModel;
