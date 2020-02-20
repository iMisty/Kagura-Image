import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuei18n from 'vue-i18n';
import axios from 'axios';
import './less/style.less';

Vue.config.productionTip = false;
Vue.use(vuei18n);
Vue.prototype.$axios = axios;
Vue.prototype.HOST = 'https://blog.dressweb.cn';

const i18n = new vuei18n({
  locale: 'zh',
  messages: {
    'zh': require('./assets/lang/zh'),
    'en': require('./assets/lang/en'),
    'jp': require('./assets/lang/jp')
  }
});

new Vue({
  router,
  store,
  i18n,
  axios,
  render: h => h(App)
}).$mount('#app')
