/*
 * @Author: Miya
 * @Date: 2021-05-31 19:07:23
 * @LastEditTime: 2021-05-31 19:46:18
 * @LastEditors: Miya
 * @Description: Mermaid UI toast
 * @FilePath: \front\src\components\mermaid-ui\toast\index.ts
 */

// export default {
//   install(app: any, options: any) {
//     let vm: any = null;
//     let isClick = true;
//     const container = document.createElement('div');
//     app.config.globalProperties.$showToast = (message: string) => {
//       if (!isClick) {
//         return false;
//       }
//       if (!vm) {
//         vm = createVNode(Toast);
//       }
//       isClick = false;
//       render(vm, container);
//       document.body.appendChild(container);
//       Object.assign(vm.components.props, { message });

//       setTimeout(() => {
//         if (vm) {
//           container.parentNode?.removeChild(container);
//           isClick = true;
//         }
//       }, 3200);
//     };
//   },
// };
import MermaidUIToast from './toast';
import {
  defineComponent,
  createVNode,
  render,
  VNodeProps,
  isVNode,
  VNode,
  mergeProps,
} from 'vue';

interface ToastProps {
  message: String;
}

const initToast = defineComponent(MermaidUIToast);

let instance: any;

const Toast: any = (options: any) => {
  if (window === undefined) return false;

  if (typeof options === 'string') {
    options = {
      message: options,
    };
  }
};
// export default {
//   install: (app: any, options: any) => {
//     console.log('xxxxxxx');
//     app.config.globalProperties.$showToast = (text: string) => {
//       console.log(text);
//     };
//     app.provide('showToast', options);
//   },
// };
