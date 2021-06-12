/*
 * @Author: Miya
 * @Date: 2021-03-16 14:45:59
 * @LastEditTime: 2021-06-13 02:37:03
 * @LastEditors: Miya
 * @Description: test
 * @FilePath: \front\src\pages\test.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive, provide, ref } from 'vue';
import Toast from '../components/mermaid-ui/toast/toast';

const data = reactive({
  msg: 0,
});

const test = defineComponent({
  components: {
    'm-toast': Toast,
  },
  setup() {
    data;

    const b = () => {
      data.msg += 1;
      return `xxxxx${data.msg}`;
    };
    provide('msg', data.msg);

    return { data, b };
  },
  render() {
    return (
      <div style="display:flex;flex-direction:column;justify-content: center;align-items:center;">
        <m-toast type="success"></m-toast>
        {data.msg}
        <button onClick={() => this.b()}>222222</button>
      </div>
    );
  },
});

export default test;
