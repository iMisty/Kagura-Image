/*
 * @Author: Miya
 * @Date: 2021-03-18 17:24:22
 * @LastEditTime: 2021-03-18 17:24:40
 * @LastEditors: Miya
 * @Description: Login Page
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\pages\Login.tsx
 * @Version: 1.0
 */
import { defineComponent,reactive } from 'vue'

const data = reactive({})

const Login = defineComponent({
    setup(){
      data;
      return{ data }
    },

    render(){
        return(<div class="login">DuanGA</div>)
    }
});

export default Login;