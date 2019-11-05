import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuei18n from 'vue-i18n';

Vue.config.productionTip = false;
Vue.use(vuei18n);

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
  render: h => h(App)
}).$mount('#app')
