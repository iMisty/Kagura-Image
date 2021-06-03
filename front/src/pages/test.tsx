/*
 * @Author: Miya
 * @Date: 2021-03-16 14:45:59
 * @LastEditTime: 2021-06-01 21:50:42
 * @LastEditors: Miya
 * @Description: test
 * @FilePath: \front\src\pages\test.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive, inject } from 'vue';

import MermaidUIModel from '../components/mermaid-ui/model/model';
import MermaidUIToast from '../components/mermaid-ui/toast/toast';

const data = reactive({
  file: [
    { url: '1' },
    { url: '2' },
    { url: '3' },
    { url: '4' },
    { url: '5' },
    { url: '6' },
  ],
  text: 1,
});

const test = defineComponent({
  components: {
    'm-model': MermaidUIModel,
    'm-toast': MermaidUIToast,
  },
  setup() {
    data;
    const a = () => {
      data.text = data.text + 1;
    };
    return { data, a };
  },
  render() {
    return (
      <div style="display:flex;flex-direction:column;justify-content: center;align-items:center;">
        <button onClick={() => this.a()}>click</button>
        <m-toast type="info" message={this.data.text}></m-toast>
      </div>
    );
  },
});

export default test;
