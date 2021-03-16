/*
 * @Author: Miya
 * @Date: 2021-03-15 14:57:29
 * @LastEditTime: 2021-03-16 17:17:37
 * @LastEditors: Miya
 * @Description: APP page
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Kagura-Image\front\src\App.tsx
 * @Version: 1.0
 */
import { defineComponent } from 'vue';
import './style/normalize.less';
import './style/app.less';

const APP = defineComponent({
  setup() {},
  render() {
    return (
      <section class="container">
        <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/">文件管理</router-link>
          <router-link to="/">后台</router-link>
          <router-link to="/">登录</router-link>
        </nav>
        <router-view></router-view>
      </section>
    );
  },
});

export default APP;
