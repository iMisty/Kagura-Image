/*
 * @Author: Miya
 * @Date: 2021-03-18 17:24:22
 * @LastEditTime: 2021-09-19 18:07:28
 * @LastEditors: Miya
 * @Description: Login Page
 * @FilePath: \front\src\pages\Login.tsx
 * @Version: 1.0
 */
import { defineComponent, reactive } from 'vue';

const data = reactive({});

const Login = defineComponent({
  setup() {
    data;
    return { data };
  },

  render() {
    return <div class="login">DuanGA</div>;
  },
});

export default Login;
