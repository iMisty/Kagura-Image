/*
 * @Author: Miya
 * @Date: 2021-03-19 10:49:18
 * @LastEditTime: 2021-06-11 16:12:56
 * @LastEditors: Miya
 * @Description: 点击图片弹出窗口
 * @FilePath: \front\src\components\ManagerModel.tsx
 * @Version: 1.0
 */

import { computed, defineComponent, onMounted, reactive } from 'vue';
import Card from './mermaid-ui/card/card';
import Input from './mermaid-ui/input/input';
import Button from './mermaid-ui/button/button';
import '../style/ManagerModel.less';
import { GET } from '../utils/request';
import { HOST } from '../utils/host';

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
    'm-input': Input,
    'm-button': Button,
  },
  props: {
    // ID
    id: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const data = reactive({
      id: 0,
      url: '',
      fileName: '',
      time: '',
      size: 0,
    });
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
    // Click: 关闭窗口
    const handleClickClose = () => {
      data.id = data.size = 0;
      data.url = data.fileName = data.time = '';
    };
    onMounted(async () => {
      const getData = await GET(`/api/file/${props.id}`);
      data.id = getData.data.data[0].id;
      data.url = `${HOST}/${getData.data.data[0].path}`;
      data.fileName = getData.data.data[0].name;
      data.time = getData.data.data[0].time;
      data.size = getData.data.data[0].size;
    });
    return { data, computedSize, handleClickClose };
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
                <img src={this.data.url} />
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
                <m-button>
                  <p>确定</p>
                </m-button>
                <m-button color="info">
                  <p>复制链接</p>
                </m-button>
              </section>
            </m-card>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  },
});

export default ManagerModel;
