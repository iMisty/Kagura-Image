/*
 * @Author: Miya
 * @Date: 2021-03-15 11:14:06
 * @LastEditTime: 2022-03-20 16:36:23
 * @LastEditors: Miya
 * @Description: main config
 * @FilePath: \Kagura-Image\front\src\main.ts
 * @Version: 1.0
 */
import { createApp } from 'vue';
import App from './App';
import router from './router/router';

const app = createApp(App);

app.use(router);

app.mount('#app');
