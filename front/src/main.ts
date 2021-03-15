/*
 * @Author: Miya
 * @Date: 2021-03-15 11:14:06
 * @LastEditTime: 2021-03-15 15:07:39
 * @LastEditors: Miya
 * @Description: main config
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\main.ts
 * @Version: 1.0
 */
import { createApp } from 'vue';
import App from './App';
import router from './router/router';

const app = createApp(App);

app.use(router);

app.mount('#app');
