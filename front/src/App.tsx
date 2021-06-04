/*
 * @Author: Miya
 * @Date: 2021-03-15 14:57:29
 * @LastEditTime: 2021-06-06 04:21:18
 * @LastEditors: Miya
 * @Description: APP page
 * @FilePath: \front\src\App.tsx
 * @Version: 1.0
 */
import { defineComponent } from 'vue';
import Logo from './components/HomeLogo';
import './style/normalize.less';
import './style/app.less';

const APP = defineComponent({
  name: 'APP',
  components: {
    logo: Logo,
  },
  setup() {},
  render() {
    return (
      <main>
        <section class="container">
          <nav>
            <section class="navbar--list">
              <logo/>
              <router-link class="navbar--item" tag="article" to="/">
                首页
              </router-link>
              <router-link class="navbar--item" tag="article" to="/manager">
                文件管理
              </router-link>
              {/* <router-link class="navbar--item" tag="article" to="/admin">
                后台
              </router-link> */}
            </section>
            {/* <section class="navbar--info">
              <router-link class="navbar--item" tag="article" to="/login">
                登录
              </router-link>
            </section> */}
          </nav>
          <router-view></router-view>
        </section>
      </main>
    );
  },
});

export default APP;
