/*
 * @Author: Miya
 * @Date: 2021-03-19 10:49:18
 * @LastEditTime: 2021-03-19 18:14:15
 * @LastEditors: Miya
 * @Description: 点击图片弹出窗口
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\components\ManagerModel.tsx
 * @Version: 1.0
 */

import { defineComponent, reactive } from 'vue';
import Card from './mermaid-ui/card/card';
import Input from './mermaid-ui/input/input';
import Button from './mermaid-ui/button/button';
import '../style/ManagerModel.less';

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
      type: String,
      default: '',
    },
  },
  setup() {
    const data = reactive({
      url: 'https://www.hualigs.cn/image/6053008c864ea.jpg',
      fileName: 'Mock1.jpg',
      time: '2021-3-16 12:34:56',
    });
    const changeURL = (e: string) => {
      data.url = e;
    };
    const changeFileName = (e: string) => {
      data.fileName = e;
    };
    const a = () => {
      console.log(data);
    };
    return { data, changeURL, changeFileName, a };
  },

  render() {
    return (
      <div class="manager--model">
        <div class="mask fixed"></div>
        <div class="manager--model__container">
          <m-card>
            <section class="manager--model__image">
              <img src={this.data.url} />
            </section>
            <section class="manager--model__options wrap">
              <m-input
                title={'链接地址'}
                value={this.data.url}
                v-model={this.data.url}
                onInput={this.changeURL}
              ></m-input>
              <p>{this.data.url}</p>
              <m-input
                title={'文件名'}
                value={this.data.fileName}
                v-model={this.data.fileName}
                onInput={this.changeFileName}
              ></m-input>
              <p>{this.data.fileName}</p>
              <m-input></m-input>
            </section>
            <section class="manager--model__buttons wrap">
              <m-button>
                <p>确定</p>
              </m-button>
              <m-button onClick={this.a}>
                <p>确定</p>
              </m-button>
            </section>
          </m-card>
        </div>
      </div>
    );
  },
});

export default ManagerModel;
