/*
 * @Author: Miya
 * @Date: 2021-03-16 14:45:59
 * @LastEditTime: 2021-03-25 17:17:01
 * @LastEditors: Miya
 * @Description: test
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\pages\test.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';

import MermaidUIModel from '../components/mermaid-ui/model/model';

const data = reactive({
  file: [
    { url: '1' },
    { url: '2' },
    { url: '3' },
    { url: '4' },
    { url: '5' },
    { url: '6' },
  ],
});

const test = defineComponent({
  components: {
    'm-model': MermaidUIModel
  },
  setup() {
    data;
    return { data };
  },
  render() {
    return (
      <div style="display:flex;justify-content: center;align-items:center;">
        <m-model></m-model>
      </div>
    );
  },
});

export default test;
