import Vue from 'vue';
import App from './App.vue';
// import ElementUI from '../packages/elementUI';
// import '../packages/elementUI/';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 包测试
// import catkingUI from 'catking-ui';
// import 'catking-ui/catKing-ui.css';
// 本地测试
// import VueEleUI from './../packages/index';
Vue.use(ElementUI);
// Vue.use(VueEleUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
