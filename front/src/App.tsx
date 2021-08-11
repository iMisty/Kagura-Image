/*
 * @Author: Miya
 * @Date: 2021-03-15 14:57:29
 * @LastEditTime: 2021-08-23 17:00:25
 * @LastEditors: Miya
 * @Description: APP page
 * @FilePath: \front\src\App.tsx
 * @Version: 1.0
 */
import { defineComponent } from 'vue';
import Logo from './components/HomeLogo';
import Toast from './components/mermaid-ui/toast/toast';
import './style/normalize.less';
import './style/app.less';

const APP = defineComponent({
  name: 'APP',
  components: {
    logo: Logo,
  },
  setup() {
  },
  render() {
    return (
      <main>
        <section class="container">
          <nav>
            <section class="navbar--list">
              <logo />
              <router-link class="navbar--item" tag="article" to="/">
                首页
              </router-link>
              <router-link class="navbar--item" tag="article" to="/manager">
                文件管理
              </router-link>
            </section>
          </nav>
          <router-view></router-view>
        </section>
      </main>
    );
  },
});

export default APP;
