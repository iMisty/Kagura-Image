/*
 * @Author: Miya
 * @Date: 2021-05-31 17:32:44
 * @LastEditTime: 2021-06-13 03:37:05
 * @LastEditors: Miya
 * @Description: Mermaid UI Toast Component
 * @FilePath: \front\src\components\mermaid-ui\toast\toast.tsx
 */
import { defineComponent, reactive, watch, Transition, inject } from 'vue';
import './toast.less';
const data = reactive({
  showToast: false,
  // message: '',
});

const MermaidUIToast = defineComponent({
  name: 'toast',
  props: {
    // 模态框类型
    type: {
      type: String,
      default: 'success',
    },
  },
  setup(props) {
    const msg = inject('msg');
    // 关闭事件
    const close = () => {
      // data.message = '';
      data.showToast = false;
    };
    // 开启事件
    const start = () => {
      return setTimeout(() => {
        close();
      }, 3200);
    };

    // 检测文字
    watch(
      () => msg,
      (newVal) => {
        data.showToast = true;
        console.log(newVal);
        start();
      },
      { deep: true }
    );
    return { msg, data };
  },
  render() {
    const { showToast } = data;
    if (showToast) {
      return (
        <Transition name="fade">
          <div class={`mmui__toast mmui__toast--${this.$props.type}`}>
            {this.msg}
          </div>
        </Transition>
      );
    } else {
      return <Transition name="fade"></Transition>;
    }
  },
});
export default MermaidUIToast;
